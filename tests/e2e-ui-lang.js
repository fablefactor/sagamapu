/* E2E: tutoring-language coherence — the app chrome, lesson titles and
 * grammar must render in the learner UI language (never a target language
 * they may not read). Covers: speak list = UI_LANGS only; course lists hide
 * incoherent immersion; da course in Spanish; settings in Spanish; one-time
 * heal of stranded immersion. Manual gate; same setup as tests/e2e-da.js:
 *   npm i --no-save playwright-core react@18 react-dom@18 @babel/standalone
 *   python3 -m http.server 8877 &
 *   REPO=$(pwd) node tests/e2e-ui-lang.js
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const os = require('os'); const SD = (process.env.SHOT_DIR||os.tmpdir()).replace(/\/$/,''); const SHOT = p => `${SD}/uil-${p}.png`;
const STUB = `window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:()=>Promise.resolve({})})})};`;
let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText);
const dump = p => p.evaluate(() => Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)])));
// Danish words that would signal target-language leak into Spanish chrome
const DANISH_LEAK = /\b(Hilsner|Familie|Dagligdag|Tal og|køn|navneord|Bøjning|Smørrebrød|Hverdag|udtale)\b/;

async function newPage(browser, seed = {}) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 } });
  const page = await ctx.newPage();
  await page.route('**/@supabase/**', r => r.fulfill({ contentType: 'application/javascript', body: STUB }));
  await page.route('**/react@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react/umd/react.production.min.js', 'utf8') }));
  await page.route('**/react-dom@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react-dom/umd/react-dom.production.min.js', 'utf8') }));
  await page.route('**/@babel/standalone/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/@babel/standalone/babel.min.js', 'utf8') }));
  await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, seed);
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 300)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' }); await page.waitForTimeout(2500);
  return { ctx, page };
}
const seedFor = (uiLang, course, support, level) => ({
  'ptb1:uiLang': uiLang, 'ptb1:course': course,
  'ptb1:courses': JSON.stringify([{ target: course, support }]),
  [`ptb1:${course}:support`]: support, [`ptb1:${course}:level`]: level, [`ptb1:${course}:placementDone`]: '1',
  [`ptb1:${course}:completed`]: JSON.stringify([]),
  'ptb1:xp': '0', 'ptb1:streak': JSON.stringify({ streak: 0, best: 0, last: '' }),
  'ptb1:supportHealed': '1',
});

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });

  // ---- A: onboarding "I speak" only offers en/es (no Dansk) ----
  {
    const { ctx, page } = await newPage(browser);
    const txt = await innr(page);
    S(/Español/.test(txt) && /English/.test(txt), 'A speak list has English + Español');
    S(!/Dansk/.test(txt), 'A speak list does NOT offer Dansk (no UI table)', (txt.match(/Dansk/) || ['(absent)'])[0]);
    S(/Hablo|I speak/i.test(txt), 'A step-1 prompt legible (bilingual)');
    await page.screenshot({ path: SHOT('a-speak') });
    await ctx.close();
  }

  // ---- B: Spanish speaker sees BOTH courses; English speaker sees only English (Danish hidden) ----
  {
    const { ctx, page } = await newPage(browser);
    await page.locator('button', { hasText: /Español/ }).first().click(); await page.waitForTimeout(400);
    let txt = await innr(page);
    S(/Inglés/.test(txt) && /Danés/.test(txt), 'B es-speaker offered Inglés + Danés');
    await page.screenshot({ path: SHOT('b-es-learn') });
    await ctx.close();
    const { ctx: c2, page: p2 } = await newPage(browser);
    await p2.locator('button', { hasText: /English/ }).first().click(); await p2.waitForTimeout(400);
    txt = await innr(p2);
    S(/English/.test(txt), 'B en-speaker offered English course');
    S(!/Danish|Dansk/.test(txt), 'B en-speaker does NOT see Danish (would be unreadable immersion)', (txt.match(/Dan\w+/) || ['(absent)'])[0]);
    await p2.screenshot({ path: SHOT('b-en-learn') });
    await c2.close();
  }

  // ---- C: Spanish speaker, Danish course — all chrome + lesson titles + grammar in Spanish ----
  {
    const { ctx, page } = await newPage(browser, seedFor('es', 'da', 'es', 'A1'));
    let txt = await innr(page);
    S(/[¿áéíóñ]/.test(txt) && !DANISH_LEAK.test(txt), 'C da home chrome in Spanish, no Danish leak');
    await page.locator('button', { hasText: /lecciones/i }).first().click(); await page.waitForTimeout(500);
    txt = await innr(page);
    S(/Elige un tema|lecciones/i.test(txt), 'C lessons list header Spanish');
    S(!DANISH_LEAK.test(txt), 'C lesson TITLES in Spanish (not Danish)', (txt.match(DANISH_LEAK) || ['(clean)'])[0]);
    await page.screenshot({ path: SHOT('c-da-lessons') });
    // open a lesson -> grammar heading Spanish
    const topic = page.locator('button').filter({ hasText: /saludo|Saludos|Hola/i }).first();
    if (await topic.count()) { await topic.click(); await page.waitForTimeout(500); }
    txt = await innr(page);
    S(/[¿áéíóñ]/.test(txt), 'C grammar theory shown in Spanish');
    await page.screenshot({ path: SHOT('c-da-grammar') });
    await ctx.close();
  }

  // ---- D: settings + level + clear flows all in Spanish (da course) ----
  {
    const { ctx, page } = await newPage(browser, seedFor('es', 'da', 'es', 'A2'));
    await page.locator('button[aria-label], button', { hasText: /⚙|settings/i }).first().click().catch(()=>{});
    // settings gear has aria-label Settings; click it
    await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.getAttribute('aria-label')==='Settings'); if(b) b.click(); });
    await page.waitForTimeout(500);
    let txt = await innr(page);
    S(/Ajustes|Idioma|Cuenta|Reiniciar|Empezar/i.test(txt), 'D settings screen in Spanish');
    S(!DANISH_LEAK.test(txt), 'D settings no Danish leak');
    await page.screenshot({ path: SHOT('d-da-settings') });
    await ctx.close();
  }

  // ---- E: auto-heal — Spanish speaker stranded in da immersion gets healed to es ----
  {
    const seed = seedFor('es', 'da', 'none', 'A1'); delete seed['ptb1:supportHealed'];
    const { ctx, page } = await newPage(browser, seed); // broken state present at first mount
    const ls = await dump(page);
    S(ls['ptb1:da:support'] === 'es', 'E stranded immersion healed to es', ls['ptb1:da:support']);
    S(ls['ptb1:supportHealed'] === '1', 'E heal flag set (runs once)');
    const txt = await innr(page);
    S(!DANISH_LEAK.test(txt), 'E healed home shows Spanish, no Danish leak');
    await page.screenshot({ path: SHOT('e-healed') });
    await ctx.close();
  }

  console.log('\n==== UI-LANG SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
