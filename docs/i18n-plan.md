# Plan: Generalizing the tutor to more languages

Status: PROPOSED — architecture-reviewed 2026-06-14; all review amendments applied.

## Goal

Support multiple **target languages** (the language being taught, currently
English) and multiple **support languages** (the language that explains the
material, currently Spanish), without giving up the no-build static-app
architecture.

## The core problem

Three different roles are entangled in one schema today:

- **Target language** — flashcard fronts, examples, quiz questions (English)
- **Support language** — translations and explanations (the `*Es` fields, Spanish)
- **Immersion fallback** — `enDef`, English-only definitions

The UI layer has the same entanglement: every label is an inline
`UI(lang, 'English', 'Español')` pair. Adding Danish support or
French-as-target today means touching every string in both files.

## The model

Make the three roles explicit and independent:

```
UI language      — what the chrome speaks        (any language)
Support language — what explains the material     (per learner)
Target language  — what is being taught           (defines a course)
```

A **course** = one target-language core + N support-language overlays.
Immersion mode = core with no overlay — this generalizes the current
English-immersion feature for free.

## Proposed structure

```
index.html                     app shell (unchanged stack: React + Babel, no build)
strings.js                     UI string table: STRINGS['nav.home'] = {en, es, da, ...}
courses/
  en.meta.js                   window.PTB_COURSES.en = {id:'en', nameByLang:{...},
                               levels:['A1','A2','B1'], speechLocale:'en-GB'}
  en.core.js                   window.PTB_COURSES.en.core = { ...pure JSON literal... }
                               topics in TARGET language only:
                               {id, level, icon, title, theory[{id,heading,body}],
                                examples[{id,text}], flashcards[{id,front,def}],
                                quiz[{id,q,options,correct,explain}],
                                placement[], pronunciation[]}
  en.support.es.js             window.PTB_COURSES.en.support.es = { name:'Español',
                               ...overlay keyed by topic id + ITEM id... }
  en.support.da.js             <- adding Danish support = one new file, core untouched
  es.core.js                   <- Spanish-as-target = new core, reuses the whole engine
  es.support.en.js
```

## Key decisions

1. **Course files stay `<script src>` tags, NOT runtime fetch.** Each file is
   a one-line `window.PTB_COURSES[...] = {...}` wrapper around a pure JSON
   literal. Rationale (from review): the app reads the content global
   synchronously everywhere — module-scope constants (`ALL_TOPIC_IDS`,
   `TOTAL_CARDS`, index.html:94–95), `useState` initializers
   (`allDue()` at index.html:987), and nine direct `CURRICULUM[...]` call
   sites. Runtime fetch would force an async restructure of all of it, plus
   loading states and a `file://` breakage, to save nothing perceptible at
   2 cores × 3 overlays (the app already ships ~700 KB of CDN scripts).
   Load-on-demand via dynamic script injection remains a 5-line upgrade if
   course #5 ever exists. The validator strips the one-line wrapper and
   validates the payload as pure JSON.

2. **Every content item gets a short stable `id`** (theory sections,
   examples, flashcards, quiz items). Overlays key translations by
   topic id + item id — never by array index. Rationale (from review):
   index-based alignment fails silently (insert one example mid-array and
   every later translation attaches to the wrong sentence — counts still
   match, so a coverage validator cannot see it), and this repo's history
   proves content gets inserted and edited in place. Bonus: progress keys
   (`fcKey`, `wrongs`) are index-based today and already corrupt Leitner
   boxes when content is reordered — migrating them to item ids in Phase 3
   fixes a live bug for free.

3. **`enDef` generalizes to `def`** — a monolingual definition in the target
   language, required in every core. That is what makes immersion mode a
   property of the architecture rather than a special case of English.
   Note: current `cardBack` has bidirectional fallbacks (`es||enDef`,
   `enDef||es`); coverage is verified 100% on both sides, so the fallbacks
   are dead paths and are intentionally dropped.

4. **One content resolver replaces the six content helpers**
   (`topicTitle`, `theoryHeading`, `theoryBody`, `exTranslation`,
   `cardBack`, `quizExplain`). `resolveCourse(targetId, supportId)` merges
   core + overlay into resolved topics; the helpers become plain property
   reads. The three UI-string helpers (`UI`, `cardBackLabel`, `pluralDays`)
   are absorbed by `t()` instead: card-back label comes from the active
   overlay's own `name` ("Español") or the target's word for "Definition";
   pluralization becomes a tiny per-language rule in `strings.js`.

5. **UI strings move to `strings.js` with a `t('key')` helper**, and UI
   language becomes a setting independent of the course (a Dane learning
   Spanish with English UI is a valid combination).

6. **Placement test and pronunciation sentences move into the core** —
   they are target-language content currently hardcoded in index.html.
   `speechLocale` in meta drives the Web Speech API instead of hardcoded
   `en-GB`.

7. **A validator script (`validate.js`, node, run as an npm script
   documented in CLAUDE.md — there is no CI, so it is a manual gate like
   the existing JSX check).** It checks: schema shape, stable-id
   uniqueness, overlay coverage AND id-alignment (every overlay entry maps
   to an existing core item), `correct` indices in range. Honest scope
   note (from review): this catches *structural drift*, which is exactly
   the failure mode the core/overlay split introduces. It does NOT catch
   semantic content bugs (wrong answers, ambiguous cards, dialect issues)
   — those still need content review.

## The Course concept (product level)

Architecturally a course is a target-language core; at the product level a
**course is what the learner enrolls in**: a pairing of target language +
support language, e.g. "English, explained in Spanish", "English
(immersion)", "Spanish, explained in English".

The single most important product decision:

> **Progress belongs to the target language, not to the pairing.**

Leitner boxes, completed topics, placement result, weak points, and level
all live under the target-language namespace (`ptb1:en:*`). The support
language is a per-course *presentation preference*. Consequences:

- Switching support language (Spanish → Danish → immersion) never touches
  progress. Immersion stops being a mode and becomes "support = none".
- Switching target language switches to a separate progress space; coming
  back restores exactly where you left off.
- The **streak and XP stay global**: a day you studied *any* course counts,
  and XP measures the learner, not the course.

## UX: selecting, switching, and managing courses

**First run (no enrolled courses)** — onboarding before anything else:

1. "I speak…" → sets support language AND defaults `uiLang` to it.
2. "I want to learn…" → target languages that have a core, with a badge
   when full support in the chosen language exists. Pairs without an
   overlay are offered as "(immersion — explanations in <target language>)".
3. Placement test for that course → home. (Placement is course content,
   so each course brings its own.)

**Existing users**: the storage migration silently enrolls them in
English/Spanish and skips onboarding entirely. The 1–3 real users never
see a breaking change.

**Switching courses** — two entry points, one rule:

- A compact course chip on the Home header (icon + "English · B1") opens
  the switcher: enrolled courses with per-course progress summary, plus
  "+ Add a course".
- The same list lives in Settings under "My courses".
- The rule: the switcher is reachable only from Home and Settings — never
  mid-lesson, mid-deck, or mid-quiz — so there is no partial-activity state
  to reconcile. Switching is instant and needs no confirmation, because
  nothing is ever lost.

**Adding a course**: "+ Add a course" runs a mini-onboarding (pick target,
optionally adjust support, take that course's placement test) and appends
to the enrolled list.

**Per-course settings** (in Settings, scoped to the active course):

- Support language — dropdown of available overlays + "None (immersion)".
  Replaces today's global two-way language toggle.
- Reset course progress — clears `ptb1:<target>:*` only; never other
  courses, never the global keys.
- Removing a course from the enrolled list keeps its `ptb1:<target>:*`
  data (re-adding restores everything); actual deletion only via explicit
  reset.

**Global settings**: UI language (independent of any course), account/sync.

**Screens whose scope changes**: Home, Flashcards, Progress, Weak Points
all become views over the *active course* (weak points' stored ids are
course-scoped once namespaced). The Progress screen header names the
course. Branding must come from course meta — "Pathway to B1" and
hardcoded labels like the flashcard "English" front-label (index.html:723)
are per-course strings, not app strings.

## Storage: key-by-key migration table

| Old key | New key | Scope | Notes |
|---|---|---|---|
| `ptb1:lang` | `ptb1:uiLang` + `ptb1:en:support` | global + per-course | `'es'` → uiLang `es`, support `es`; `'en'` → uiLang `en`, support `none` (immersion) |
| `ptb1:level` | `ptb1:en:level` | per-course | |
| `ptb1:placementDone` | `ptb1:en:placementDone` | per-course | |
| `ptb1:fc:<topic>:<index>` | `ptb1:en:fc:<topic>:<cardId>` | per-course | index → stable card id (fixes reorder corruption) |
| `ptb1:wrongs` | `ptb1:en:wrongs` | per-course | `qi` index → stable quiz-item id |
| `ptb1:app` (`{xp, completed}`) | split: `ptb1:xp` + `ptb1:en:completed` | global + per-course | xp measures the learner; completed is full of topic ids |
| `ptb1:streak` | `ptb1:streak` (unchanged) | global | per-course streaks would wrongly reset on switch |
| — | `ptb1:course` | global | active target id |
| — | `ptb1:courses` | global | enrolled list `[{target, support}]` |

**Migration mechanics (critical, from review):** the migration is
**idempotent and runs on every startup**, sequenced **after**
`restoreFromSupabase` inside `enterApp` (and in the no-auth path). A
one-time flag-guarded migration would lose progress on any fresh device:
local storage is empty, migration no-ops, then the Supabase restore
injects *old-format* keys after it already ran. After mapping, legacy keys
are deleted locally so the `ptb1:*` sync sweep never resurrects them. The
Supabase sync *functions* need no changes, but the migration must live
inside the sync *lifecycle*.

Reset semantics: per-course reset clears `ptb1:<target>:*`; the full reset
preserves `uiLang`, `course`, `courses` (today's equivalent preserves
`ptb1:lang`).

## Migration in five safe phases

Every phase ships its own CLAUDE.md delta (the plan obsoletes the
plain-JS-curriculum gotcha, the helper list, the schema section, and the
chunked-write pattern — course files are written per-topic-chunk but are
individually small).

1. **Extract UI strings** → `strings.js` + `t()`; introduce course meta.
   Pure refactor, no content changes.
2. **Introduce the resolver over the existing synchronous global** and
   delete the six content helpers. Verification: a node script
   regex-extracts the old helpers from index.html (same technique as the
   CLAUDE.md JSX check), runs both old helpers and new resolver over every
   field of every topic, and diffs — must be byte-identical before the
   helpers are deleted.
3. **Split content**: script-transform curriculum.js (~1,230 lines,
   175 KB) into `courses/en.core.js` + `en.support.es.js` with generated
   stable item ids; placement + pronunciation move into the core; wire
   the script tags. App behaves identically.
4. **Course selection + namespaced storage**: the Course concept, the
   onboarding/switcher UX, and the key migration per the table above
   (existing users silently enrolled, never see onboarding).
5. **Prove both axes**: author `en.support.da.js` (Danish support —
   fitting, given the app's origin) to prove the L1 axis cheaply, then a
   small `es.core.js` (Spanish for English speakers, even 6 A1 topics) to
   prove the L2 axis end-to-end.

## Phase 5 engine pre-check (from review — do these before authoring `es.core.js`)

- **`norm()` is ASCII-only** (index.html:244, strips everything outside
  `[a-z0-9'\s]`): Spanish pronunciation scoring would destroy every
  accented character and `ñ`. Rewrite Unicode-aware (`\p{L}\p{N}` + NFD
  accent strategy, decided per language in course meta).
- **Three-level CEFR shape is baked into the engine**, not just content:
  `LEVELS` (index.html:88), placement scoring thresholds
  (index.html:404–410), `LevelPath`, per-level reset buttons. All must
  drive from `meta.levels` — the proving course has only `['A1']`.
- **Target-language branding**: app title "Pathway to B1", "your English
  journey", the flashcard front-label "English" — all become course-meta
  strings.
- **Card-back label** comes from the overlay's `name` field (or the
  target-language word for "Definition" in immersion).

## Deliberate non-goals

- **No React context or framework change** — props threading is fine at
  this app size.
- **No per-language pluralization engine** — a tiny per-language rule in
  `strings.js` covers the actual need.
- **No runtime fetch / manifest / loading UX** — see decision #1; dynamic
  script injection is the future upgrade path if the course count grows.
- **No CI** — validator and JSX check remain documented manual gates.

## Risk

The riskiest step was Phase 2-as-originally-drafted (sync→async
restructure); decision #1 now eliminates it. The remaining risks are the
content transform (mitigated by the byte-identical diff verification in
Phase 2 and the validator from Phase 3 on) and the storage migration
(mitigated by idempotent-after-restore sequencing and the key table
above). RTL support is consciously deferred until an RTL language is
actually planned.
