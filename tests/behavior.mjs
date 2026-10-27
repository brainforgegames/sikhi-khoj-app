import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

// Executes the real app with isolated DOM, clock, storage and network doubles.
function fixture() {
  const nodes = new Map();
  const events = [];
  const timers = new Map();
  let timerId = 0;
  class Element {
    constructor() { this.dataset = {}; this.style = {}; this.listeners = {}; this.attributes = {}; this.classList = { add() {}, remove() {} }; this.value = ''; }
    addEventListener(type, callback) { this.listeners[type] = callback; }
    setAttribute(key, value) { this.attributes[key] = value; }
    removeAttribute(key) { delete this.attributes[key]; }
    focus() { this.focused = true; }
    scrollIntoView() {}
    closest() { return this; }
    querySelector(selector) { return node(selector); }
    querySelectorAll(selector) { return selector === '.option' ? options : []; }
  }
  function node(selector) { if (!nodes.has(selector)) nodes.set(selector, new Element()); return nodes.get(selector); }
  const options = Array.from({ length: 3 }, (_, i) => { const e = new Element(); e.dataset.option = String(i); return e; });
  const form = node('#registration-form');
  form.elements = Object.fromEntries(['name', 'email', 'phone', 'notifyEmail', 'notifyWhatsApp', 'consent', 'startedAt'].map(key => [key, new Element()]));
  form.reset = () => { form.resets = (form.resets || 0) + 1; };
  let values = { name: 'Test User', email: 'test@example.com', phone: '+44 (20) 1234-5678', notifyEmail: 'on', consent: 'on' };
  const requests = [];
  let respond = async () => ({ ok: true, json: async () => ({}) });
  const context = {
    document: { querySelector: node, querySelectorAll: () => [], documentElement: new Element() },
    window: { SIKHI_KHOJ_CONFIG: { registrationEndpoint: 'mock-only', contactEmail: 'help@example.com' }, SIKHI_KHOJ_ANALYTICS: { event: (...args) => events.push(args) } },
    localStorage: { getItem: () => 'en', setItem() {} },
    FormData: class { get(key) { return values[key]; } },
    AbortController,
    setTimeout: (callback, delay) => { assert.equal(delay, 15000); timers.set(++timerId, callback); return timerId; },
    clearTimeout: id => timers.delete(id),
    fetch: (...args) => { requests.push(args); return respond(...args); }
  };
  const source = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
  runInNewContext(source, context);
  return { node, options, form, events, requests, timers,
    run: code => runInNewContext(code, context),
    values: patch => { values = { ...values, ...patch }; },
    respond: fn => { respond = fn; },
    send: () => form.listeners.submit({ preventDefault() {} })
  };
}
const f = fixture();
const answer = index => f.run(`chooseAnswer({currentTarget: {dataset: {option: '${index}'}}})`);
f.run('nextQuestion()');
assert.equal(f.run('current'), 0);
f.run("applyLanguage('pa'); applyLanguage('en')");
answer(2);
f.run("applyLanguage('pa'); applyLanguage('en')");
answer(0);
assert.equal(f.run('score'), 0, 'wrong answer remains locked across translations');
assert.ok(f.options.every(option => option.disabled));
for (const index of [0, 0, 1, 1]) { f.run('nextQuestion()'); answer(index); answer(index); f.run("applyLanguage('en')"); }
f.run('nextQuestion()');
assert.equal(f.run('score'), 4);
f.run("applyLanguage('pa'); applyLanguage('en'); nextQuestion()");
assert.match(f.node('#quiz-card').innerHTML, /4\/5/);
assert.equal(f.node('#quiz-reset').hidden, false);
assert.equal(f.events.filter(([name]) => name === 'web_quiz_completed').length, 1);
f.run('resetQuiz()');
assert.equal(f.run('score'), 0);
assert.equal(f.run('answered'), false);
assert.equal(f.run('quizComplete'), false);
for (const index of [0, 0, 0, 1, 1]) { answer(index); f.run('nextQuestion()'); }
assert.match(f.node('#quiz-card').innerHTML, /5\/5/);
assert.equal(f.events.filter(([name]) => name === 'web_quiz_completed').length, 2);

for (const patch of [{ name: ' ' }, { notifyEmail: '', notifyWhatsApp: '' }, { email: 'invalid' }, { email: 'a@@b.com' }, { notifyWhatsApp: 'on', phone: 'abc' }, { notifyWhatsApp: 'on', phone: '123' }, { notifyWhatsApp: 'on', phone: '+1234567890123456' }, { consent: '' }]) {
  const t = fixture(); t.values(patch); await t.send(); assert.equal(t.requests.length, 0);
}
for (const channels of [{ notifyEmail: 'on', notifyWhatsApp: '', phone: 'unused' }, { notifyEmail: '', notifyWhatsApp: 'on', email: 'unused' }, { notifyEmail: 'on', notifyWhatsApp: 'on' }]) {
  const t = fixture(); t.values(channels); await t.send();
  const body = JSON.parse(t.requests[0][1].body);
  assert.equal('email' in body, channels.notifyEmail === 'on');
  assert.equal('phone' in body, channels.notifyWhatsApp === 'on');
  assert.equal(t.form.resets, 1); assert.equal(t.timers.size, 0);
}
for (const response of [() => Promise.reject(new Error('offline')), ...[400, 429, 500].map(code => async () => ({ ok: false, status: code, json: async () => ({ message: '<script>bad</script>' }) })), async () => ({ ok: true, json: async () => { throw new Error('malformed'); } })]) {
  const t = fixture(); t.respond(response); await t.send();
  assert.equal(t.form.resets, undefined); assert.equal(t.node('button[type="submit"]').disabled, false);
  assert.match(t.node('#form-status').textContent, /retry/);
  t.respond(async () => ({ ok: true, json: async () => ({ duplicate: true }) })); await t.send();
  assert.match(t.node('#form-status').textContent, /already on the list/);
}
for (const pendingBody of [false, true]) {
  const t = fixture();
  t.respond(() => pendingBody ? Promise.resolve({ ok: true, json: () => new Promise(() => {}) }) : new Promise(() => {}));
  const pending = t.send(); await t.send(); assert.equal(t.requests.length, 1);
  t.run("applyLanguage('pa'); applyLanguage('en')");
  assert.match(t.node('span').textContent, /SENDING/);
  for (const callback of t.timers.values()) callback();
  await pending;
  assert.equal(t.requests[0][1].signal.aborted, true);
  assert.equal(t.node('button[type="submit"]').disabled, false);
  assert.equal(t.form.resets, undefined);
  assert.equal(t.timers.size, 0);
  t.respond(async () => ({ ok: true, json: async () => ({ duplicate: true }) })); await t.send();
  assert.equal(t.form.resets, 1);
}
console.log('Mocked quiz and registration regressions passed (no network).');

// A response arriving after timeout must never reset retained data or report success.
{
  const t = fixture(); let resolveRequest;
  t.respond(() => new Promise(resolve => { resolveRequest = resolve; }));
  const pending = t.send();
  for (const callback of t.timers.values()) callback();
  await pending;
  resolveRequest({ ok: true, json: async () => ({}) });
  await Promise.resolve(); await Promise.resolve(); await Promise.resolve();
  assert.equal(t.form.resets, undefined);
  assert.equal(t.events.filter(([name]) => name === 'web_registration_success').length, 0);
}
{
  const t = fixture(); t.values({ email: 'invalid' }); await t.send();
  assert.equal(t.form.elements.email.attributes['aria-invalid'], 'true');
  assert.equal(t.form.elements.email.attributes['aria-describedby'], 'form-status');
  assert.equal(t.form.elements.email.focused, true);
  t.values({ email: 'valid@example.com' }); await t.send();
  assert.equal(t.form.elements.email.attributes['aria-invalid'], undefined);
}
