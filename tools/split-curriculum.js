#!/usr/bin/env node
/* ══ split-curriculum.js — i18n plan Phase 3 content transform ══════════════
 *
 * One-time transform, kept in the repo as documentation of how the course
 * files were derived. It reads the PRE-Phase-3 sources:
 *
 *   - curriculum.js        → the CURRICULUM global (topics with mixed
 *                            English + Spanish fields)
 *   - index.html           → PLACEMENT_QS, PRON_SENTENCES, LEVEL_TOPICS and
 *                            COURSE_META literals (regex-extracted, vm-eval'd)
 *
 * and emits the split course files:
 *
 *   - courses/en.core.js       → target-language (English) content only,
 *                                with generated stable item ids, plus the
 *                                placement test and pronunciation sentences
 *                                moved out of index.html
 *   - courses/en.support.es.js → the Spanish overlay, keyed by topic id +
 *                                item id (never by array index)
 *
 * Topic emission order: LEVEL_TOPICS order (A1 list, then A2, then B1) so
 * that deriving LEVEL_TOPICS from core insertion order reproduces the app's
 * current topic ordering exactly.
 *
 * ID STABILITY RULE (see also the headers of the generated files):
 * ids are generated once, per current array order — theory t1.., examples
 * e1.., flashcards f1.., quiz q1.., placement p1... From now on they are
 * STABLE: future insertions must mint NEW ids, never renumber existing ones.
 *
 * NOTE: after Phase 3 lands (curriculum.js deleted, index.html rewired) this
 * script's inputs no longer exist in the working tree; run it against the
 * pre-Phase-3 revision if ever needed:  git show <rev>:curriculum.js  etc.
 */
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');

/* ── Load CURRICULUM from curriculum.js ── */
const currSrc = fs.readFileSync(path.join(ROOT, 'curriculum.js'), 'utf8');
const currCtx = {};
vm.createContext(currCtx);
vm.runInContext(currSrc + '\n;globalThis.__OUT = CURRICULUM;', currCtx);
const CURRICULUM = currCtx.__OUT;
if (!CURRICULUM || typeof CURRICULUM !== 'object') throw new Error('Failed to load CURRICULUM');

/* ── Extract literals from index.html ── */
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
function extract(name, open, close) {
  const re = new RegExp('const ' + name + '\\s*=\\s*(\\' + open + '[\\s\\S]*?\\n\\' + close + ');');
  const m = html.match(re);
  if (!m) throw new Error('Could not extract ' + name + ' from index.html');
  return vm.runInNewContext('(' + m[1] + ')');
}
const PRON_SENTENCES = extract('PRON_SENTENCES', '{', '}');
const PLACEMENT_QS   = extract('PLACEMENT_QS', '[', ']');
const LEVEL_TOPICS   = extract('LEVEL_TOPICS', '{', '}');
const metaMatch = html.match(/const COURSE_META\s*=\s*(\{.*?\});/);
if (!metaMatch) throw new Error('Could not extract COURSE_META from index.html');
const COURSE_META = vm.runInNewContext('(' + metaMatch[1] + ')');

/* ── Sanity: LEVEL_TOPICS covers exactly the CURRICULUM keys ── */
const orderedIds = COURSE_META.levels.flatMap(lv => LEVEL_TOPICS[lv]);
const currIds = Object.keys(CURRICULUM);
if (orderedIds.length !== currIds.length || orderedIds.some(id => !CURRICULUM[id])) {
  throw new Error('LEVEL_TOPICS does not match CURRICULUM keys');
}

/* ── Build core + overlay ── */
const meta = { ...COURSE_META, nameByLang: { en: 'English', es: 'Inglés' } };

const coreTopics = {};
const overlayTopics = {};

for (const id of orderedIds) {
  const tp = CURRICULUM[id];

  const core = {
    id,
    icon: tp.icon,
    level: tp.level,
    title: tp.title,
    theory: tp.theory.map((sec, i) => ({ id: 't' + (i + 1), heading: sec.heading, body: sec.body })),
    examples: tp.examples.map((ex, i) => ({ id: 'e' + (i + 1), text: ex.en })),
    flashcards: tp.flashcards.map((c, i) => ({ id: 'f' + (i + 1), front: c.front, def: c.enDef })),
    quiz: tp.quiz.map((q, i) => ({ id: 'q' + (i + 1), q: q.q, options: q.options, correct: q.correct, explain: q.explain })),
  };
  coreTopics[id] = core;

  const ov = { title: tp.titleEs, theory: {}, examples: {}, flashcards: {}, quiz: {} };
  tp.theory.forEach((sec, i) => {
    if (sec.headingEs != null || sec.bodyEs != null)
      ov.theory['t' + (i + 1)] = { heading: sec.headingEs, body: sec.bodyEs };
  });
  tp.examples.forEach((ex, i) => { if (ex.es != null) ov.examples['e' + (i + 1)] = ex.es; });
  tp.flashcards.forEach((c, i) => { if (c.es != null) ov.flashcards['f' + (i + 1)] = c.es; });
  tp.quiz.forEach((q, i) => { if (q.explainEs != null) ov.quiz['q' + (i + 1)] = q.explainEs; });
  overlayTopics[id] = ov;
}

/* Placement: stable ids p1..pN; current items are English-only (no Spanish
   fields exist — verified), so nothing goes to the overlay. */
const placement = PLACEMENT_QS.map((q, i) => ({ id: 'p' + (i + 1), q: q.q, opts: q.opts, ans: q.ans, level: q.level }));

const IDRULE =
`   ID STABILITY RULE: every content item carries a short stable id
   (theory t*, examples e*, flashcards f*, quiz q*, placement p*).
   Support overlays key translations by topic id + ITEM id — never by
   array index. Future insertions MUST mint NEW ids (t4, e9, f11, ...);
   NEVER renumber or reuse existing ids, even when inserting mid-array
   or deleting items.`;

const coreOut =
`/* Pathway to B1 — course "en" core: target-language (English) content only.
   Generated by tools/split-curriculum.js (i18n plan Phase 3).
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> before the Babel block.

${IDRULE} */
window.PTB_COURSES = window.PTB_COURSES || {};
window.PTB_COURSES.en = ${JSON.stringify({ meta, core: { topics: coreTopics, placement, pronunciation: PRON_SENTENCES } }, null, 2)};
`;

const overlayOut =
`/* Pathway to B1 — course "en", Spanish (es) support overlay.
   Generated by tools/split-curriculum.js (i18n plan Phase 3).
   Plain JS, no JSX: a one-line window.PTB_COURSES wrapper around a pure
   JSON literal, loaded via <script src> AFTER courses/en.core.js.

   Translations are keyed by topic id + ITEM id from the core — never by
   array index.
${IDRULE} */
window.PTB_COURSES.en.support = window.PTB_COURSES.en.support || {};
window.PTB_COURSES.en.support.es = ${JSON.stringify({ name: 'Español', topics: overlayTopics }, null, 2)};
`;

fs.mkdirSync(path.join(ROOT, 'courses'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'courses', 'en.core.js'), coreOut);
fs.writeFileSync(path.join(ROOT, 'courses', 'en.support.es.js'), overlayOut);

console.log('Wrote courses/en.core.js      (%d topics, %d placement items, %d pron levels)',
  Object.keys(coreTopics).length, placement.length, Object.keys(PRON_SENTENCES).length);
console.log('Wrote courses/en.support.es.js (%d topics)', Object.keys(overlayTopics).length);
