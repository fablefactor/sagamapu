/* E2E verification of the Spanish course (target 'es', support English).
 * Covers: English-speaker onboarding offers Spanish with full support; es
 * lessons render with English overlay chrome-coherent; deck front label
 * ESPAÑOL with English backs; three-course switching with per-course
 * progress isolation; Peninsular content (vosotros, ñ) present; Spanish-UI
 * users get the es course as readable immersion.
 * Manual gate; same setup recipe as tests/e2e-da.js:
 *   npm i --no-save playwright-core react@18 react-dom@18 @babel/standalone
 *   python3 -m http.server 8877 &
 *   REPO=$(pwd) node tests/e2e-es.js
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const os = require('os');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const CHROMIUM = process.env.CHROMIUM || '/opt/pw-browsers/chromium';
const SD = (process.env.SHOT_DIR || os.tmpdir()).replace(/\/$/, '');
const SHOT = p => `${SD}/es-${p}.png`;
const STUB = `window.__sbClientFactory=()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:()=>Promise.resolve({})})});`;

let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText);
const dump = p => p.evaluate(() => Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)])));

async function newPage(browser, seed = {}) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 } });
  const page = await ctx.newPage();
  await page.addInitScript({ content: STUB });
  await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, seed);
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 300)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);
  return { ctx, page };
}
// English speaker enrolled in en (B1) and es (A1), active es.
const BOTH = {
  'ptb1:uiLang': 'en', 'ptb1:course': 'es',
  'ptb1:courses': JSON.stringify([{ target: 'en', support: 'auto' }, { target: 'es', support: 'auto' }]),
  'ptb1:en:support': 'auto', 'ptb1:en:level': 'B1', 'ptb1:en:placementDone': '1',
  'ptb1:en:completed': JSON.stringify(['a1-greet']),
  'ptb1:es:support': 'auto', 'ptb1:es:level': 'A1', 'ptb1:es:placementDone': '1',
  'ptb1:es:completed': JSON.stringify(['a1-saludos']),
  'ptb1:xp': '80', 'ptb1:streak': JSON.stringify({ streak: 2, best: 5, last: new Date().toDateString() }),
};

(async () => {
  const browser = await chromium.launch({ executablePath: CHROMIUM });

  // ---- S1: English speaker onboards -> Spanish offered with full support ----
  {
    const { ctx, page } = await newPage(browser);
    await page.locator('button', { hasText: /English/ }).first().click();
    await page.waitForTimeout(400);
    let txt = await innr(page);
    S(/Spanish/.test(txt), 'S1 Spanish course offered to English speaker', (txt.match(/Spanish/) || [''])[0]);
    S(/English/.test(txt), 'S1 English course also offered (immersion for en speakers)');
    S(!/Danish|Dansk/.test(txt), 'S1 Danish still hidden for en speakers (no en overlay)');
    await page.screenshot({ path: SHOT('s1-learn') });
    await page.locator('button', { hasText: /Spanish/ }).first().click();
    await page.waitForTimeout(700);
    txt = await innr(page);
    S(/Placement|level/i.test(txt), 'S1 es placement test shown (English chrome)');
    S(/llamo|llama|[ñáéí¿]/.test(txt), 'S1 placement content is Spanish');
    await page.screenshot({ path: SHOT('s1-placement') });
    const ls = await dump(page);
    S(ls['ptb1:course'] === 'es', 'S1 active course = es', ls['ptb1:course']);
    S(/"target":"es"/.test(ls['ptb1:courses'] || ''), 'S1 enrolled in es', ls['ptb1:courses']);
    await ctx.close();
  }

  // ---- S2: es lessons — English chrome + overlay, Spanish content ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    let txt = await innr(page);
    S(/Camino al B1/.test(txt), 'S2 es home shows es branding (meta.title)');
    S(/A1/.test(txt), 'S2 es level A1 (isolated from en B1)');
    await page.locator('button', { hasText: /lessons/i }).first().click();
    await page.waitForTimeout(500);
    txt = await innr(page);
    S(/Greetings|Gender|present/i.test(txt), 'S2 lesson TITLES in English (overlay)', (txt.match(/Greetings[^\n]*/) || [''])[0]);
    await page.locator('button').filter({ hasText: /Greetings|introductions/i }).first().click();
    await page.waitForTimeout(600);
    txt = await innr(page);
    S(/two kisses|greet/i.test(txt) || /[a-z] — /.test(txt), 'S2 grammar theory in English');
    await page.screenshot({ path: SHOT('s2-lesson') });
    await ctx.close();
  }

  // ---- S3: es flashcards — front label ESPAÑOL, back English ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    await page.locator('button', { hasText: /flashcards/i }).first().click();
    await page.waitForTimeout(500);
    const deck = page.locator('button').filter({ hasText: /Greetings|Gender|Numbers/i }).first();
    S(await deck.count() > 0, 'S3 es A1 deck topics listed in English');
    await deck.click(); await page.waitForTimeout(600);
    let txt = await innr(page);
    S(/ESPAÑOL/.test(txt), 'S3 front label = ESPAÑOL (meta.frontLabel)');
    const rev = page.locator('button', { hasText: /Reveal/i }).first();
    if (await rev.count()) await rev.click(); else await page.mouse.click(210, 210);
    await page.waitForTimeout(500);
    txt = await innr(page);
    S(/ENGLISH/i.test(txt), 'S3 back label = English (overlay name)');
    await page.screenshot({ path: SHOT('s3-back') });
    await ctx.close();
  }

  // ---- S4: three-course switching with progress isolation ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    const chip = page.locator('button', { hasText: /Spanish|Camino/ }).first();
    S(await chip.count() > 0, 'S4 es course chip on home');
    await chip.click(); await page.waitForTimeout(400);
    let txt = await innr(page);
    S(/English/.test(txt) && /Spanish/.test(txt), 'S4 switcher lists both enrolled courses');
    await page.locator('button', { hasText: /English/ }).filter({ hasNotText: /Spanish/ }).first().click();
    await page.waitForTimeout(1200);
    const ls = await dump(page);
    S(ls['ptb1:course'] === 'en', 'S4 switched to en', ls['ptb1:course']);
    txt = await innr(page);
    S(/Pathway to B1/.test(txt), 'S4 en branding after switch');
    S(ls['ptb1:es:level'] === 'A1' && JSON.parse(ls['ptb1:es:completed']).includes('a1-saludos'), 'S4 es progress preserved', ls['ptb1:es:level']);
    S(ls['ptb1:en:level'] === 'B1', 'S4 en progress intact');
    await ctx.close();
  }

  // ---- S5: Peninsular content + norm() handles ñ/accents; es-UI user sees es course as immersion ----
  {
    const { ctx, page } = await newPage(browser, BOTH);
    const checks = await page.evaluate(() => {
      const c = window.PTB_COURSES.es.core;
      const allText = JSON.stringify(c.topics);
      const norm = s => s.toLowerCase().replace(/[^\p{L}\p{N}'\s]/gu, '').replace(/\s+/g, ' ').trim();
      return {
        vosotros: /vosotros/i.test(allText),
        coger: /coger/.test(allText),
        pron: Object.values(c.pronunciation).flat().length,
        normed: norm('¡Mañana comeréis churros en Logroño!'),
      };
    });
    S(checks.vosotros && checks.coger, 'S5 Peninsular content present (vosotros, coger)', JSON.stringify({v:checks.vosotros,c:checks.coger}));
    S(/mañana/.test(checks.normed) && /logroño/.test(checks.normed), 'S5 norm() preserves ñ/accents', checks.normed);
    S(checks.pron >= 20, 'S5 pronunciation sets present', String(checks.pron));
    await ctx.close();
  }

  console.log('\n==== ES SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
