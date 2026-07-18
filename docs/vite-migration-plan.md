# Plan: Vite build migration (fix slow first load)

Status: REVISED after adversarial review. Goal: kill the ~2.4 MB Babel
Standalone download and the per-launch in-browser JSX compile of ~1,620
lines, bundle+minify the app, lazy-load non-enrolled courses, and
content-hash assets for immutable caching — the industry-standard fix for
the slow first load. Keep the app behaving identically (all E2E suites
green) and keep the update-prompt scheme working.

## Two phases (isolate the risky change)

Per review: the dominant win (drop Babel + bundle/minify/hash) is nearly
behavior-free; the lazy-loading of courses is the one genuinely risky
change (sync→async content access). Split them:

- **Phase A** — Vite build; course files become ES modules **imported
  eagerly** (static imports, same load behavior as today). This removes
  Babel + the runtime compile (the ~90% win), bundles, minifies, hashes,
  and fixes caching. Course accessors stay 100% synchronous — no app-logic
  change. All 6 E2E suites reworked and green, then merged. This is the
  checkpoint.
- **Phase B** — after Phase A is proven live: convert enrolled-course cores
  (+their overlays) to load via an async `ensureCourseLoaded(cid)`
  awaited in `AppShell` 'checking' before `migrateStorage()` and mount;
  non-enrolled courses load on demand only in the add-course flow. Only
  the loader + bootstrap change; accessors stay synchronous (they read a
  registry the loader populates).

The sections below describe the end state; the "Migration order" section
maps each item to Phase A or B.

## Why (measured baseline)

Every launch today is render-blocking on:
- **Babel Standalone ~2.4 MB** from CDN, then it **compiles ~1,620 lines of
  JSX on the device CPU every single launch** — the real slowness.
- **~660 KB of course files** — all six loaded eagerly regardless of the
  active course (grows per course).
- react+react-dom ~139 KB, Supabase SDK ~120 KB, index.html+strings+version
  ~112 KB.

Repeat visits also revalidate ~12 no-cache files (cheap 304s, but round-trips).

Target: first visit ~200–300 KB of hashed, minified JS; **no Babel, no
runtime compile**; only the active course's data loaded at start; repeat
launches served from immutable cache with just index.html + version.js
revalidating.

## What Vite changes vs. the current globals (exact)

The whole app is one `<script type="text/babel">` block in `index.html`
(~1,620 lines) whose code lives in module scope with no imports/exports.
It relies on these globals, each of which maps to a bundler import:

| Current global | Source today | After |
|---|---|---|
| `React`, `{useState,useEffect,useRef,useCallback}` (line 70), `React.Fragment` | CDN UMD | `import React, {useState,useEffect,useRef,useCallback} from 'react'` |
| `ReactDOM.createRoot` (line 1691) | CDN UMD | `import { createRoot } from 'react-dom/client'` |
| `supabase.createClient` (line 65) | CDN UMD | `import { createClient } from '@supabase/supabase-js'` |
| `window.PTB_COURSES` / `COURSES` | `courses/*.js` script tags | ES-module course files, **lazy-loaded** (see below) |
| `STRINGS`, `UI_LANGS`, `uiLangName`, `t`, `tPlural`, `pluralDays` | `strings.js` script tag | `import … from './strings.js'` (bundled) |
| `window.PTB_VERSION` | `version.js` script tag | stays a **public** script-tag file (running version) AND fetched fresh for the update check — unchanged |

The internal structure of the JSX block is preserved verbatim (all top-level
functions stay top-level in one module) — esbuild bundles a single large
module fine. This keeps the behavioral diff tiny; the risk is in the wiring,
not the app logic.

## Project structure after

```
package.json            committed (NOT gitignored anymore); vite + deps + scripts
vite.config.js          @vitejs/plugin-react; base:'./'; manualChunks off (auto-split)
index.html              tiny shell: <div id=root>, <script src=/version.js>,
                        <script type=module src=/src/main.jsx>
src/main.jsx            the app (today's Babel block, with imports at top)
src/strings.js          today's strings.js as an ES module (export STRINGS, t, …)
src/courses/            en.core.js, en.support.es.js, da.*, es.* as ES modules
                        (export default {...}); the window.PTB_COURSES wrapper
                        replaced by `export default`
public/version.js       today's version.js verbatim (window.PTB_VERSION wrapper);
                        served un-hashed, no-cache, for the running version +
                        the fresh update-check fetch
public/netlify /_headers or netlify.toml  cache headers (below)
tools/validate.js       updated to load ES-module course files (export default)
dist/                   build output (gitignored); Netlify publishes this
```

## Lazy course loading (Phase B — the eager-load fix)

Corrected per review (the original "make accessors async" was wrong — it
would break ~12 render-time call sites: `App` at index.html:1436,
`PlacementTest`, `LevelPath`, `HomeScreen`, `LessonsScreen`,
`FlashcardsScreen`, `FlashcardDeck`, `PronScreen`, `ProgressScreen`,
`CoursePanel`, and every `resolvedTopic(...)` in render).

- Each course file becomes `export default { meta, core }` (core) /
  `export default { name, topics }` (overlay).
- **Accessors stay SYNCHRONOUS.** `courseBundle`/`resolveCourse`/
  `resolvedTopic` are unchanged. Only a new **async `ensureCourseLoaded(cid)`**
  exists: it dynamic-imports the course core **and all its overlays together
  (one chunk)** and attaches `{meta, core, support}` into the still-live
  `window.PTB_COURSES` registry — so `courseBundle().support` is populated
  exactly as today and runtime uiLang switches never hit an unloaded overlay.
- **Preload all ENROLLED cores (+overlays) during `AppShell` 'checking'**,
  before `migrateStorage()` and before `setPhase('app')`. For a 1–3 course
  user this removes the switch / onboarding / language-change async seams
  entirely; only the *add-course* flow needs an on-demand `await`.
- `migrateStorage()` reads `window.PTB_COURSES.en.core.topics`
  (index.html:327) to remap legacy keys — so `en` must be loaded before it
  runs, and `window.PTB_COURSES` must stay the runtime registry (also keeps
  the two tests that read it directly working). Await `ensureCourseLoaded`
  for enrolled courses (always incl. any legacy default) before
  `migrateStorage()`.
- **Manifest** (`src/courses/index.js`, eager, tiny): `{id, meta,
  supportLangs:{<lang>:{name}}}` per course — carries overlay availability +
  names, because `overlayOf`/`courseName`/`courseCoherent` need them
  synchronously for courses that aren't loaded (Onboarding step 2,
  `CoursePanel` add-flow). `COURSE_IDS` derives from the manifest, not from
  loaded cores.

## Caching (Netlify) — matches the phone-update research

- Hashed assets (`/assets/*`): `Cache-Control: public, max-age=31536000,
  immutable` — safe because the filename changes when content changes.
- `/index.html` and `/version.js`: `Cache-Control: no-cache` — always
  revalidated so a deploy is picked up. Update scheme unchanged: running
  `window.PTB_VERSION` (public script tag) vs fresh `fetch('version.js?ts=')`.
- **Scope headers precisely — no blanket `/*` no-cache** (it would collide
  with `/assets/*` immutable and, order-dependent, either lose the perf win
  or break updates). Only `/assets/*` immutable; only `/index.html` +
  `/version.js` no-cache.
- `netlify.toml`: **keep the existing `[functions]` block** (the keepalive
  scheduled function) and add `command = "npm run build"`, `publish =
  "dist"`. `public/version.js` is served un-hashed (Vite copies /public
  verbatim). Deployment stays push-to-master.
- **Reference `window.PTB_VERSION` explicitly** in the bundled module (not a
  bare `PTB_VERSION` global — works via script order, but fragile).
- **Commit `package.json` AND `package-lock.json`** (un-ignore both) for a
  reproducible Netlify build; keep `node_modules/` and `dist/` ignored.

## E2E test rework (the laborious part)

The 6 suites currently: serve raw repo files, **route-intercept the CDN URLs**
(react/react-dom/babel/supabase) to serve from `node_modules`, stub Supabase
by replacing `window.supabase`, and assert on `#root` innerText. After
bundling, react/supabase are no longer separate URLs. New approach:

1. Build once (`npm run build`), then serve `dist/` (a static server, same as
   now but pointing at `dist`). No more react/babel URL interception needed.
2. **Supabase stub**: the app reads an optional `window.__sbClientFactory`
   before falling back to the real `createClient`. Tests set it via
   `addInitScript` (same seeding hook they already use). One tiny, clearly
   commented hook in `main.jsx` — the only test-only affordance.
3. Course data: tests that read `window.PTB_COURSES` directly (a few
   assertions) switch to reading the built globals the app still exposes for
   debugging, OR are rewritten to assert via the DOM. Prefer DOM assertions.
4. Everything else (seeding localStorage, `#root` innerText, screenshots)
   is unchanged. Each suite's header setup recipe gets a one-line update
   ("build first, serve dist").

## Migration order (each step verifiable; master stays working until the last)

Develop entirely on the feature branch; **do not flip `netlify.toml` to
`publish=dist` until the very end**, so master's `index.html` keeps working
throughout.

**Phase A (drop Babel; courses eager, accessors synchronous):**
1. Un-ignore + commit `package.json` + `package-lock.json`; add
   `vite.config.js`. Move `strings.js` and the course files into `src/` as
   ES modules; course files become `export default {...}` and are
   **statically imported** into `main.jsx`, which reassembles the
   `window.PTB_COURSES` registry exactly as the script tags did (so
   `migrateStorage`/tests are unaffected). Update `tools/validate.js` to
   load the ESM course files. Validator green.
2. Extract the Babel block into `src/main.jsx`: add `import React,
   {useState,useEffect,useRef,useCallback} from 'react'`, `import {createRoot}
   from 'react-dom/client'`, `import {createClient} from
   '@supabase/supabase-js'`; move the `SUPABASE_URL/ANON_KEY/sbClient` consts
   in, behind `const mk = window.__sbClientFactory ?? createClient`; use
   `window.PTB_VERSION` explicitly. Slim `index.html` to `<div id=root>` +
   `<script src=/version.js>` + `<script type=module src=/src/main.jsx>`.
   `npm run build` succeeds; `vite preview` renders; manual click-through works.
3. Rework the 6 E2E suites: build once, serve `dist/`; drop the
   react/react-dom/babel/supabase route interceptions; rewrite each `STUB*`
   from `window.supabase={createClient:…}` to `window.__sbClientFactory=…`
   via `addInitScript`; keep the `session:null` substitution and `#root`
   assertions. All suites + the es suite green.
4. Cache headers + `netlify.toml` (keep `[functions]`; add build/publish;
   scoped headers). Update CLAUDE.md (build gate replaces the Babel
   JSX-check gotcha; "no build step" founding line updated). Bump
   `version.js` (+1, "Faster startup"). Final full verification. The
   netlify `publish=dist` flip is the last commit. **Merge → checkpoint.**

**Phase B (lazy non-enrolled courses) — separate, after Phase A is live:**
5. Introduce the `src/courses/index.js` manifest (`{id, meta, supportLangs}`)
   and `ensureCourseLoaded(cid)` (dynamic import of core+overlays →
   `window.PTB_COURSES`). Replace the static course imports; preload enrolled
   cores in `AppShell` 'checking' before `migrateStorage()`; `await` in the
   add-course flow. Accessors stay synchronous. Rebuild; confirm a user
   enrolled in one course loads only that course's chunk. Re-run all suites.
   Bump version. Merge.

## Risks & mitigations

- **All-or-nothing**: the app is broken mid-migration. Mitigation: master's
  `index.html` is untouched until step 5; all work is on the branch and
  verified via `vite build`+`preview` before the netlify flip.
- **Sync→async course access** is the only real logic change; contained to the
  loader + bootstrap, covered by the switching/isolation E2E assertions.
- **Test harness churn** is the biggest labor; step 4 is isolated and the app
  is already fully built by then, so tests are validated against the real
  artifact.
- **Supabase-in-bundle** could change the SDK's runtime behavior vs the UMD
  build; the db-errors suite (timeouts, suspended DB) re-verifies this.
- **CLAUDE.md**: the "no build step" founding constraint and the Babel JSX-check
  gotcha are replaced by "run `npm run build`"; every affected section updated.

## Non-goals (deliberately out)

- No full decomposition of `main.jsx` into many small modules — one module is
  fine and keeps the diff safe; splitting can come later.
- No TypeScript, no CSS framework, no router — the app is one screen tree.
- No service worker / PWA offline caching — the app already works offline via
  localStorage; a service worker is a separate, larger decision.
