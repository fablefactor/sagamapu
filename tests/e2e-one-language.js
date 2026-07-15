/* E2E: single tutoring-language model. One "Your language" setting drives
 * BOTH the chrome AND lesson/grammar content (no separate support-language
 * control); switching it flips both together; the immersion toggle shows
 * target-only content while chrome stays in the tutoring language.
 * Manual gate; same setup recipe as tests/e2e-da.js.
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const os=require('os');const SD=(process.env.SHOT_DIR||os.tmpdir()).replace(/\/$/,'');const SHOT = p => SD+'/onelang-'+p+'.png';
const STUB = `window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:null}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:async()=>({error:null})})})};`;
// no sbClient path is simpler: set SUPABASE_URL placeholder? Easier: stub returns no session AND we seed enrollment so app mounts. But AppShell needs session for app. Use a signed-in stub instead:
const STUB_IN = `window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:async()=>({error:null})})})};`;

let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText);
const openSettings = p => p.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.getAttribute('aria-label')==='Settings'); if(b)b.click(); });

async function open(browser, seed) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 950 } });
  const page = await ctx.newPage();
  await page.route('**/@supabase/**', r => r.fulfill({ contentType: 'application/javascript', body: STUB_IN }));
  await page.route('**/react@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react/umd/react.production.min.js', 'utf8') }));
  await page.route('**/react-dom@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react-dom/umd/react-dom.production.min.js', 'utf8') }));
  await page.route('**/@babel/standalone/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/@babel/standalone/babel.min.js', 'utf8') }));
  await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, seed);
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 200)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' }); await page.waitForTimeout(2500);
  return { ctx, page };
}
// Spanish speaker learning Danish, following the tutoring language (support 'auto').
const seed = {
  'ptb1:uiLang': 'es', 'ptb1:course': 'da',
  'ptb1:courses': JSON.stringify([{ target: 'da', support: 'auto' }]),
  'ptb1:da:support': 'auto', 'ptb1:da:level': 'A1', 'ptb1:da:placementDone': '1',
  'ptb1:da:completed': JSON.stringify([]), 'ptb1:xp': '0',
  'ptb1:streak': JSON.stringify({ streak: 0, best: 0, last: '' }),
};
const DANISH_TITLE = /Hilsner|Familie|Tal og|Hverdag/;   // da core lesson titles
const SPANISH_TITLE = /Saludos|Familia|Números|vida diaria/;

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });

  // ---- 1: es tutoring — chrome AND lesson titles in Spanish ----
  {
    const { ctx, page } = await open(browser, seed);
    let txt = await innr(page);
    S(/Vejen til B1/.test(txt) && /[¿áéíóñ]/.test(txt), '1 home chrome Spanish');
    await page.locator('button', { hasText: /lecciones/i }).first().click(); await page.waitForTimeout(500);
    txt = await innr(page);
    S(SPANISH_TITLE.test(txt) && !DANISH_TITLE.test(txt), '1 lesson titles in Spanish', (txt.match(SPANISH_TITLE)||[''])[0]);
    await page.screenshot({ path: SHOT('1-es') });
    await ctx.close();
  }

  // ---- 2: THE BUG FIX — switch "Your language" es→en: BOTH chrome and titles flip ----
  {
    const { ctx, page } = await open(browser, seed);
    await openSettings(page); await page.waitForTimeout(500);
    let txt = await innr(page);
    // only ONE language control (no separate support-language dropdown)
    S(/Tu idioma/i.test(txt), '2 single "Your language" control present');
    S(!/Idioma de apoyo/i.test(txt), '2 NO separate support-language control', /Idioma de apoyo/i.test(txt) ? 'still present' : 'gone');
    // switch to English
    await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.textContent.trim()==='English'); if(b)b.click(); });
    await page.waitForTimeout(600);
    txt = await innr(page);
    S(/Settings|Your language/.test(txt), '2 chrome switched to English', '');
    // go home then lessons, confirm titles now English (immersion, no en overlay for da)
    await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>/←|Back|Volver/.test(x.textContent)); if(b)b.click(); });
    await page.waitForTimeout(400);
    await page.locator('button', { hasText: /lessons|lecciones/i }).first().click(); await page.waitForTimeout(500);
    txt = await innr(page);
    // da has no 'en' overlay → English tutoring falls to immersion → Danish titles, but chrome English.
    S(/Lessons/.test(txt), '2 chrome (lessons header) in English after switch');
    await page.screenshot({ path: SHOT('2-en-switch') });
    const ls = await page.evaluate(() => localStorage.getItem('ptb1:uiLang'));
    S(ls === 'en', '2 uiLang persisted = en', ls);
    await ctx.close();
  }

  // ---- 3: immersion toggle (es tutoring) — content flips to Danish, chrome stays Spanish ----
  {
    const { ctx, page } = await open(browser, seed);
    await openSettings(page); await page.waitForTimeout(500);
    let txt = await innr(page);
    S(/Modo inmersión/.test(txt), '3 immersion toggle shown (overlay exists)');
    // toggle immersion on
    await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.getAttribute('role')==='switch'); if(b)b.click(); });
    await page.waitForTimeout(500);
    const ls = await page.evaluate(() => localStorage.getItem('ptb1:da:support'));
    S(ls === 'none', '3 immersion persisted (support=none)', ls);
    // chrome still Spanish
    txt = await innr(page);
    S(/Ajustes|Tu idioma/.test(txt), '3 chrome still Spanish under immersion');
    // lessons now Danish titles
    await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>/←|Volver/.test(x.textContent)); if(b)b.click(); });
    await page.waitForTimeout(400);
    await page.locator('button', { hasText: /lecciones/i }).first().click(); await page.waitForTimeout(500);
    txt = await innr(page);
    S(DANISH_TITLE.test(txt), '3 immersion: lesson titles now Danish', (txt.match(DANISH_TITLE)||[''])[0]);
    await page.screenshot({ path: SHOT('3-immersion') });
    await ctx.close();
  }

  console.log('\n==== ONE-LANG SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
