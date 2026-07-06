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

## Migration in four safe phases

Each phase ships independently with no user-visible breakage:

1. **Extract UI strings** → `strings.js` + `t()`; introduce course meta.
   Pure refactor.
2. **Split content**: script-transform `curriculum.js` into
   `courses/en/core.json` + `support.es.json` (mechanical — the `*Es`
   fields map 1:1 to the overlay); swap helpers for the resolver. App
   behaves identically.
3. **Course selection + namespaced storage** with the legacy-key migration;
   onboarding asks "I speak…" / "I want to learn…", offering only pairs
   that exist in the manifest.
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
