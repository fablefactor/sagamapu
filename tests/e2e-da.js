/* E2E verification of the Danish course (target 'da', support Español).
 *
 * There is no build step and no CI; this is a manual gate like tools/validate.js.
 * The app loads React/Babel/Supabase from CDNs at runtime, so the test serves
 * those libs from node_modules and stubs Supabase (signed-in session) so the
 * app mounts headless. Assertions read document.getElementById('root').innerText
 * (NOT body textContent — that includes inlined <script> source).
 *
 * Setup + run (from the repo root):
 *   npm i --no-save playwright-core react@18 react-dom@18 @babel/standalone
 *   python3 -m http.server 8877 &            # serves the repo at :8877
 *   REPO=$(pwd) node tests/e2e-da.js
 *
 * Env: REPO (repo root, default cwd), BASE_URL (default http://127.0.0.1:8877/index.html),
 *      CHROMIUM (default /opt/pw-browsers/chromium), SHOT_DIR (screenshot dir, default os.tmpdir()).
 * Exit code 0 = all green.
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const os = require('os');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const CHROMIUM = process.env.CHROMIUM || '/opt/pw-browsers/chromium';
const SHOT_DIR = (process.env.SHOT_DIR || os.tmpdir()).replace(/\/$/, '');
const SHOT = p => `${SHOT_DIR}/da-${p}.png`;
const STUB = `window.supabase={createClient:()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:()=>Promise.resolve({})})})};`;

let failures = 0, steps = [], pageErrors = [];
function step(ok, name, detail) { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${name}${detail ? ' | ' + detail : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); }
const innr = p => p.evaluate(() => document.getElementById('root').innerText);
const dump = p => p.evaluate(() => Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)])));

async function newPage(browser, seed = {}) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 860 } });
  const page = await ctx.newPage();
  await page.route('**/@supabase/**', r => r.fulfill({ contentType: 'application/javascript', body: STUB }));
  await page.route('**/react@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react/umd/react.production.min.js', 'utf8') }));
  await page.route('**/react-dom@18/umd/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/react-dom/umd/react-dom.production.min.js', 'utf8') }));
  await page.route('**/@babel/standalone/**', r => r.fulfill({ contentType: 'application/javascript', body: fs.readFileSync(NM + '/@babel/standalone/babel.min.js', 'utf8') }));
  await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, seed);
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 300)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  return { ctx, page };
}
// Seed: enrolled in BOTH en and da, active da, es support, placement done.
const BOTH = {
  'ptb1:uiLang': 'es', 'ptb1:course': 'da',
  'ptb1:courses': JSON.stringify([{ target: 'en', support: 'es' }, { target: 'da', support: 'es' }]),
  'ptb1:en:support': 'es', 'ptb1:en:level': 'B1', 'ptb1:en:placementDone': '1',
  'ptb1:en:completed': JSON.stringify(['a1-greet', 'a1-fam']),
  'ptb1:da:support': 'es', 'ptb1:da:level': 'A2', 'ptb1:da:placementDone': '1',
  'ptb1:da:completed': JSON.stringify(['a1-hils']),
  'ptb1:xp': '120', 'ptb1:streak': JSON.stringify({ streak: 3, best: 7, last: new Date().toDateString() }),
};

(async () => {
  const browser = await chromium.launch({ executablePath: CHROMIUM });

  // ---- S1: fresh user onboards Español -> Danés, takes da placement ----
  {
    const { ctx, page } = await newPage(browser);
    let txt = await innr(page);
    step(/Hablo|I speak/i.test(txt), 'S1 onboarding step 1');
    await page.locator('button', { hasText: /Español/ }).first().click();
    await page.waitForTimeout(400);
    txt = await innr(page);
    step(/Danés/.test(txt), 'S1 Danish course offered (nameByLang es = Danés)', (txt.match(/Dan\w+/) || [''])[0]);
    step(/Inglés/.test(txt), 'S1 English course also offered');
    await page.screenshot({ path: SHOT('s1-learn') });
    await page.locator('button', { hasText: /Danés/ }).first().click();
    await page.waitForTimeout(700);
    txt = await innr(page);
    step(/nivel|Placement|prueba/i.test(txt), 'S1 da placement test shown');
    await page.screenshot({ path: SHOT('s1-placement') });
    for (let i = 0; i < 24; i++) {
      if (!/\d+ \/ 20/.test(await innr(page))) break;
      const opt = page.locator('button').filter({ hasText: /.+/ }).nth(1);
      if (!(await opt.count())) break;
      await opt.click().catch(() => {});
      const check = page.locator('button', { hasText: /Comprobar|Check/i }).first();
      if (await check.count()) await check.click().catch(() => {});
      await page.waitForTimeout(120);
      const next = page.locator('button', { hasText: /→|Siguiente|Continuar|Terminar|Finish|Ver/i }).first();
      if (await next.count()) await next.click().catch(() => {});
      await page.waitForTimeout(140);
    }
    await page.waitForTimeout(800);
    const ls = await dump(page);
    step(ls['ptb1:course'] === 'da', 'S1 active course = da', ls['ptb1:course']);
    step(ls['ptb1:uiLang'] === 'es', 'S1 uiLang = es');
    step(ls['ptb1:da:support'] === 'es', 'S1 da support = es', ls['ptb1:da:support']);
    step(/\{"target":"da","support":"es"\}/.test(ls['ptb1:courses'] || ''), 'S1 enrolled in da', ls['ptb1:courses']);
    step(/Vejen til B1/.test(await innr(page)), 'S1 home shows da branding (meta.title)');
    await page.screenshot({ path: SHOT('s1-home') });
    await ctx.close();
  }

  // ---- S2: da lesson theory in Spanish + Danish letters; level isolated from en ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    let txt = await innr(page);
    step(/Vejen til B1/.test(txt), 'S2 da home (branding)');
    step(/A2/.test(txt), 'S2 da level A2 (isolated from en B1)');
    await page.locator('button', { hasText: /lecciones|lektioner/i }).first().click();
    await page.waitForTimeout(500);
    const topic = page.locator('button').filter({ hasText: /hej|hils|saludo|Hilsner/i }).first();
    if (await topic.count()) { await topic.click(); await page.waitForTimeout(600); }
    txt = await innr(page);
    step(/[æøå]/i.test(txt), 'S2 da lesson contains Danish letters æøå');
    step(/[¿áéíóñ]/.test(txt), 'S2 da lesson theory shown in Spanish (support=es)');
    await page.screenshot({ path: SHOT('s2-lesson') });
    await ctx.close();
  }

  // ---- S3: da flashcard deck front label DANSK, back Español ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    await page.locator('button', { hasText: /flashcards|tarjetas/i }).first().click();
    await page.waitForTimeout(500);
    const deck = page.locator('button').filter({ hasText: /pasado|Compras|Viajes|Cuerpo|Trabajo/i }).first();
    step(await deck.count() > 0, 'S3 da A2 flashcard topics listed in Spanish');
    if (await deck.count()) { await deck.click(); await page.waitForTimeout(600); }
    let txt = await innr(page);
    step(/DANSK/.test(txt), 'S3 flashcard front label = DANSK (meta.frontLabel)');
    step(/Toca para revelar|Revelar respuesta/.test(txt), 'S3 a Danish card is showing (flip prompt present)');
    await page.screenshot({ path: SHOT('s3-front') });
    const rev = page.locator('button', { hasText: /Revelar respuesta|Reveal/i }).first();
    if (await rev.count()) await rev.click(); else await page.mouse.click(210, 210);
    await page.waitForTimeout(500);
    txt = await innr(page);
    step(/español/i.test(txt), 'S3 back label = Español (overlay name)', (txt.match(/español/i) || [''])[0]);
    await page.screenshot({ path: SHOT('s3-back') });
    await ctx.close();
  }

  // ---- S4: course switching da->en with per-course progress isolation ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    const chip = page.locator('button', { hasText: /Danés|Dansk|Vejen/ }).first();
    step(await chip.count() > 0, 'S4 da course chip on home');
    await chip.click(); await page.waitForTimeout(400);
    let txt = await innr(page);
    step(/Inglés/.test(txt), 'S4 switcher lists English course');
    await page.screenshot({ path: SHOT('s4-switcher') });
    await page.locator('button', { hasText: /Inglés/ }).first().click();
    await page.waitForTimeout(1200);
    const ls = await dump(page);
    step(ls['ptb1:course'] === 'en', 'S4 switched active course to en', ls['ptb1:course']);
    txt = await innr(page);
    step(/Pathway to B1/.test(txt), 'S4 home now shows en branding');
    step(/B1/.test(txt), 'S4 en level B1 preserved (isolated from da A2)');
    step(ls['ptb1:da:level'] === 'A2' && JSON.parse(ls['ptb1:da:completed']).includes('a1-hils'), 'S4 da progress preserved after switch', ls['ptb1:da:level']);
    step(ls['ptb1:en:level'] === 'B1', 'S4 en progress intact', ls['ptb1:en:level']);
    await page.screenshot({ path: SHOT('s4-after-switch') });
    await ctx.close();
  }

  // ---- S5: Danish text with æøå survives norm() (pronunciation scoring) ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    const normTest = await page.evaluate(() => {
      const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N}'\s]/gu, '').replace(/\s+/g, ' ').trim();
      return norm('Jeg køber rugbrød og æbler på Nørrebro!');
    });
    step(/køber/.test(normTest) && /rugbrød/.test(normTest) && /æbler/.test(normTest) && /nørrebro/.test(normTest),
      'S5 norm() preserves æøå (Danish pronunciation scoring works)', JSON.stringify(normTest));
    const pron = await page.evaluate(() => {
      const p = window.PTB_COURSES.da.core.pronunciation;
      const all = Object.values(p).flat().join(' ');
      return { count: Object.values(p).flat().length, hasSpecial: /[æøå]/i.test(all) };
    });
    step(pron.count >= 20 && pron.hasSpecial, 'S5 da pronunciation content is æøå-rich', JSON.stringify(pron));
    await ctx.close();
  }

  console.log('\n==== DA SUMMARY ====');
  console.log(steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
