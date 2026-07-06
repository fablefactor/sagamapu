# Plan: Generalizing the tutor to more languages

Status: PROPOSED (not yet implemented)

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
  index.json                   manifest: which cores + overlays exist
  en/
    meta.json                  {id:'en', name, levels:['A1','A2','B1'], speechLocale:'en-GB'}
    core.json                  topics in TARGET language only:
                               {id, level, icon, title, theory[{heading,body}],
                                examples[{text}], flashcards[{front,def}],
                                quiz[{q,options,correct,explain}],
                                placement[], pronunciation[]}
    support.es.json            overlay, mirrors core by topic id + index:
                               {title, theory[{heading,body}], examples[tr],
                                flashcards[back], quiz[explain]}
    support.da.json            <- adding Danish support = one new file, core untouched
  es/
    core.json                  <- Spanish-as-target = new core, reuses the whole engine
    support.en.json
```

## Key decisions

1. **JSON fetched at runtime, not `<script src>`** — keeps the no-build
   constraint (static hosting serves JSON fine), scales to many courses
   without loading all of them up front, and enforces that content stays
   pure data. The current "curriculum.js must be plain JS" gotcha disappears.

2. **`enDef` generalizes to `def`** — a monolingual definition in the target
   language, required in every core. That is what makes immersion mode a
   property of the architecture rather than a special case of English.

3. **One content resolver replaces the eight ad-hoc helpers.**
   `loadCourse(targetId, supportId)` fetches core + overlay and merges them
   into resolved topics. `topicTitle`, `cardBack`, `quizExplain`, etc. become
   plain property reads — the per-call-site `lang==='es' ? ... : ...` logic
   vanishes.

4. **UI strings move to `strings.js` with a `t('key')` helper**, and UI
   language becomes a setting independent of the course (a Dane learning
   Spanish with English UI is a valid combination). The `UI(lang,en,es)`
   argument-order gotcha dies with this.

5. **Placement test and pronunciation sentences move into the core** —
   they are target-language content that is currently hardcoded in
   index.html. `speechLocale` in meta drives the Web Speech API instead of
   hardcoded `en-GB`.

6. **Storage namespaced per course**: `ptb1:<courseId>:...`
   (e.g. `ptb1:en:fc:a1-now:3`), plus `ptb1:uiLang`, `ptb1:course`.
   One-time migration maps existing `ptb1:*` keys into `ptb1:en:*`.
   Supabase sync needs zero changes — it already syncs everything under
   `ptb1:`.

7. **A validator script (`validate.js`, node)** checks schema shape, overlay
   coverage (every core item has a translation in every overlay), `correct`
   indices in range, and duplicate ids. The 2026-06 content review found
   exactly the bug classes this catches — it becomes the pre-commit gate
   alongside the JSX check.

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
- The **streak stays global** (`ptb1:streak`): a day you studied *any*
  course counts. Streaks motivate the person, not the course.

New storage keys:

```
ptb1:uiLang                    UI chrome language (global)
ptb1:course                    active target-language id
ptb1:courses                   enrolled courses: [{target:'en', support:'es'}, ...]
ptb1:<target>:*                all per-course progress (existing key shapes, namespaced)
```

## UX: selecting, switching, and managing courses

**First run (no enrolled courses)** — onboarding before anything else:

1. "I speak…" → sets support language AND defaults `uiLang` to it.
2. "I want to learn…" → target languages that have a core, with a badge
   when full support in the chosen language exists (from `courses/index.json`).
   Pairs without an overlay are offered as "(immersion — explanations in
   <target language>)".
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
to `ptb1:courses`.

**Per-course settings** (in Settings, scoped to the active course):

- Support language — dropdown of available overlays + "None (immersion)".
  Replaces today's global two-way language toggle.
- Reset course progress — replaces "reset level/all" semantics; clears
  `ptb1:<target>:*` only, never other courses, never `uiLang`/`courses`.
- Removing a course from the enrolled list keeps its `ptb1:<target>:*`
  data (cheap, and re-adding restores everything); actual deletion only
  via explicit reset.

**Global settings**: UI language (independent of any course), account/sync.

**Screens whose scope changes**: Home, Flashcards, Progress, Weak Points
all become views over the *active course* (weak points' stored `topicId`s
are already course-scoped once namespaced). The Progress screen header
names the course to keep multi-course users oriented.

## Migration in four safe phases

Each phase ships independently with no user-visible breakage:

1. **Extract UI strings** → `strings.js` + `t()`; introduce course meta.
   Pure refactor.
2. **Split content**: script-transform `curriculum.js` into
   `courses/en/core.json` + `support.es.json` (mechanical — the `*Es`
   fields map 1:1 to the overlay); swap helpers for the resolver. App
   behaves identically.
3. **Course selection + namespaced storage** with the legacy-key migration;
   implements the Course concept and the onboarding/switcher UX described
   above (existing users are silently enrolled in English/Spanish and never
   see onboarding).
4. **Prove both axes**: author `support.da.json` (Danish support — fitting,
   given the app's origin) to prove the L1 axis cheaply, then a small
   `es/core.json` (Spanish for English speakers, even 6 A1 topics) to prove
   the L2 axis end-to-end.

## Deliberate non-goals

- **No React context or framework change** — props threading is fine at
  this app size.
- **No per-language pluralization engine** — `pluralDays` generalizes to a
  tiny per-language rule in `strings.js`, which covers the actual need.

## Risk

The riskiest step is Phase 2's transformation of ~2,200 lines of content,
but it is scriptable and verifiable: the transform script can diff resolved
output against the old helpers' output for every field before anything is
deleted.
