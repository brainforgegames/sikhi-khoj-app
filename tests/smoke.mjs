import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
const app = readFileSync(join(root, 'app.js'), 'utf8');
const config = readFileSync(join(root, 'config.js'), 'utf8');
const analytics = readFileSync(join(root, 'analytics.js'), 'utf8');

assert.match(html, /<html lang="pa">/);
assert.match(html, /id="quiz"/);
const playStore = 'https://play.google.com/store/apps/details?id=com.brainforgegames.sikhikhoj';
assert.ok(html.split(playStore).length >= 3, 'hero and download section must link to the real Android listing');
assert.ok(app.includes(playStore), 'completed quiz must offer the Android listing');
assert.doesNotMatch(html + app, /COMING SOON|JOIN THE LAUNCH LIST|NOTIFY ME AT LAUNCH|arrives on the App Store and Play Store/i, 'Android is available; do not restore prelaunch copy');
assert.match(html, /Not yet available on iOS/);
assert.match(html, /no announced release date yet/);
assert.match(html, /App screens · Development preview/);
assert.match(html, /version on Google Play may look different/);
for (const file of ['en-lesson-development.jpg', 'pa-lesson-development.jpg']) {
  assert.ok(statSync(join(root, 'assets/images/screenshots', file)).size < 500_000, 'app preview must stay below 500KB');
}
assert.doesNotMatch(html, /class="app-screen"|class="daily-card"/, 'marketing must not contain a fabricated app screen');

assert.match(html, /id="registration-form"/);
assert.match(html, /name="consent"/);
assert.match(html, /contact@brainforgegames\.com/g);
assert.equal((app.match(/\n\s+topic:/g) || []).length, 5, 'quiz should contain five questions');
assert.equal((app.match(/\n\s+answer:/g) || []).length, 5, 'every quiz question needs an answer');
assert.match(config, /^\s*registrationEndpoint:\s*'https:\/\//m);
assert.match(config, /^\s*analyticsMeasurementId:\s*'G-[A-Z0-9]+'/m);
assert.match(html, /<script defer src="analytics\.js\?v=[0-9-]+"><\/script>/);
assert.match(html, /<script defer src="app\.js\?v=[0-9-]+"><\/script>/);
for (const event of ['web_language_selected', 'web_quiz_started', 'web_quiz_completed', 'web_registration_started', 'web_registration_submitted', 'web_registration_success', 'web_registration_error']) {
  assert.match(app, new RegExp(`analytics\\.event\\('${event}'`), `missing analytics event: ${event}`);
}
for (const event of [...app.matchAll(/analytics\.event\('([^']+)'/g)].map(match => match[1])) {
  assert.match(event, /^web_/, `custom website event needs web_ prefix: ${event}`);
  assert.ok(event.length <= 40, `Analytics event name is too long: ${event}`);
}
assert.doesNotMatch(app, /analytics\.event\([^\n]*(?:email|phone|name)\b\s*[,}]/i, 'analytics must not include contact details');
assert.match(analytics, /allow_ad_personalization_signals:\s*false/);
assert.match(css, /@media \(max-width:620px\)/);

const appendedScripts = [];
const sandbox = {
  window: {},
  document: {
    createElement: () => ({}),
    head: { appendChild: script => appendedScripts.push(script) }
  },
  encodeURIComponent
};
runInNewContext(config, sandbox);
runInNewContext(analytics, sandbox);
assert.equal(appendedScripts[0]?.src, 'https://www.googletagmanager.com/gtag/js?id=G-LCQZ28TCLD');
assert.equal(typeof sandbox.window.SIKHI_KHOJ_ANALYTICS?.event, 'function');
sandbox.window.SIKHI_KHOJ_ANALYTICS.event('smoke_test', { contains_personal_data: false });
assert.equal(sandbox.window.dataLayer.length, 3, 'Analytics should queue setup and custom events');
assert.equal(sandbox.window.dataLayer[2][0], 'event');
assert.equal(sandbox.window.dataLayer[2][1], 'smoke_test');

const localAssets = [...html.matchAll(/(?:src|href)="(?!https?:|mailto:|#)([^"?]+)"/g)].map(match => match[1]);
for (const asset of localAssets) assert.ok(existsSync(join(root, asset)), `missing website asset: ${asset}`);

console.log(`Website smoke checks passed (${localAssets.length} local asset references).`);

await import('./behavior.mjs');
