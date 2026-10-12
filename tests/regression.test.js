// Smoke/regression tests for pure application logic. Requires Node.js 18+; no npm dependencies.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const inlineScripts = [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi)].map(m => m[1]).filter(s => s.trim());
const appSource = inlineScripts[inlineScripts.length - 1];

function extractFunction(name, asyncFunction = false) {
  const marker = `${asyncFunction ? 'async ' : ''}function ${name}(`;
  const start = appSource.indexOf(marker);
  if (start < 0) throw new Error(`Function not found: ${name}`);
  const open = appSource.indexOf('{', start);
  let depth = 0, quote = null, escaped = false, lineComment = false, blockComment = false;
  for (let i = open; i < appSource.length; i++) {
    const c = appSource[i], n = appSource[i + 1];
    if (lineComment) { if (c === '\n') lineComment = false; continue; }
    if (blockComment) { if (c === '*' && n === '/') { blockComment = false; i++; } continue; }
    if (quote) {
      if (escaped) { escaped = false; continue; }
      if (c === '\\') { escaped = true; continue; }
      if (c === quote) quote = null;
      continue;
    }
    if (c === '/' && n === '/') { lineComment = true; i++; continue; }
    if (c === '/' && n === '*') { blockComment = true; i++; continue; }
    if (c === '"' || c === "'" || c === '`') { quote = c; continue; }
    if (c === '{') depth++;
    if (c === '}' && --depth === 0) return appSource.slice(start, i + 1);
  }
  throw new Error(`Could not extract complete function: ${name}`);
}

const uid = () => 'test-id';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function parseDateSafe(value) {
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  if (value == null || !String(value).trim()) return null;
  const text = String(value);
  const date = /^\d{4}-\d{2}-\d{2}$/.test(text) ? new Date(`${text}T00:00:00`) : new Date(text);
  return Number.isNaN(date.getTime()) ? null : date;
}
const isValidDateOnly = value => /^\d{4}-\d{2}-\d{2}$/.test(String(value || '')) && !!parseDateSafe(value);
function localDateISO(date = new Date()) {
  const year = date.getFullYear(), month = String(date.getMonth() + 1).padStart(2, '0'), day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
const todayISO = () => '2026-10-12';
let savedCalls=0, renderCalls=0;
const silentConsole = {log(){}, warn(){}, error(){}, info(){}};

const context = {
  console: silentConsole, Math, Number, String, Array, Object, Set, Date, JSON,
  uid, esc, parseDateSafe, isValidDateOnly, localDateISO, todayISO,
  sanitizeNoteHtml: value => String(value || ''),
  stripHtml: value => String(value || '').replace(/<[^>]*>/g, ''),
  window: { crypto: { randomUUID: uid } }, document: {}, NodeFilter: { SHOW_ELEMENT: 1 },
  saveState(){ savedCalls += 1; },
  render(){ renderCalls += 1; },
  toast(message){ this.lastToast = message; },
  updateSaveStatusUI(){},
  STATE: null, FLASH_TOPIC: null, FLASH_DUE_ONLY: false, FLASH_INDEX: 0, FLASH_FLIPPED: false, FLASH_REVIEWED_SESSION: 0,
  CURRENT_USER: {id:'qa-user'}, DATA_READY: true, DATA_LOAD_ERROR: null, SAVE_STATUS: 'saved'
};
vm.createContext(context);
for (const fn of ['defaultState','normalizeCycleMinute','normalizeState','dueFlashcards','currentFlashcardPool','gradeFlashcard','fmtTimer']) {
  vm.runInContext(extractFunction(fn), context, {timeout: 1000});
}
vm.runInContext(extractFunction('loadState', true), context, {timeout: 1000});

(async () => {
  const migrated = context.normalizeState({
    topics: [{id:'subject1', name:'Biologia', parentId:null}], notes: [],
    goals: [{id:'goal1', title:'Meta', status:'pausada', priority:'alta'}],
    sessions: [], events: [], doubts: [], questions: [],
    flashcards: [{id:'card1', front:'Pergunta', back:'Resposta', topicId:'subject1', difficulty:'medio', nextReview:'2026-10-10', reviewHistory:[]}],
    settings: {terms:{area:'Área',sub:'Tópico'}, pomodoro:{work:25,brk:5,presets:[{id:'p',name:'Longo',work:90,brk:0}],cycles:[{id:'c',name:'Ciclo',repeats:3,steps:[{work:70,brk:75}]}]}, reviewIntervals:[1,3,7]}
  });
  assert.equal(migrated.goals[0].status, 'pausada', 'goal status remains paused after normalization');
  assert.equal(migrated.goals[0].priority, 'alta', 'goal priority remains high after normalization');
  assert.equal(migrated.settings.pomodoro.presets[0].work, 90, 'preset work > 60 persists');
  assert.equal(migrated.settings.pomodoro.presets[0].brk, 0, 'zero pause remains zero');
  assert.equal(migrated.settings.pomodoro.cycles[0].steps[0].work, 70, 'cycle focus > 60 persists');
  assert.equal(migrated.settings.pomodoro.cycles[0].steps[0].brk, 75, 'cycle pause > 60 persists');
  assert.equal(context.normalizeCycleMinute(90, 25, 1), 90, 'cycle normalization accepts 90');
  assert.equal(context.normalizeCycleMinute(75, 5, 0), 75, 'cycle normalization accepts 75');

  context.STATE = migrated;
  assert.equal(context.dueFlashcards(context.STATE.flashcards).length, 1, 'overdue flashcard enters today queue');
  context.gradeFlashcard('card1', 'good');
  const card = context.STATE.flashcards[0];
  assert.equal(card.reviewHistory.length, 1, 'rating records a history event');
  assert.equal(card.totalReviews, 1, 'lifetime review count increments');
  assert.equal(card.repetitions, 1, 'successful review increments repetitions');
  assert.equal(card.reviewIntervalDays, 1, 'first Good rating schedules one day');
  assert.equal(card.nextReview, '2026-10-13', 'next review date is the expected local date');
  assert.equal(context.dueFlashcards(context.STATE.flashcards).length, 0, 'reviewed card leaves today queue');
  assert.equal(savedCalls, 1, 'rating requests persistence');
  assert.equal(renderCalls, 1, 'rating refreshes the view');
  assert.equal(context.fmtTimer(70 * 60), '70:00', 'timer format preserves durations over 60 minutes');

  const preserved = {notes:[{id:'important',title:'Do not lose me'}]};
  context.STATE = preserved;
  context.DATA_READY = true;
  context.SAVE_STATUS = 'saved';
  context.sb = { from(){ return { select(){return this;}, eq(){return this;}, async maybeSingle(){return {data:null,error:{message:'simulated network outage'}}; } }; } };
  const loaded = await context.loadState();
  assert.equal(loaded, false, 'failed remote read returns false');
  assert.equal(context.DATA_READY, false, 'failed remote read leaves editing disabled');
  assert.equal(context.STATE.notes[0].id, 'important', 'failed remote read does not replace existing state with empty defaults');
  assert.equal(context.SAVE_STATUS, 'error', 'failed remote read is represented as an error');

  console.log('PASS: normalization of goals/priorities; focus/break 70/75/90; zero-minute break; adaptive flashcard review and queue; lifetime review counter; timer formatting; fail-closed data loading.');
})().catch(error => { console.error(error); process.exitCode = 1; });
