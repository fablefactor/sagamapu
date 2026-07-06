# CLAUDE.md

## Project overview

"Pathway to B1" — a static, no-build English tutoring web app for Danish speakers learning English up to CEFR B1. Deployed to Netlify at https://sagamapu.netlify.app/.

**Stack:** React 18 + Babel Standalone from CDN. No bundler, no build step — JSX is compiled at runtime in the browser.

**Files:**
- `index.html` — the entire app: all React components, CSS, and hooks in one file.
- `courses/en.core.js` — course content in the **target language only** (English): 23 topics (A1 7, A2 8, B1 8) with stable item ids, plus the placement test and pronunciation sentences. Loaded via `<script src>` before the Babel block.
- `courses/en.support.es.js` — the **Spanish support overlay**: translations keyed by topic id + item id (never by array index). Loaded after `en.core.js`.
- `strings.js` — UI string table (`STRINGS`) + `t(lang,key)` helper (plus `tPlural`/`pluralDays`/`cardBackLabel`), loaded via `<script src>` after the course files, before the Babel block.
- `tools/validate.js` — course content validator; run `node tools/validate.js` after any content edit (manual gate, no CI). Checks schema shape, stable-id uniqueness, quiz/placement answer indices, and overlay coverage/id-alignment.
- `tools/split-curriculum.js` — the one-time Phase 3 transform that generated the course files from the pre-split monolithic curriculum data (deleted in Phase 3); kept as documentation of the transformation.

**Deployment:** GitHub Pages serves `master` branch root. Develop on a feature branch; push to `master` only when asked to "go live". Never create a PR unless explicitly requested.

**Persistence:** `localStorage` under the `ptb1:` namespace. Resetting progress clears all keys *except* `ptb1:lang`.

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

### Two-language mode (not three)
`lang` is either `'en'` (English immersion) or `'es'` (Spanish). In English immersion mode, translations are hidden; flashcard backs show a plain-English definition (`enDef`). In Spanish mode, all UI labels, theory text, example translations, and quiz explanations are in Spanish.

**UI strings** live in `strings.js`: a `STRINGS` table of dot-namespaced keys (`'nav.lessons'`, `'settings.signout'`, …) with `{en, es}` values, read via `t(lang, 'key')` (optional third argument interpolates `{placeholder}`s, e.g. `t(lang,'lessons.finishEarn',{xp:earned})`). Pluralization goes through `tPlural(lang, n, key)` (per-language rules; `pluralDays(lang,n)` is a convenience wrapper) and the flashcard back label through the `cardBackLabel(lang)` shim — all defined in `strings.js`. The old inline `UI(lang,'…','…')` helper is gone; don't reintroduce it.

**Curriculum content** is localized by the **content resolver** in `index.html` (defined just after `COURSE_META`; Phase 2 of `docs/i18n-plan.md`). The old per-field helpers (`topicTitle`, `theoryHeading`, `theoryBody`, `exTranslation`, `cardBack`, `quizExplain`) are gone — don't reintroduce them.

- `resolveCourse(supportLang)` merges the course core (`CORE_TOPICS`, from `courses/en.core.js`) with the support-language overlay **by item id** (synchronously) into an object of resolved topics keyed by topic id, with presentation fields already chosen for `supportLang` (`'es'` = Spanish, anything else = immersion). Fallback rules per field:
  - `title`: es → `overlay.title||title`; en → `title`
  - `theory[]` → `{heading, body}`: es → overlay heading/body `||` core; en → core
  - `examples[]` → `{en, translation}`: `en` is the core `text`; `translation` is the overlay string `||''` in Spanish mode, `''` in immersion
  - `flashcards[]` → `{front, back}`: `back` is overlay`||def||''` in Spanish mode, `def||`es-overlay`||''` in immersion (the immersion overlay fallback mirrors the pre-split `enDef||es` path; `def` coverage is 100%, so it is a dead path)
  - `quiz[]`: `explain` is overlay`||explain` in Spanish mode, `explain` in immersion; `q`/`options`/`correct` pass through
  - everything else on the topic (`id`, `icon`, `level`, …) passes through unchanged
- Screens don't call `resolveCourse` directly; they use the `resolvedTopic(id, lang)` accessor (memoized per lang in `RESOLVED_COURSES`) instead of reading course data. Raw `CORE_TOPICS` reads remain only in language-independent code (card counts, Leitner state, reset helpers).

`COURSE_META` is `window.PTB_COURSES.en.meta` (from `courses/en.core.js`): `{id, name, nameByLang, levels, speechLocale}`. The Web Speech API (`speak()` and `SpeechRecognition`) uses `COURSE_META.speechLocale` — no hardcoded `'en-GB'`. `LEVEL_TOPICS`, `ALL_TOPIC_IDS`, `TOTAL_CARDS`, `PLACEMENT_QS`, and `PRON_SENTENCES` are all derived from the core at module level — never hardcode topic lists.

### Course data schema and the ID STABILITY RULE
`courses/en.core.js` (target language only) — each topic in `core.topics` has:
- `id`, `icon`, `level`, `title`
- `theory[]` — `{id: 't1'.., heading, body}`
- `examples[]` — `{id: 'e1'.., text}`
- `flashcards[]` — `{id: 'f1'.., front, def}` (`def` = target-language definition shown in immersion; there is no `back` field)
- `quiz[]` — `{id: 'q1'.., q, options, correct, explain}`

Course-level: `core.placement[]` (`{id: 'p1'.., q, opts, ans, level}`) and `core.pronunciation` (per-level string arrays).

`courses/en.support.es.js` — `{name: 'Español', topics}` where each topic entry has `title` plus `theory`/`examples`/`flashcards`/`quiz` **objects keyed by item id** (`{t1: {heading, body}}`, `{e1: '...'}`, `{f1: '...'}`, `{q1: '...'}`).

**ID STABILITY RULE:** item ids are stable forever. When inserting or reordering content, mint a NEW id (`t4`, `e9`, `f11`, …) — **never renumber or reuse existing ids**, even mid-array. Overlays key by these ids; renumbering silently attaches translations to the wrong items.

**Phase 3 invariant:** localStorage progress keys (`fcKey(id,i)`, `wrongs` `qi`) are still **index-based** — flashcard/quiz arrays keep their pre-split order, so the keys still match. The stable ids are dormant until the Phase 4 storage migration rekeys progress by item id. Do not reorder those arrays before Phase 4.

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

### `lang` is passed as a prop, not a context
Every screen component receives `lang` (and `setLang` where needed) as an explicit prop. There is no React context. If you add a new screen, thread `lang` through manually.

### Web Speech API
`SpeechRecognition` and `SpeechSynthesis` are browser-only APIs. The app gracefully hides pronunciation features when unavailable, but don't try to test or mock them in Node.
