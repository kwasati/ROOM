import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { replay, bootstrap, cyclesFromJson, monthlySeries } from '../src/lib/rolling-sim.mjs';

const TOL = 1; // abs tolerance $1 — matches cap_withdrawal_sim.py verify_baseline (abs_tol=1)

function closeTo(actual, expected, tol = TOL, label = '') {
  assert.ok(
    Math.abs(actual - expected) <= tol,
    `${label} expected ${expected}, got ${actual} (diff ${Math.abs(actual - expected)})`,
  );
}

// ---------------------------------------------------------------------------
// Self-test 4 cases — ported from cap_withdrawal_sim.py self_test() (lines 301-334)
// ---------------------------------------------------------------------------

test('self-test: single tranche cap factor + wealth conservation', () => {
  const oneStep = [{ t: 't0', r: 3.0, m: 0.0 }];
  const expectedFactors = { 0.0: 2.0, 0.5: 1.5, 0.6: 1.4, 0.7: 1.3 };
  for (const [rateStr, factor] of Object.entries(expectedFactors)) {
    const rate = Number(rateStr);
    const result = replay(oneStep, { backing: 3, step: 3, withdrawRate: rate, sourceCap: 10000 });
    closeTo(result.finalCap, 10000 * factor, 1e-6, `finalCap@${rate}`);
    closeTo(result.totalWealth, 60000, 1e-6, `totalWealth@${rate}`);
  }
});

test('self-test: multi-step tranche processing in one cycle', () => {
  const multi = [{ t: 't0', r: 15.0, m: 0.0 }];
  const result = replay(multi, { backing: 3, step: 3, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(result.steps, 3);
  closeTo(result.finalCap, 33750.0, 1e-6, 'multi finalCap');
  closeTo(result.totalWealth, 180000.0, 1e-6, 'multi totalWealth');
});

test('self-test: terminal bust after a harvested tranche zeroes active funds', () => {
  const bustAfterHarvest = [
    { t: 't0', r: 3.0, m: 0.0 },
    { t: 't1', r: 0.0, m: -4.0 },
  ];
  const result = replay(bustAfterHarvest, { backing: 3, step: 3, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(result.bust, true);
  closeTo(result.finalActiveFunds, 0.0, 1e-6, 'bust-after-harvest finalActiveFunds');
  closeTo(result.totalWealth, result.withdrawnCash, 1e-6, 'bust-after-harvest totalWealth==withdrawnCash');
});

test('self-test: realized terminal bust zeroes active funds + full drawdown + zero coverage', () => {
  const realizedBust = [{ t: 't0', r: -4.0, m: 0.0 }];
  const result = replay(realizedBust, { backing: 3, step: 3, withdrawRate: 0.0, sourceCap: 10000 });
  assert.equal(result.bust, true);
  closeTo(result.finalActiveFunds, 0.0, 1e-6, 'realized-bust finalActiveFunds');
  closeTo(result.maxTotalWealthDdPct, 100.0, 1e-6, 'realized-bust maxTotalWealthDdPct');
  closeTo(result.minActiveCapCoverage, 0.0, 1e-6, 'realized-bust minActiveCapCoverage');
});

// ---------------------------------------------------------------------------
// Full-line scenarios — ported from cap-withdrawal-report.md (backing=3, step=3,
// source cap $10,000, VELOCE 72k cycles 2023-01-03 -> 2026-06-29, 4,878 cycles)
// ---------------------------------------------------------------------------

async function loadCycles() {
  const raw = await readFile(new URL('../src/data/gdbasket-rolling-cycles.json', import.meta.url), 'utf8');
  const json = JSON.parse(raw);
  return { json, cycles: cyclesFromJson(json) };
}

test('full-line scenario: 0/100 control (ทบหมด)', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.0, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 6);
  closeTo(r.finalCap, 640000.0, TOL, 'control finalCap');
  closeTo(r.totalWealth, 2092388.61, TOL, 'control totalWealth');
  closeTo(r.maxTotalWealthDdPct, 33.34, 0.01, 'control maxTotalWealthDdPct');
});

test('full-line scenario: 50/50 withdrawal', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 6);
  closeTo(r.finalCap, 113906.25, TOL, '50/50 finalCap');
  closeTo(r.finalActiveFunds, 372553.60, TOL, '50/50 finalActiveFunds');
  closeTo(r.withdrawnCash, 311718.75, TOL, '50/50 withdrawnCash');
  closeTo(r.totalWealth, 684272.35, TOL, '50/50 totalWealth');
  closeTo(r.maxTotalWealthDdPct, 25.46, 0.01, '50/50 maxTotalWealthDdPct');
  assert.ok(String(r.paybackDate).startsWith('2025-04-24'), `paybackDate expected 2025-04-24, got ${r.paybackDate}`);
});

test('full-line scenario: 60/40 withdrawal', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.6, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 6);
  closeTo(r.finalCap, 75295.36, TOL, '60/40 finalCap');
  closeTo(r.withdrawnCash, 293829.12, TOL, '60/40 withdrawnCash');
  closeTo(r.totalWealth, 540139.71, TOL, '60/40 totalWealth');
  closeTo(r.maxTotalWealthDdPct, 25.46, 0.01, '60/40 maxTotalWealthDdPct');
});

test('full-line scenario: 70/30 withdrawal', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.7, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 6);
  closeTo(r.finalCap, 48268.09, TOL, '70/30 finalCap');
  closeTo(r.withdrawnCash, 267876.63, TOL, '70/30 withdrawnCash');
  closeTo(r.totalWealth, 425812.21, TOL, '70/30 totalWealth');
  closeTo(r.maxTotalWealthDdPct, 25.46, 0.01, '70/30 maxTotalWealthDdPct');
});

// ---------------------------------------------------------------------------
// Step-sweep rows — ported from cap_withdrawal_step_sweep_summary.csv
// ---------------------------------------------------------------------------

test('step sweep row: step=2.0 withdraw=0.5', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 2.0, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 9);
  closeTo(r.withdrawnCash, 369548.84926078346, TOL, 'step2.0/0.5 withdrawnCash');
  closeTo(r.totalWealth, 803884.9986016259, TOL, 'step2.0/0.5 totalWealth');
  closeTo(r.finalCap, 133182.9497535945, TOL, 'step2.0/0.5 finalCap');
  closeTo(r.finalActiveFunds, 434336.1493408425, TOL, 'step2.0/0.5 finalActiveFunds');
});

test('step sweep row: step=1.5 withdraw=0.6', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 1.5, withdrawRate: 0.6, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 12);
  closeTo(r.withdrawnCash, 356224.52017152, TOL, 'step1.5/0.6 withdrawnCash');
  closeTo(r.totalWealth, 647740.2093234484, TOL, 'step1.5/0.6 totalWealth');
  closeTo(r.finalCap, 89161.00448256002, TOL, 'step1.5/0.6 finalCap');
});

test('step sweep row: step=1.0 withdraw=0.7', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 3, step: 1.0, withdrawRate: 0.7, sourceCap: 10000 });
  assert.equal(r.bust, false);
  assert.equal(r.steps, 18);
  closeTo(r.withdrawnCash, 319194.21194445627, TOL, 'step1.0/0.7 withdrawnCash');
  closeTo(r.totalWealth, 500899.01466340246, TOL, 'step1.0/0.7 totalWealth');
  closeTo(r.finalCap, 55599.173134922334, TOL, 'step1.0/0.7 finalCap');
});

// ---------------------------------------------------------------------------
// Sanity bootstrap — resampled band must cover the real replay outcome
// ---------------------------------------------------------------------------

test('sanity bootstrap: p10-p90 band covers the real 3.5y replay outcome (0% withdraw)', async () => {
  const { cycles } = await loadCycles();
  const real = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.0, sourceCap: 10000 });
  const state = {
    cap: 10000,
    surplus: 0,
    withdrawn: 0,
    backing: 3,
    step: 3,
    withdrawRate: 0.0,
    initialActive: 3 * 10000,
  };
  const months = 42; // ~3.485 years of monthly blocks, matching the real span
  const result = bootstrap(cycles, state, months, 1000, 20260723);
  assert.equal(result.bustedCount, 0, 'no busted paths expected at 0% withdraw over the real span');
  assert.ok(result.p10 <= real.totalWealth, `p10 (${result.p10}) should be <= real outcome (${real.totalWealth})`);
  assert.ok(result.p90 >= real.totalWealth, `p90 (${result.p90}) should be >= real outcome (${real.totalWealth})`);
});

// ---------------------------------------------------------------------------
// Default 2x backing reference (owner-locked default) — see phase1 report
// ---------------------------------------------------------------------------

test('default 2x backing reference: capital 10000 / step 3 / withdraw 50% survives', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 2, step: 3, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(r.bust, false, '2x backing default must survive the full 3.5y span');
});

// ---------------------------------------------------------------------------
// Active-funds-only drawdown (owner-requested headline risk metric, 2026-07-23)
// max_active_funds_dd_pct = peak-to-trough of active funds alone (backing*cap +
// surplus), never padded by withdrawn cash on either side — unlike
// maxTotalWealthDdPct which adds withdrawn to both peak and trough and therefore
// understates how red the live account actually went.
// ---------------------------------------------------------------------------

test('active-funds DD: default 2x backing reference computes and is sane (>= total-wealth DD)', async () => {
  const { cycles } = await loadCycles();
  const r = replay(cycles, { backing: 2, step: 3, withdrawRate: 0.5, sourceCap: 10000 });
  assert.equal(r.bust, false);
  closeTo(r.maxActiveFundsDdPct, 61.25, 0.1, 'default 2x maxActiveFundsDdPct');
  assert.ok(
    r.maxActiveFundsDdPct >= r.maxTotalWealthDdPct,
    `active-funds DD (${r.maxActiveFundsDdPct}) should be >= total-wealth DD (${r.maxTotalWealthDdPct}) — withdrawn cash pads total-wealth DD but not active-funds DD`,
  );
});

// ---------------------------------------------------------------------------
// monthlySeries — chart-feed variant of replay(); must land on the exact same
// final numbers as replay() since it walks the same advance() state machine,
// just paused every calendar month to snapshot (refactor sanity check).
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// capCeiling clamp (2026-07-23, web-only broker lot ceiling) — undefined by
// default (python-parity, all tests above must stay green unmodified). When
// set, cap freezes at the ceiling instead of compounding past the broker's
// max order size. sourceCap=50000 (5x the usual 10000) scales the whole
// linear ledger 5x, so the 0/100 control's usual finalCap (640,000) becomes
// 3,200,000 — comfortably past the 1,250,000 ceiling, giving a real clamp
// case without needing new cycle data.
// ---------------------------------------------------------------------------

test('capCeiling clamp: aggressive 5x-scale control clamps finalCap to ceiling (off by default)', async () => {
  const { cycles } = await loadCycles();

  const unclamped = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.0, sourceCap: 50000 });
  assert.equal(unclamped.bust, false);
  assert.equal(unclamped.capClamped, false, 'capClamped must be false when capCeiling is not passed');
  closeTo(unclamped.finalCap, 3200000, TOL, 'unclamped 5x control finalCap (5x the usual 640,000)');

  const clamped = replay(cycles, { backing: 3, step: 3, withdrawRate: 0.0, sourceCap: 50000, capCeiling: 1250000 });
  assert.equal(clamped.bust, false);
  assert.equal(clamped.capClamped, true, 'capClamped must be true once cap crosses the ceiling');
  assert.ok(clamped.finalCap <= 1250000 + 1e-6, `finalCap (${clamped.finalCap}) must not exceed capCeiling`);
});

// ---------------------------------------------------------------------------
// Projection table metrics (2026-07-23 redesign) — bootstrap() must return
// success/steps/withdrawn/active percentile breakdowns, all monotonic
// p10 <= p50 <= p90, with steps.p50 > 0 at the owner-locked default (2x
// backing / step 3x / withdraw 50% / 1-year horizon).
// ---------------------------------------------------------------------------

test('bootstrap projection metrics: success/steps/withdrawn/active are monotonic and sane at default 2x, 1y horizon', async () => {
  const { cycles } = await loadCycles();
  const state = {
    cap: 10000,
    surplus: 0,
    withdrawn: 0,
    backing: 2,
    step: 3,
    withdrawRate: 0.5,
    initialActive: 2 * 10000,
  };
  const result = bootstrap(cycles, state, 12, 1000, 20260723);

  for (const key of ['success', 'steps', 'withdrawn', 'active']) {
    assert.ok(result[key], `bootstrap result missing ${key}`);
    const { p10, p50, p90 } = result[key];
    assert.ok(p10 <= p50, `${key}.p10 (${p10}) should be <= p50 (${p50})`);
    assert.ok(p50 <= p90, `${key}.p50 (${p50}) should be <= p90 (${p90})`);
  }
  assert.ok(result.steps.p50 > 0, `steps.p50 expected > 0 at default 2x/1y, got ${result.steps.p50}`);
});

test('monthlySeries: final summary matches replay() exactly at default 2x', async () => {
  const { cycles } = await loadCycles();
  const params = { backing: 2, step: 3, withdrawRate: 0.5, sourceCap: 10000 };
  const r = replay(cycles, params);
  const { months, summary } = monthlySeries(cycles, params);
  closeTo(summary.totalWealth, r.totalWealth, 1e-6, 'monthlySeries totalWealth vs replay');
  closeTo(summary.withdrawnCash, r.withdrawnCash, 1e-6, 'monthlySeries withdrawnCash vs replay');
  closeTo(summary.maxActiveFundsDdPct, r.maxActiveFundsDdPct, 1e-6, 'monthlySeries maxActiveFundsDdPct vs replay');
  assert.equal(summary.bust, r.bust);
  assert.ok(months.length >= 34 && months.length <= 38, `expected ~36 monthly points (2023-01..2026-06), got ${months.length}`);
  assert.ok(months.at(-1).withdrawnCumulative >= 0, 'withdrawn cumulative never negative');
  // withdrawn cash is monotonic non-decreasing month over month
  for (let i = 1; i < months.length; i++) {
    assert.ok(months[i].withdrawnCumulative >= months[i - 1].withdrawnCumulative - 1e-6, `withdrawn dropped at month ${i}`);
  }
});
