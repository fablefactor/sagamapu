#!/usr/bin/env node
/* ══ validate.js — course content validator (i18n plan Phase 3+) ════════════
 *
 * Usage:  node tools/validate.js
 *
 * vm-loads every courses/*.js file (they are one-line window.PTB_COURSES
 * wrappers around pure JSON literals) into a shared fake window, then checks:
 *
 *   - schema shape: meta {id,name,nameByLang,levels,speechLocale};
 *     core topics {id,icon,level,title,theory[],examples[],flashcards[],
 *     quiz[]}; placement[]; pronunciation per level
 *   - stable-id uniqueness within each item array
 *   - quiz/placement `correct`/`ans` indices in range
 *   - overlay coverage and id-alignment: every overlay entry must map to an
 *     existing core item id (orphans = ERROR); missing translations are
 *     reported as warnings
 *
 * Exit code 1 on any error; warnings alone exit 0. This is a manual gate
 * (no CI) — run it after any content edit, alongside the JSX check.
 */
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const COURSES_DIR = path.join(ROOT, 'courses');

let errors = 0, warnings = 0;
const err = (msg) => { errors++; console.error('ERROR   ' + msg); };
const warn = (msg) => { warnings++; console.warn('warning ' + msg); };

/* ── Load course files: core files first, then overlays ── */
const files = fs.readdirSync(COURSES_DIR).filter(f => f.endsWith('.js'))
  .sort((a, b) => (a.includes('.support.') - b.includes('.support.')) || a.localeCompare(b));
const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of files) {
  try {
    vm.runInContext(fs.readFileSync(path.join(COURSES_DIR, f), 'utf8'), sandbox, { filename: f });
  } catch (e) {
    err(`${f}: failed to load: ${e.message}`);
  }
}
const PTB_COURSES = sandbox.window.PTB_COURSES || {};
if (Object.keys(PTB_COURSES).length === 0) err('no courses loaded from courses/');

const isStr = (v) => typeof v === 'string' && v.length > 0;
const isInt = (v) => Number.isInteger(v);

function checkIds(where, arr, prefix) {
  const seen = new Set();
  arr.forEach((item, i) => {
    if (!isStr(item.id)) err(`${where}[${i}]: missing/empty id`);
    else {
      if (seen.has(item.id)) err(`${where}: duplicate id '${item.id}'`);
      seen.add(item.id);
      if (prefix && !new RegExp('^' + prefix + '\\d+$').test(item.id))
        warn(`${where}: id '${item.id}' does not match convention ${prefix}<n>`);
    }
  });
  return seen;
}

for (const [courseId, course] of Object.entries(PTB_COURSES)) {
  const C = `course '${courseId}'`;

  /* ── meta ── */
  const meta = course.meta;
  if (!meta) { err(`${C}: missing meta`); continue; }
  if (meta.id !== courseId) err(`${C}: meta.id '${meta.id}' != key '${courseId}'`);
  if (!isStr(meta.name)) err(`${C}: meta.name missing`);
  if (!meta.nameByLang || typeof meta.nameByLang !== 'object') err(`${C}: meta.nameByLang missing`);
  if (!Array.isArray(meta.levels) || meta.levels.length === 0 || !meta.levels.every(isStr))
    err(`${C}: meta.levels must be a non-empty string array`);
  if (!isStr(meta.speechLocale)) err(`${C}: meta.speechLocale missing`);

  /* ── core ── */
  const core = course.core;
  if (!core || !core.topics || typeof core.topics !== 'object') { err(`${C}: missing core.topics`); continue; }
  const coreIds = {}; // topicId -> {theory:Set, examples:Set, flashcards:Set, quiz:Set}

  for (const [tid, tp] of Object.entries(core.topics)) {
    const T = `${C} topic '${tid}'`;
    if (tp.id !== tid) err(`${T}: id '${tp.id}' != key`);
    if (!isStr(tp.icon)) err(`${T}: missing icon`);
    if (!meta.levels.includes(tp.level)) err(`${T}: level '${tp.level}' not in meta.levels`);
    if (!isStr(tp.title)) err(`${T}: missing title`);
    for (const k of ['theory', 'examples', 'flashcards', 'quiz'])
      if (!Array.isArray(tp[k]) || tp[k].length === 0) err(`${T}: ${k} must be a non-empty array`);

    const ids = {
      theory:     checkIds(`${T}.theory`, tp.theory || [], 't'),
      examples:   checkIds(`${T}.examples`, tp.examples || [], 'e'),
      flashcards: checkIds(`${T}.flashcards`, tp.flashcards || [], 'f'),
      quiz:       checkIds(`${T}.quiz`, tp.quiz || [], 'q'),
    };
    coreIds[tid] = ids;

    (tp.theory || []).forEach(s => { if (!isStr(s.heading) || !isStr(s.body)) err(`${T}.theory '${s.id}': heading/body must be non-empty strings`); });
    (tp.examples || []).forEach(e => { if (!isStr(e.text)) err(`${T}.examples '${e.id}': text must be a non-empty string`); });
    (tp.flashcards || []).forEach(c => {
      if (!isStr(c.front)) err(`${T}.flashcards '${c.id}': front must be a non-empty string`);
      if (!isStr(c.def)) err(`${T}.flashcards '${c.id}': def (target-language definition) is required`);
    });
    (tp.quiz || []).forEach(q => {
      if (!isStr(q.q)) err(`${T}.quiz '${q.id}': q must be a non-empty string`);
      if (!Array.isArray(q.options) || q.options.length < 2 || !q.options.every(isStr))
        err(`${T}.quiz '${q.id}': options must be >=2 non-empty strings`);
      else if (!isInt(q.correct) || q.correct < 0 || q.correct >= q.options.length)
        err(`${T}.quiz '${q.id}': correct index ${q.correct} out of range`);
      if (!isStr(q.explain)) err(`${T}.quiz '${q.id}': explain must be a non-empty string`);
    });
  }

  /* ── placement ── */
  if (!Array.isArray(core.placement) || core.placement.length === 0) err(`${C}: core.placement must be a non-empty array`);
  else {
    checkIds(`${C}.placement`, core.placement, 'p');
    core.placement.forEach(q => {
      const P = `${C}.placement '${q.id}'`;
      if (!isStr(q.q)) err(`${P}: q must be a non-empty string`);
      if (!Array.isArray(q.opts) || q.opts.length < 2 || !q.opts.every(isStr)) err(`${P}: opts must be >=2 non-empty strings`);
      else if (!isInt(q.ans) || q.ans < 0 || q.ans >= q.opts.length) err(`${P}: ans index ${q.ans} out of range`);
      if (!meta.levels.includes(q.level)) err(`${P}: level '${q.level}' not in meta.levels`);
    });
  }

  /* ── pronunciation ── */
  if (!core.pronunciation || typeof core.pronunciation !== 'object') err(`${C}: core.pronunciation missing`);
  else meta.levels.forEach(lv => {
    const arr = core.pronunciation[lv];
    if (!Array.isArray(arr) || arr.length === 0 || !arr.every(isStr))
      err(`${C}: core.pronunciation.${lv} must be a non-empty string array`);
  });

  /* ── overlays: coverage + id-alignment ── */
  const ITEM_KEYS = ['theory', 'examples', 'flashcards', 'quiz'];
  for (const [supLang, ov] of Object.entries(course.support || {})) {
    const O = `${C} overlay '${supLang}'`;
    if (!isStr(ov.name)) err(`${O}: name missing`);
    if (!ov.topics || typeof ov.topics !== 'object') { err(`${O}: topics missing`); continue; }

    for (const [tid, otp] of Object.entries(ov.topics)) {
      if (!coreIds[tid]) { err(`${O}: orphan topic '${tid}' (not in core)`); continue; }
      if (!isStr(otp.title)) warn(`${O} topic '${tid}': missing title translation`);
      for (const k of ITEM_KEYS) {
        const entries = otp[k] || {};
        for (const [itemId, val] of Object.entries(entries)) {
          if (!coreIds[tid][k].has(itemId)) err(`${O} topic '${tid}'.${k}: orphan item id '${itemId}' (not in core)`);
          else if (k === 'theory' ? !(val && isStr(val.heading) && isStr(val.body)) : !isStr(val))
            warn(`${O} topic '${tid}'.${k}['${itemId}']: empty/incomplete translation`);
        }
        for (const coreId of coreIds[tid][k])
          if (!(coreId in entries)) warn(`${O} topic '${tid}'.${k}: missing translation for '${coreId}'`);
      }
    }
    for (const tid of Object.keys(coreIds))
      if (!ov.topics[tid]) warn(`${O}: missing topic '${tid}' entirely`);
  }

  const nTopics = Object.keys(core.topics).length;
  console.log(`course '${courseId}': ${nTopics} topics, ${(core.placement || []).length} placement items, overlays: [${Object.keys(course.support || {}).join(', ') || 'none'}]`);
}

console.log(`\nvalidate: ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors > 0 ? 1 : 0);
