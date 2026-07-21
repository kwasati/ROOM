import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { createLatestRequestRunner, installRefreshLifecycle } from '../src/lib/sessionRefresh.ts';

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

test('refresh lifecycle runs on focus, visible return and 60s TTL, then cleans up', () => {
  const windowTarget = new EventTarget();
  const documentTarget = new EventTarget();
  let visible = true;
  let refreshes = 0;
  let timerCallback;
  let timerDelay;
  let clearedHandle;

  const cleanup = installRefreshLifecycle({
    refresh: () => { refreshes += 1; },
    windowTarget,
    documentTarget,
    isDocumentVisible: () => visible,
    setIntervalFn: (callback, delay) => {
      timerCallback = callback;
      timerDelay = delay;
      return 42;
    },
    clearIntervalFn: (handle) => { clearedHandle = handle; }
  });

  windowTarget.dispatchEvent(new Event('focus'));
  visible = false;
  documentTarget.dispatchEvent(new Event('visibilitychange'));
  visible = true;
  documentTarget.dispatchEvent(new Event('visibilitychange'));
  timerCallback();

  assert.equal(timerDelay, 60_000);
  assert.equal(refreshes, 3);
  cleanup();
  assert.equal(clearedHandle, 42);
  windowTarget.dispatchEvent(new Event('focus'));
  assert.equal(refreshes, 3);
});

test('latest request runner aborts overlap and ignores stale responses', async () => {
  const pending = [];
  const applied = [];
  const errors = [];
  const runner = createLatestRequestRunner({
    load: (signal) => new Promise((resolve) => pending.push({ signal, resolve })),
    apply: (value) => applied.push(value),
    onError: (error) => errors.push(error)
  });

  const first = runner.run();
  const second = runner.run();
  assert.equal(pending[0].signal.aborted, true);

  pending[1].resolve('authenticated');
  await second;
  pending[0].resolve('guest-stale');
  await first;

  assert.deepEqual(applied, ['authenticated']);
  assert.deepEqual(errors, []);
  runner.dispose();
});
