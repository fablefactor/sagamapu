# Plan: Vite build migration (fix slow first load)

Status: PROPOSED. Goal: kill the ~2.4 MB Babel Standalone download and the
per-launch in-browser JSX compile of ~1,620 lines, bundle+minify the app,
lazy-load courses, and content-hash assets for immutable caching — the
industry-standard fix for the slow first load. Keep the app behaving
identically (all E2E suites green) and keep the update-prompt scheme working.

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

## Lazy course loading (the eager-load fix)

- Each course file becomes `export default { meta, core }` (core) /
  `export default { name, topics }` (overlay).
- A registry maps course id → `() => import('./courses/es.core.js')` and
  `support id → () => import('./courses/es.support.en.js')`. Vite
  code-splits each into its own hashed chunk.
- `courseBundle(cid)` / `resolveCourse` become **async**: the active course
  is awaited during the existing `AppShell` `'checking'` phase (which already
  gates mount on `getSession`+restore), so first paint needs only the active
  course. Switching to another course loads its chunk on demand (a brief
  spinner in the switcher).
- **This is the one place the app logic changes shape** (sync→async course
  access). Contained to the loader + `AppShell`/`Root` bootstrap; screens keep
  receiving already-resolved topics as today. Onboarding/add-course still see
  the full course *list* (ids + meta), which is tiny and stays eager (a small
  `courses/index.js` manifest of `{id, meta}` with no topic payload).

## Caching (Netlify) — matches the phone-update research

- Hashed assets (`/assets/*.js`, `*.css`): `Cache-Control: public,
  max-age=31536000, immutable` — safe because the filename changes when
  content changes.
- `index.html` and `/version.js`: `Cache-Control: no-cache` — always
  revalidated so a deploy is picked up. The update-prompt scheme is unchanged:
  the running `PTB_VERSION` (from the public script tag) vs the fresh
  `fetch('/version.js')`.
- `netlify.toml`: `command = "npm run build"`, `publish = "dist"`. Netlify
  installs deps and builds on push; deployment stays push-to-master for the user.

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

Develop entirely on the feature branch; **do not flip `netlify.toml` until the
very end**, so `index.html` on master keeps working throughout.

1. Add committed `package.json` + `vite.config.js`; move `strings.js` and the
   course files into `src/` as ES modules (`export default`); update
   `tools/validate.js` to import them. Validator green.
2. Extract the Babel block into `src/main.jsx` with the imports above; add the
   `__sbClientFactory` hook; slim `index.html` to the shell. `npm run build`
   succeeds; `vite preview` renders and a manual click-through works.
3. Convert course access to the async lazy loader + manifest; await the active
   course in `AppShell`. Rebuild; verify first paint loads only one course
   chunk (check the network panel / dist chunk list).
4. Rework the 6 E2E suites to build-then-serve-`dist` + the stub hook; get all
   green (plus the new es suite). Add the Vite build to CLAUDE.md's gate list.
5. Cache headers + `netlify.toml` build config. Final full verification, then
   the netlify flip is the last commit.
6. Bump `version.js` (+1) with a changelog line ("Faster startup"), per the
   versioning rule.

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
