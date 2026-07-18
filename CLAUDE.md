# CLAUDE.md

## Project overview

"Pathway to B1" — a static, no-build English tutoring web app for Danish speakers learning English up to CEFR B1. Deployed to Netlify at https://sagamapu.netlify.app/.

**Stack:** React 18 + Babel Standalone from CDN. No bundler, no build step — JSX is compiled at runtime in the browser.

**Files:**
- `index.html` — the entire app: all React components, CSS, and hooks in one file.
- `courses/en.core.js` — course content in the **target language only** (English): 23 topics (A1 7, A2 8, B1 8) with stable item ids, plus the placement test and pronunciation sentences. Loaded via `<script src>` before the Babel block.
- `courses/en.support.es.js` — the **Spanish support overlay**: translations keyed by topic id + item id (never by array index). Loaded after `en.core.js`.
- `strings.js` — UI string table (`STRINGS`) + `t(uiLang,key)` helper (plus `tPlural`/`pluralDays` and the `UI_LANGS`/`uiLangName` registry derived from the `'lang.name'` entry), loaded via `<script src>` after the course files, before the Babel block.
- `version.js` — `window.PTB_VERSION = {version, changelog}` in the pure-JSON wrapper convention. Single source of truth for the app version; loaded via `<script src>` AND re-fetched fresh (`cache:'no-store'`) by `UpdateGate` in index.html, which JSON-parses the text between the first `{` and last `}` — keep it a pure JSON literal. **VERSIONING RULE: every user-facing change that goes to master MUST bump `version` (+1) and prepend one `{v, date, en, es}` changelog entry (one short line per language, newest first).** The update prompt shows entries `> ` the running version; Settings → About shows the full list. `netlify.toml` sets `Cache-Control: no-cache` on everything (no hashed filenames here — nothing may skip revalidation).
- `tools/validate.js` — course content validator; run `node tools/validate.js` after any content edit (manual gate, no CI). Checks schema shape, stable-id uniqueness, quiz/placement answer indices, and overlay coverage/id-alignment.
- `tests/e2e-da.js` — Playwright E2E for the Danish course (onboarding→placement, lessons/decks in es+immersion, en↔da course switching with per-course progress isolation, æøå through `norm()`). Manual gate; the file header documents the setup+run recipe (serves CDN libs from `node_modules`, stubs Supabase, asserts on `#root` innerText).
- `tests/e2e-ui-lang.js` — Playwright E2E for tutoring-language coherence (speak list = UI_LANGS only, incoherent-immersion courses hidden, lesson titles/grammar/settings in the UI language, deliberate immersion respected). Same setup recipe as `e2e-da.js`.
- `tests/e2e-one-language.js` — Playwright E2E for the single tutoring-language model (one "Your language" control drives chrome + content together; switching flips both; immersion toggle → target-only content, chrome unchanged). Same setup recipe.
- `tests/e2e-db-errors.js` — Playwright E2E for Supabase-suspended handling (hanging/erroring DB stubs → no loading-screen freeze, mounts on local data, friendly offline banner, friendly localized login error). Same setup recipe.
- `tests/e2e-es.js` — Playwright E2E for the Spanish course (en-speaker onboarding→placement, English-overlay lessons/decks, ESPAÑOL/English card labels, three-course switching with progress isolation, Peninsular content + ñ through `norm()`). Same setup recipe.
- `tests/e2e-update.js` — Playwright E2E for the update scheme (newer deployed version.js → localized prompt with per-change lines since the running version, Later/Update-now behavior, Settings About). Same setup recipe; update its version literals when `PTB_VERSION` moves on.
- `tools/split-curriculum.js` — the one-time Phase 3 transform that generated the course files from the pre-split monolithic curriculum data (deleted in Phase 3); kept as documentation of the transformation.

**Deployment:** GitHub Pages serves `master` branch root. Develop on a feature branch; push to `master` only when asked to "go live". Never create a PR unless explicitly requested.

**Persistence:** `localStorage` under the `ptb1:` namespace (Phase 4 namespaced schema — see the storage section below). Cloud copy: one Supabase `user_progress` row per user containing all `ptb1:*` keys.

---

## Non-obvious gotchas

### Babel Standalone = runtime compilation
There is no build step. Syntax errors in JSX only surface when the browser actually loads the page — you won't catch them from a linter or `node`. To verify JSX syntax before committing, run:
```
node -e "
const b=require('@babel/core');
const fs=require('fs');
const src=fs.readFileSync('index.html','utf8').match(/<script type=\"text\/babel\">([\s\S]*)<\/script>/)[1];
b.transformSync(src,{presets:['@babel/preset-react']});
console.log('JSX ok');
"
```
This requires `@babel/core` and `@babel/preset-react` installed globally or in a local `node_modules`.

### Course files and `strings.js` are plain JS, not JSX
They're loaded by regular `<script src>` tags before the Babel block, so they must be valid JavaScript only — no JSX syntax. Course files follow the **wrapper convention**: a one-line `window.PTB_COURSES...` assignment around a pure JSON literal (no functions, no expressions), e.g.:
```js
window.PTB_COURSES = window.PTB_COURSES || {};
window.PTB_COURSES.en = { "meta": {...}, "core": {...} };
```
Overlays assign `window.PTB_COURSES.en.support.es = {...}` and must load **after** the core. `tools/validate.js` vm-loads the files and validates the payload.

### The Course concept: ONE tutoring language (`uiLang`) drives everything
There is a single user-facing language setting — the tutoring language (`uiLang`). It drives BOTH the chrome (`t()`) AND the content overlay, so lesson titles / grammar / translations always match the interface; they can never diverge (an earlier build had a separate per-course "support language", which is gone — that split was the source of the "changed the language but not everywhere" bug).

- **`uiLang`** — GLOBAL: the tutoring language. Drives `t()` and is the content overlay id. Stored raw under `ptb1:uiLang`. Selectable values = `UI_LANGS` (keys of `STRINGS['lang.name']`).
- **`support`** (the resolver's parameter) is now **DERIVED**, not a stored language: `App` computes `support = immersion ? 'none' : (overlayOf(course,uiLang) ? uiLang : 'none')`. So content shows in the tutoring language when an overlay exists, else target-only.
- **Immersion** is a per-course opt-in toggle (Settings), stored as `ptb1:<course>:support === 'none'`; any other value (default `'auto'`) means "follow the tutoring language". `courseImmersion(cid)` reads it. The Settings immersion toggle only appears when an overlay exists in `uiLang` (`courseHasOverlayFor`) — otherwise content is already target-only and the toggle would be meaningless.

A **course** = a target-language core (`window.PTB_COURSES[cid]`) + N support overlays. Progress belongs to the target language (`ptb1:<cid>:*`); support is a presentation preference; **xp and streak are global**. The active course id lives under `ptb1:course`; `App` is remounted with `key={course}` on switch so all per-course state initializers re-run.

**UI strings** live in `strings.js`: a `STRINGS` table of dot-namespaced keys (`'nav.lessons'`, `'settings.signout'`, …) with `{en, es}` values, read via `t(uiLang, 'key')` (optional third argument interpolates `{placeholder}`s, e.g. `t(lang,'lessons.finishEarn',{xp:earned})`). Pluralization goes through `tPlural(lang, n, key)` (per-language rules; `pluralDays(lang,n)` is a convenience wrapper). The old inline `UI(lang,'…','…')` helper and the `cardBackLabel(lang)` shim are gone; don't reintroduce them — the flashcard back label is now the active overlay's own `name` field (`'Español'`) or `t(uiLang,'flashcards.back.definition')` in immersion (computed in `FlashcardDeck`).

**Curriculum content** is localized by the **content resolver** in `index.html`. The old per-field helpers (`topicTitle`, `theoryHeading`, …) are gone — don't reintroduce them.

- `resolveCourse(cid, supportId)` merges the course core with the overlay **by item id** (synchronously) into resolved topics keyed by topic id, with presentation fields chosen for `supportId` (an overlay id, or `'none'` = immersion). Fallback rules per field ("ov" = active overlay present):
  - `title`: ov → `overlay.title||title`; none → `title`
  - `theory[]` → `{heading, body}`: ov → overlay heading/body `||` core; none → core
  - `examples[]` → `{en, translation}`: `en` is the core `text`; `translation` is the overlay string `||''` with an overlay, `''` in immersion
  - `flashcards[]` → `{front, back}`: `back` is overlay`||def||''` with an overlay, `def||`first-overlay`||''` in immersion (the immersion overlay fallback mirrors the pre-split `enDef||es` path; `def` coverage is 100%, so it is a dead path)
  - `quiz[]`: `explain` is overlay`||explain` with an overlay, `explain` in immersion; `q`/`options`/`correct`/`id` pass through
  - everything else on the topic (`id`, `icon`, `level`, …) passes through unchanged
- Screens don't call `resolveCourse` directly; they use the `resolvedTopic(course, id, support)` accessor (memoized per support id in the course bundle). Raw core reads remain only in language-independent code (card counts, Leitner state, reset helpers).

**`courseBundle(cid)`** (cached) is the per-course derived data: `{meta, coreTopics, allTopicIds, levelTopics, totalCards, placement, pron, support, resolved}`. There are **no module-level content constants** anymore (`LEVEL_TOPICS`, `ALL_TOPIC_IDS`, `TOTAL_CARDS`, `PLACEMENT_QS`, `PRON_SENTENCES`, `LEVELS`, `COURSE_META`, `CORE_TOPICS` are gone) — everything reads through the bundle; never hardcode topic or level lists. The Web Speech API (`speak(cid,text)` and `useListen(cid,cb)`) uses `meta.speechLocale`.

**Branding comes from course meta**, not app strings: `meta.title` ("Pathway to B1"), `meta.tagline` (`{en,es}`, home subtitle), `meta.frontLabel` (flashcard front label "English"), `meta.icon` (course chip), `meta.nameByLang` (course display name via `courseName(cid,uiLang)`).

### Onboarding, course chip, switcher
- **First run** (no `ptb1:courses` key) → `Onboarding`: 1. "I speak…" (options = `speakOptions()` = **`UI_LANGS` only** — a tutoring language MUST have a UI string table, else the chrome silently falls back to English; step-1 heading is bilingual since it precedes the choice) → 2. "I want to learn…" (courses filtered by `courseCoherent(cid,speaks)` = has an overlay in your language **or** you speak the target; named via `meta.nameByLang[uiLang]`; a coherent no-overlay course = readable immersion) → that course's placement test (per-course `ptb1:<c>:placementDone`) → home. **Existing users never see onboarding** — `migrateStorage()` creates `ptb1:courses` first.
- **Tutoring-language coherence rule** (`courseCoherent(cid,lang)`): never offer a (tutoring-language, course) pair that would render lesson titles/grammar in a language the learner can't read. Applies to onboarding step 2 AND the add-course flow (`CoursePanel` `available`). Since content now always follows `uiLang` (see the Course concept above), silent immersion-in-the-wrong-language is structurally impossible, so the old one-time `ptb1:supportHealed` heal was removed. Immersion is a deliberate per-course opt-in in Settings.
- **Course chip** on the Home header (icon + name + level badge) and the "My courses" list in Settings both open/embed the switcher (`CoursesScreen`/`CoursePanel`): enrolled courses with progress summary + "+ Add a course" (mini-onboarding target pick; shows a disabled informational row when no unenrolled course exists). The switcher is reachable ONLY from Home and Settings — never mid-lesson/deck/quiz. Switching sets `ptb1:course` and remounts `App` — instant, no confirmation.

### Storage schema, migration, and the three reset tiers (Phase 4)

| Key | Scope | Format |
|---|---|---|
| `ptb1:uiLang` | global | raw `'en'`/`'es'` |
| `ptb1:course` | global | raw active target id |
| `ptb1:courses` | global | JSON `[{target, support}]` enrolled list |
| `ptb1:xp` | global | JSON number |
| `ptb1:streak` | global | JSON `{streak,best,last}` |
| `ptb1:<c>:support` | per-course | raw overlay id or `'none'` |
| `ptb1:<c>:level` | per-course | raw level |
| `ptb1:<c>:placementDone` | per-course | raw `'1'` |
| `ptb1:<c>:completed` | per-course | JSON topic-id array |
| `ptb1:<c>:wrongs` | per-course | JSON `[{topicId, qid, count, last}]` (**stable quiz item id**, not index) |
| `ptb1:<c>:fc:<topic>:<cardId>` | per-course | JSON `{box,next}` (**stable card id**, not index) |

`migrateStorage()` (in `index.html`, between `/*__MIGRATE_START__*/` sentinels for unit-test extraction) maps the legacy pre-Phase-4 keys (`ptb1:lang/level/placementDone/app/wrongs/fc:*`) to this schema. It is **idempotent, deletes legacy keys, never clobbers existing new-format values**, and runs on **every startup AFTER `restoreFromSupabase`** (inside `enterApp`, and in the `!sbClient` path) — a fresh device restores old-format keys from the cloud after a local-only migration would have no-oped. Never read or write the legacy key shapes outside `migrateStorage()`.

Reset tiers (all in Settings):
1. **Reset course progress** — `clearCourseStorage(cid)`: `ptb1:<cid>:*` only, except `ptb1:<cid>:support` (a preference, not progress). Per-level reset buttons (`clearLevelStorage(cid,lv)`) are scoped to the active course.
2. **Reset all progress** — `clearAllCoursesProgress()`: every course's keys **plus global xp and streak** (they are progress); preserves `uiLang`, `course`, `courses`, and each course's support preference.
3. **Start over as a new user** (danger zone) — heavy confirmation: summary of everything to be deleted, typed confirmation word (`t(uiLang,'startover.confirmWord')` — `DELETE`/`BORRAR`), destructive-red button. Sequence is load-bearing: cancel pending debounced sync → `await wipeSupabase()` (empty `{user_id, data:{}}` upsert) → `clearAllPtb1()` → route to onboarding. Works signed-out (cloud step skipped).

### Course data schema and the ID STABILITY RULE
`courses/en.core.js` (target language only) — each topic in `core.topics` has:
- `id`, `icon`, `level`, `title`
- `theory[]` — `{id: 't1'.., heading, body}`
- `examples[]` — `{id: 'e1'.., text}`
- `flashcards[]` — `{id: 'f1'.., front, def}` (`def` = target-language definition shown in immersion; there is no `back` field)
- `quiz[]` — `{id: 'q1'.., q, options, correct, explain}`

Course-level: `core.placement[]` (`{id: 'p1'.., q, opts, ans, level}`) and `core.pronunciation` (per-level string arrays). `meta`: `{id, name, nameByLang, levels, speechLocale}` plus the Phase 4 branding fields `icon`, `title`, `tagline` (`{en,es}`), `frontLabel`.

`courses/en.support.es.js` — `{name: 'Español', topics}` where each topic entry has `title` plus `theory`/`examples`/`flashcards`/`quiz` **objects keyed by item id** (`{t1: {heading, body}}`, `{e1: '...'}`, `{f1: '...'}`, `{q1: '...'}`).

**ID STABILITY RULE:** item ids are stable forever. When inserting or reordering content, mint a NEW id (`t4`, `e9`, `f11`, …) — **never renumber or reuse existing ids**, even mid-array. Overlays key by these ids; renumbering silently attaches translations to the wrong items.

**Progress keys are id-based since Phase 4** (`fcKey(cid,topic,cardId)`, wrongs `qid`), so reordering content arrays no longer corrupts progress — but the ID STABILITY RULE above still applies absolutely (ids are the progress keys now).

**Validate after any content edit:** `node tools/validate.js` (must exit 0 with no errors; missing translations surface as warnings).

### Writing large files (courses/en.core.js is ~4200 lines)
A single `Write` call for a very large file can silently fail. Course files are written per-topic chunks (each file is much smaller than the old monolithic curriculum data file, but the core is still large). Use a chunked sentinel pattern:

1. **`Write`** the first portion, ending with:
   ```
   //__APPEND_HERE__
   };
   ```
2. **`Edit`** to replace the sentinel block with the next chunk + same sentinel:
   ```
   old_string: "//__APPEND_HERE__\n};"
   new_string: "<next chunk>\n//__APPEND_HERE__\n};"
   ```
3. Repeat for each chunk (~3 topics per chunk works well). Final `Edit` drops the sentinel.

After a context compaction, `Write` may require a fresh `Read` first — read a few lines to satisfy the harness before writing.

### `uiLang`/`support`/`course` are passed as props, not a context
Every screen component receives `course`, `uiLang`, and (where it renders content) `support` as explicit props — but `support` is derived in `App` from `uiLang` + the per-course `immersion` state, not stored/threaded as an independent language. There is no React context. If you add a new screen, thread them through manually. `Root` owns `uiLang`/`course`/enrollment; `App` (remounted per course) owns `level`/`immersion`/`xp`/`completed`/screen state.

### Web Speech API
`SpeechRecognition` and `SpeechSynthesis` are browser-only APIs. The app gracefully hides pronunciation features when unavailable, but don't try to test or mock them in Node.
