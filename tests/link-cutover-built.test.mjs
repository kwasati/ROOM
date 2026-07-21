import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function built(path) {
  return readFile(new URL(`../dist/${path}`, import.meta.url), 'utf8');
}

test('static deploy output contains only direct canonical Journal links', async () => {
  const files = await Promise.all([
    built('index.html'),
    built('ea/gdbasket/index.html'),
    built('sitemap-0.xml'),
    built('sitemap-index.xml'),
  ]);
  const output = files.join('\n');
  const canonicalLinks = output.match(/href="https:\/\/journal\.intensivetrader\.com\/"/g) ?? [];

  assert.equal(canonicalLinks.length, 7, 'desktop/mobile Navbar plus three gdBasket CTAs must be present in built HTML');
  assert.doesNotMatch(output, /https:\/\/(?:www\.)?intensivetrader\.com\/journal/);
  assert.doesNotMatch(output, /href="\/journal(?:["/?#])/);
});
