/* E2E: in-app update scheme. Startup check fetches version.js fresh; a newer
 * deployed version shows a localized prompt listing one line per change since
 * the RUNNING version, with Update now (reload) / Later; Settings shows About
 * (version + full changelog). Manual gate; same setup recipe as tests/e2e-da.js.
 * NOTE: expectations reference the running version number — update the v9/v11
 * literals when PTB_VERSION moves on.
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const os=require('os');const SD=(process.env.SHOT_DIR||os.tmpdir()).replace(/\/$/,'');const SHOT = p => SD+'/upd-'+p+'.png';
const STUB = `window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:async()=>({error:null})})})};`;
// A "newer deployed" version.js (v11) with two new changelog lines beyond running v9.
const NEWER = `window.PTB_VERSION = {
  "version": 11,
  "changelog": [
    {"v": 11, "date": "2026-07-18", "en": "Spanish course added", "es": "Curso de español añadido"},
    {"v": 10, "date": "2026-07-18", "en": "Bug fixes", "es": "Corrección de errores"},
    {"v": 9, "date": "2026-07-17", "en": "Update prompt", "es": "Aviso de actualización"}
  ]
};`;

let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText + '\n' + (document.querySelector('div[style*="fixed"]')?.innerText || ''));

async function open(browser, { newer } = {}) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 } });
  const page = await ctx.newPage();
  await page.route('**/@supabase/**', r => r.fulfill({ contentType: 'application/javascript', body: STUB }));
  await page.route('**/react@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react/umd/react.production.min.js', 'utf8') }));
  await page.route('**/react-dom@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react-dom/umd/react-dom.production.min.js', 'utf8') }));
  await page.route('**/@babel/standalone/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/@babel/standalone/babel.min.js', 'utf8') }));
  if (newer) await page.route('**/version.js?*', r => r.fulfill({ contentType: 'application/javascript', body: NEWER })); // fetch has ?ts=; script tag (no query) gets the real file
  await page.addInitScript(() => {
    localStorage.setItem('ptb1:uiLang', 'es');
    localStorage.setItem('ptb1:course', 'en');
    localStorage.setItem('ptb1:courses', JSON.stringify([{ target: 'en', support: 'auto' }]));
    localStorage.setItem('ptb1:en:support', 'auto');
    localStorage.setItem('ptb1:en:level', 'A1');
    localStorage.setItem('ptb1:en:placementDone', '1');
  });
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 200)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2800);
  return { ctx, page };
}

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });

  // ---- 1: newer version deployed -> prompt with changes since running version ----
  {
    const { ctx, page } = await open(browser, { newer: true });
    const txt = await page.evaluate(() => document.body.innerText);
    S(/Nueva versión disponible/.test(txt), '1 update prompt shown (Spanish UI)');
    S(/v9/.test(txt) && /v11/.test(txt), '1 subtitle names running v9 → new v11');
    S(/Curso de español añadido/.test(txt) && /Corrección de errores/.test(txt), '1 changelog lines v10+v11 listed (localized)');
    S(!/Aviso de actualización\b.*v9/.test(txt.split('Novedades')[1] || ''), '1 v9 (already running) NOT listed as new');
    await page.screenshot({ path: SHOT('1-prompt') });
    // "Later" dismisses
    await page.locator('button', { hasText: /Más tarde/ }).click();
    await page.waitForTimeout(400);
    const txt2 = await page.evaluate(() => document.body.innerText);
    S(!/Nueva versión disponible/.test(txt2), '1 Later dismisses the prompt');
    await ctx.close();
  }

  // ---- 2: "Update now" triggers a reload ----
  {
    const { ctx, page } = await open(browser, { newer: true });
    const nav = page.waitForNavigation({ waitUntil: 'commit', timeout: 8000 }).then(() => true).catch(() => false);
    await page.locator('button', { hasText: /Actualizar ahora/ }).click();
    S(await nav, '2 Update now reloads the app');
    await ctx.close();
  }

  // ---- 3: same version deployed -> NO prompt ----
  {
    const { ctx, page } = await open(browser, {});
    const txt = await page.evaluate(() => document.body.innerText);
    S(!/Nueva versión disponible/.test(txt), '3 no prompt when up to date');
    await ctx.close();
  }

  // ---- 4: Settings shows About with version + full changelog ----
  {
    const { ctx, page } = await open(browser, {});
    await page.evaluate(() => { const b = [...document.querySelectorAll('button')].find(x => x.getAttribute('aria-label') === 'Settings'); if (b) b.click(); });
    await page.waitForTimeout(500);
    const txt = await page.evaluate(() => document.body.innerText);
    S(/Versión de la app/.test(txt) && /v9/.test(txt), '4 Settings About shows current version v9');
    S(/Primera versión/.test(txt), '4 full changelog reaches back to v1 (localized)');
    await page.screenshot({ path: SHOT('4-settings-about') });
    await ctx.close();
  }

  console.log('\n==== UPDATE SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
