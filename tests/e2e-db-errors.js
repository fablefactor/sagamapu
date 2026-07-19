/* E2E: Supabase error handling when the project is SUSPENDED/unreachable.
 * Stubs a hanging DB and an erroring DB; asserts the app never freezes on
 * the loading screen, mounts on local data, shows a friendly offline banner,
 * and surfaces a friendly (localized) login error instead of a raw SDK string.
 * Manual gate; same setup recipe as tests/e2e-da.js.
 */
const { chromium } = require('playwright-core');
const fs = require('fs');
const REPO = process.env.REPO || process.cwd();
const NM = REPO + '/node_modules';
const BASE = process.env.BASE_URL || 'http://127.0.0.1:8877/index.html';
const os = require('os'); const SD = (process.env.SHOT_DIR||os.tmpdir()).replace(/\/$/,''); const SHOT = p => SD + '/dberr-' + p + '.png';

// A "suspended DB" Supabase stub: getSession resolves from cache (as the real
// SDK does), but every .from() query HANGS forever (never resolves) — the
// worst case for the old code. signInWithOtp also hangs.
const STUB_HANG = `window.__sbClientFactory=()=>({
  auth:{
    getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),
    onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),
    signOut:async()=>({}),
    signInWithOtp:()=>new Promise(()=>{}),           // never resolves
  },
  from:()=>({
    select:()=>({eq:()=>({maybeSingle:()=>new Promise(()=>{})})}),  // hangs
    upsert:()=>new Promise(()=>{}),                                  // hangs
  }),
});`;

// A "suspended DB" stub that ERRORS fast (503-style) instead of hanging.
const STUB_ERR = `window.__sbClientFactory=()=>({
  auth:{
    getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),
    onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),
    signOut:async()=>({}),
    signInWithOtp:async()=>({error:{message:'Failed to fetch'}}),
  },
  from:()=>({
    select:()=>({eq:()=>({maybeSingle:async()=>{throw new Error('Failed to fetch');}})}),
    upsert:async()=>({error:{message:'Failed to fetch'}}),
  }),
});`;

let failures = 0, steps = [], pageErrors = [];
const S = (ok, n, d) => { steps.push(`${ok ? 'PASS' : 'FAIL'} | ${n}${d ? ' | ' + d : ''}`); if (!ok) failures++; console.log(steps[steps.length - 1]); };
const innr = p => p.evaluate(() => document.getElementById('root').innerText);

async function open(browser, stub, seed = {}) {
  const ctx = await browser.newContext({ viewport: { width: 420, height: 900 } });
  const page = await ctx.newPage();
  await page.addInitScript({ content: stub });
  await page.addInitScript(s => { for (const [k, v] of Object.entries(s)) localStorage.setItem(k, v); }, seed);
  page.on('pageerror', e => { console.log('PAGEERROR:', String(e).slice(0, 200)); pageErrors.push(String(e)); });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  return { ctx, page };
}
const ENROLLED = {
  'ptb1:uiLang': 'es', 'ptb1:course': 'en',
  'ptb1:courses': JSON.stringify([{ target: 'en', support: 'es' }]),
  'ptb1:en:support': 'es', 'ptb1:en:level': 'A2', 'ptb1:en:placementDone': '1',
  'ptb1:en:completed': JSON.stringify(['a1-greet']), 'ptb1:xp': '50',
  'ptb1:streak': JSON.stringify({ streak: 2, best: 4, last: new Date().toDateString() }),
  'ptb1:supportHealed': '1',
};

(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });

  // ---- 1: HANGING DB — app must NOT get stuck on "Cargando…"; mounts within timeout ----
  {
    const t0 = Date.now();
    const { ctx, page } = await open(browser, STUB_HANG, ENROLLED);
    // wait up to 12s for the home to appear (restore timeout is 8s)
    let mounted = false;
    for (let i = 0; i < 24; i++) {
      const txt = await innr(page);
      if (/Pathway to B1/.test(txt)) { mounted = true; break; }
      await page.waitForTimeout(500);
    }
    const secs = Math.round((Date.now() - t0) / 1000);
    S(mounted, `1 hanging DB: app mounts on local data (not stuck on Loading), ~${secs}s`);
    const txt = await innr(page);
    S(/A2/.test(txt), '1 local progress visible (level A2)');
    await page.screenshot({ path: SHOT('1-hang-home') });
    await ctx.close();
  }

  // ---- 2: ERRORING DB — offline banner appears after a sync attempt ----
  {
    const { ctx, page } = await open(browser, STUB_ERR, ENROLLED);
    await page.waitForTimeout(2800); // mount + first sync (fires on screen effect)
    // navigate to force a sync, then back
    let txt = await innr(page);
    const bannerSoon = /nube no está disponible|Cloud sync is unavailable/i;
    // trigger a state change that schedules a sync
    const settings = await page.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>x.getAttribute('aria-label')==='Settings'); if(b){b.click();return true;} return false; });
    await page.waitForTimeout(2500);
    txt = await innr(page);
    S(bannerSoon.test(txt), '2 erroring DB: friendly offline banner shown', (txt.match(bannerSoon)||['(absent)'])[0]);
    await page.screenshot({ path: SHOT('2-err-banner') });
    S(!/Failed to fetch|undefined|\[object/.test(txt), '2 no raw SDK error leaked to UI');
    await ctx.close();
  }

  // ---- 3: signed-out + suspended DB — login shows friendly error, no hang ----
  {
    const { ctx, page } = await open(browser, STUB_ERR, { 'ptb1:uiLang': 'es' });
    // no session? STUB returns a session, so force login by clearing it:
    // easier: use a stub with no session
    await ctx.close();
    const noSession = STUB_ERR.replace('session:{user:{id:\'u\',email:\'e@x.com\'}}', 'session:null');
    const { ctx: c2, page: p2 } = await open(browser, noSession, { 'ptb1:uiLang': 'es' });
    await p2.waitForTimeout(2500);
    let txt = await innr(p2);
    S(/Pathway to B1/.test(txt) && /Inicia sesión/.test(txt), '3 login screen shown (Spanish)');
    // type an email and submit
    await p2.fill('input[type="email"]', 'tester@example.com');
    await p2.evaluate(() => { const b=[...document.querySelectorAll('button')].find(x=>/enlace|magic|Enviar/i.test(x.textContent)); if(b) b.click(); });
    await p2.waitForTimeout(2000);
    txt = await innr(p2);
    S(/No pudimos conectar|reactiv|Inténtalo de nuevo/i.test(txt), '3 friendly login error (not raw "Failed to fetch")', (txt.match(/No pudimos[^.]*/)||['(absent)'])[0]);
    S(!/Failed to fetch/.test(txt), '3 raw SDK error not shown');
    await p2.screenshot({ path: SHOT('3-login-err') });
    await c2.close();
  }

  // ---- 4: healthy DB (control) — no banner, normal mount ----
  {
    const OK = `window.__sbClientFactory=()=>({auth:{getSession:async()=>({data:{session:{user:{id:'u',email:'e@x.com'}}}}),onAuthStateChange:()=>({data:{subscription:{unsubscribe(){}}}}),signOut:async()=>({}),signInWithOtp:async()=>({error:null})},from:()=>({select:()=>({eq:()=>({maybeSingle:async()=>({data:null})})}),upsert:async()=>({error:null})})});`;
    const { ctx, page } = await open(browser, OK, ENROLLED);
    await page.waitForTimeout(2800);
    const txt = await innr(page);
    S(/Pathway to B1/.test(txt), '4 healthy DB: app mounts');
    S(!/nube no está disponible|Cloud sync is unavailable/i.test(txt), '4 healthy DB: NO offline banner');
    await ctx.close();
  }

  console.log('\n==== DB-ERROR SUMMARY ====\n' + steps.join('\n'));
  console.log(`\nFAILURES: ${failures}, PAGE ERRORS: ${pageErrors.length}`);
  await browser.close();
  process.exit(failures || pageErrors.length ? 1 : 0);
})().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
