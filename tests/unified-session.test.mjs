import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const navbar = await readFile(new URL('../src/components/Navbar.astro', import.meta.url), 'utf8');
const layout = await readFile(new URL('../src/layouts/Layout.astro', import.meta.url), 'utf8');
const config = await readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8');

test('Room remains static and Layout keeps the shared Navbar', () => {
  assert.match(config, /output:\s*['"]static['"]/);
  assert.match(layout, /<Navbar\s*\/>/);
});

test('Room reads only the safe owner session with credentials', () => {
  assert.match(navbar, /https:\/\/www\.intensivetrader\.com/);
  assert.match(navbar, /fetch\(SESSION_URL,[\s\S]*credentials:\s*['"]include['"]/);
  assert.match(navbar, /authenticated:\s*boolean/);
  assert.match(navbar, /banned:\s*boolean/);
  assert.doesNotMatch(navbar, /access[_-]?token|refresh[_-]?token|license[_-]?key/i);
});

test('loading, guest, authenticated, banned and owner logout states are wired', () => {
  assert.match(navbar, /กำลังตรวจบัญชี/);
  assert.match(navbar, /renderGuest\(\)/);
  assert.match(navbar, /createAccount\(session/);
  assert.match(navbar, /renderBanned\(\)/);
  assert.match(navbar, /ownerUrl\('\/member\/logout'\)/);
  assert.match(navbar, /addEventListener\('click', renderGuest\)/);
});
