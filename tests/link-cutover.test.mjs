import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function source(path) {
  return readFile(new URL(path, import.meta.url), 'utf8');
}

test('Room Navbar links Trading Journal directly to the canonical subdomain', async () => {
  const navbar = await source('../src/components/Navbar.astro');

  assert.match(navbar, /const JOURNAL = 'https:\/\/journal\.intensivetrader\.com\/';/);
  assert.match(navbar, /href: JOURNAL, label: 'Trading Journal'/);
  assert.doesNotMatch(navbar, /\$\{MAIN\}\/journal|intensivetrader\.com\/journal/);
});

test('every gdBasket Trading Journal CTA uses the canonical URL constant', async () => {
  const page = await source('../src/pages/ea/gdbasket.astro');

  assert.match(page, /const JOURNAL = 'https:\/\/journal\.intensivetrader\.com\/';/);
  assert.match(page, /name: 'Trading Journal'[\s\S]*href: JOURNAL/);
  assert.equal((page.match(/href=\{JOURNAL\}/g) ?? []).length, 2);
  assert.doesNotMatch(page, /\$\{MAIN\}\/journal|(?:www\.)?intensivetrader\.com\/journal/);
});
