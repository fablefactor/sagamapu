/* E2E: Phase-B lazy course loading. A single-course (en) user must fetch ONLY
 * that course's chunks at startup — never the other courses' payloads — and
 * add-course must load the new course's chunk on demand. This is the guarantee
 * that a Danish/Spanish-only learner doesn't download English (and vice versa).
 * Runs against the built dist/. Same setup recipe as tests/e2e-da.js
 * (npm install && npm run build, then serve dist/ on :8877).
 */
const { chromium } = require('playwright-core');
const os = require('os');
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const CHROMIUM = process.env.CHROMIUM || '/opt/pw-browsers/chromium';
const SD = (process.env.SHOT_DIR || os.tmpdir()).replace(/\/$/, '');
const FACTORY = `window.__sbClientFactory=()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:async()=>({error:null})})});`;
let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText);

(async () => {
  const browser = await chromium.launch({ executablePath: CHROMIUM });
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 } });
  const page = await ctx.newPage();
  const fetched = [];
  page.on('request', r => { const m = r.url().match(/assets\/(en|da|es)\.(core|support)[^/]*\.js/); if (m) fetched.push(m[1] + '.' + m[2]); });
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 200)); pageErrors.push(String(e)); });
  await page.addInitScript({ content: FACTORY });
  await page.addInitScript(() => {
    localStorage.setItem('ptb1:uiLang', 'es');
    localStorage.setItem('ptb1:course', 'en');
    localStorage.setItem('ptb1:courses', JSON.stringify([{ target: 'en', support: 'auto' }]));
    localStorage.setItem('ptb1:en:support', 'auto');
    localStorage.setItem('ptb1:en:level', 'A1');
    localStorage.setItem('ptb1:en:placementDone', '1');
  });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  S(/Pathway to B1/.test(await innr(page)), 'home renders (en course lazily loaded)');
  const startup = [...new Set(fetched)].sort();
  S(startup.length >= 1 && startup.every(x => x.startsWith('en.')), 'en-only user fetched ONLY en chunks at startup', JSON.stringify(startup));
  S(!startup.some(x => x.startsWith('da.') || x.startsWith('es.')), 'da/es course payloads NOT fetched', JSON.stringify(startup));

  // add-course(da) should fetch da chunks on demand
  fetched.length = 0;
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /Inglés/.test(x.textContent)); if (b) b.click(); });
  await page.waitForTimeout(400);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /Añadir un curso|Add a course/.test(x.textContent)); if (b) b.click(); });
  await page.waitForTimeout(300);
  await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => /Danés|Danish/.test(x.textContent)); if (b) b.click(); });
  await page.waitForTimeout(1400);
  const daFetched = [...new Set(fetched)].filter(x => x.startsWith('da.'));
  S(daFetched.length >= 1, 'add-course(da) lazily fetched da chunks on demand', JSON.stringify(daFetched));
  const active = await page.evaluate(() => localStorage.getItem('ptb1:course'));
  S(active === 'da', 'switched to the newly added da course', active);
  await page.screenshot({ path: `${SD}/lazy-after-add.png` });

  console.log('\n==== LAZY SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
