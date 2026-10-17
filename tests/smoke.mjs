import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
const app = readFileSync(join(root, 'app.js'), 'utf8');
const config = readFileSync(join(root, 'config.js'), 'utf8');

assert.match(html, /<html lang="pa">/);
assert.match(html, /id="quiz"/);
assert.match(html, /id="registration-form"/);
assert.match(html, /name="consent"/);
assert.match(html, /contact@brainforgegames\.com/g);
assert.equal((app.match(/\n\s+topic:/g) || []).length, 5, 'quiz should contain five questions');
assert.equal((app.match(/\n\s+answer:/g) || []).length, 5, 'every quiz question needs an answer');
assert.match(config, /^\s*registrationEndpoint:\s*'https:\/\//m);
assert.match(css, /@media \(max-width:620px\)/);

const localAssets = [...html.matchAll(/(?:src|href)="(?!https?:|mailto:|#)([^"?]+)"/g)].map(match => match[1]);
for (const asset of localAssets) assert.ok(existsSync(join(root, asset)), `missing website asset: ${asset}`);

console.log(`Website smoke checks passed (${localAssets.length} local asset references).`);
