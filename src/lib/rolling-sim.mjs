// gdBasket Rolling Capital Planner — cap-first withdrawal engine.
//
// Ported line-for-line from:
//   projects/2-EAfactory/ea/gdBasket/research/cap-withdrawal-sim/cap_withdrawal_sim.py
//   function replay() (lines 163-298) + self_test() (lines 301-334)
//
// State = cap C / surplus S / withdrawn cash V. Active funds = backing*C + S.
// Cap is never derived from active funds or balance — see cap_withdrawal_sim.py
// docstring. Every cycle: scale MAE and check bust BEFORE booking realized P/L
// (matches Python ordering exactly), then book P/L, then check bust again,
// then loop the upgrade ("tranche") step while surplus >= step*cap.
//
// Cycle shape expected by both replay() and bootstrap(): { t, r, m }
//   t = cycle end-time (opaque label — ISO string works, only carried through
//       to event/bust timestamps, never used in the math)
//   r = ret (profit / effective balance before)
//   m = mae_ratio (mae_cycle_usd / effective balance before)

const EPSILON = 1e-8;

function wealthDrawdown(peak, trough) {
  if (peak <= 0) return 0;
  return Math.max(0, ((peak - trough) / peak) * 100);
}

/**
 * Mutates `state` in place, walking every cycle in `cycles` through the
 * cap-first ledger. Shared by replay() (full run, tracks everything) and
 * bootstrap() (continuation runs, can skip event/stat tracking for speed).
 */
function advance(cycles, state, params, opts = {}) {
  const { backing, step, withdrawRate } = params;
  const collectEvents = opts.collectEvents !== false;
  const trackStats = opts.trackStats !== false;

  for (const cycle of cycles) {
    if (state.bust) break;

    const activeBefore = backing * state.cap + state.surplus;
    const scaledMae = cycle.m * state.cap;
    const troughActive = activeBefore + scaledMae;

    if (trackStats) {
      state.minCoverage = Math.min(state.minCoverage, troughActive / state.cap);
      state.maxDd = Math.max(
        state.maxDd,
        wealthDrawdown(state.peakWealth, Math.max(0, troughActive) + state.withdrawn),
      );
      // Active-funds-only DD — same intra-cycle MAE trough as maxDd above, but
      // never adds withdrawn cash to either side (peak or trough). This is the
      // "how red did the live account actually go" metric — total-wealth DD
      // hides real pain because withdrawn cash pads both peak and trough.
      state.maxActiveDd = Math.max(
        state.maxActiveDd,
        wealthDrawdown(state.peakActive, Math.max(0, troughActive)),
      );
    }

    // MAE-bust check happens BEFORE booking this cycle's realized P/L —
    // matches cap_withdrawal_sim.py lines 202-213 exactly.
    if (troughActive <= 0) {
      state.bust = true;
      state.bustTime = cycle.t;
      state.surplus = -backing * state.cap;
      break;
    }

    const scaledPnl = cycle.r * state.cap;
    state.surplus += scaledPnl;
    state.processedCycles += 1;

    const activeNow = backing * state.cap + state.surplus;
    if (activeNow <= 0) {
      state.bust = true;
      state.bustTime = cycle.t;
      if (trackStats) {
        state.minCoverage = Math.min(state.minCoverage, 0);
        state.maxDd = Math.max(state.maxDd, wealthDrawdown(state.peakWealth, state.withdrawn));
        state.maxActiveDd = Math.max(state.maxActiveDd, wealthDrawdown(state.peakActive, 0));
      }
      state.surplus = -backing * state.cap;
      break;
    }

    if (trackStats) {
      const settledWealth = activeNow + state.withdrawn;
      state.peakWealth = Math.max(state.peakWealth, settledWealth);
      state.maxDd = Math.max(state.maxDd, wealthDrawdown(state.peakWealth, settledWealth));
      state.peakActive = Math.max(state.peakActive, activeNow);
      state.maxActiveDd = Math.max(state.maxActiveDd, wealthDrawdown(state.peakActive, activeNow));
      state.minCoverage = Math.min(state.minCoverage, activeNow / state.cap);
    }

    // Upgrade loop: every iteration consumes exactly one old-cap tranche;
    // overshoot stays in surplus and may fund another step (multi-step cycle).
    while (state.surplus + EPSILON >= step * state.cap) {
      const capBefore = state.cap;
      const surplusBefore = state.surplus;
      const tranche = step * capBefore;
      const withdrawal = withdrawRate * tranche;
      state.cap += ((1 - withdrawRate) * tranche) / backing;
      state.surplus -= tranche;
      if (Math.abs(state.surplus) < EPSILON) state.surplus = 0;
      state.withdrawn += withdrawal;

      const activeAfter = backing * state.cap + state.surplus;
      const totalWealth = activeAfter + state.withdrawn;

      if (trackStats) {
        state.peakWealth = Math.max(state.peakWealth, totalWealth);
        state.peakActive = Math.max(state.peakActive, activeAfter);
        state.maxActiveDd = Math.max(state.maxActiveDd, wealthDrawdown(state.peakActive, activeAfter));
        state.minCoverage = Math.min(state.minCoverage, activeAfter / state.cap);
      }

      if (collectEvents) {
        state.events.push({
          cycleTime: cycle.t,
          eventNumber: state.events.length + 1,
          tranche,
          withdrawal,
          capBefore,
          capAfter: state.cap,
          surplusBefore,
          surplusAfter: state.surplus,
          activeFundsAfter: activeAfter,
          withdrawnCumulative: state.withdrawn,
          totalWealthAfter: totalWealth,
        });
      }

      if (state.paybackTime === null && state.withdrawn + EPSILON >= state.initialActive) {
        state.paybackTime = cycle.t;
      }
    }
  }

  return state;
}

function initState(sourceCap, backing) {
  const initialActive = backing * sourceCap;
  return {
    cap: sourceCap,
    surplus: 0,
    withdrawn: 0,
    bust: false,
    bustTime: null,
    events: [],
    paybackTime: null,
    processedCycles: 0,
    peakWealth: initialActive,
    maxDd: 0,
    peakActive: initialActive,
    maxActiveDd: 0,
    minCoverage: initialActive / sourceCap,
    initialActive,
  };
}

/** Build the replay()-shaped result object from a state that has already
 * been walked through advance() — shared by replay() and monthlySeries()
 * so the two never disagree on what "final" looks like. */
function summarize(state, { backing, step, withdrawRate, sourceCap }) {
  const finalActive = backing * state.cap + state.surplus;
  const totalWealth = finalActive + state.withdrawn;

  return {
    backing,
    step,
    withdrawRate,
    sourceCap,
    initialActiveFunds: state.initialActive,
    finalCap: state.cap,
    // Cap only ever grows inside advance()'s upgrade loop (state.cap += ...),
    // never shrinks — so the peak cap reached during the whole run is always
    // the final cap. Exposed as its own field (rather than reusing finalCap)
    // so callers that only care about "how big did a single grid leg get"
    // (e.g. the max-lot guard on the web page) read intent, not a coincidence.
    peakCap: state.cap,
    finalSurplus: state.surplus,
    finalActiveFunds: finalActive,
    withdrawnCash: state.withdrawn,
    totalWealth,
    steps: state.events.length,
    paybackDate: state.paybackTime,
    maxTotalWealthDdPct: state.maxDd,
    maxActiveFundsDdPct: state.maxActiveDd,
    minActiveCapCoverage: state.minCoverage,
    bust: state.bust,
    bustTime: state.bustTime,
    processedCycles: state.processedCycles,
    events: state.events,
  };
}

/** Group cycles into calendar-month blocks, preserving chronological order
 * (relies on `cycles` already being sorted — matches export_web_cycles.py). */
function groupByMonth(cycles) {
  const blockMap = new Map();
  for (const c of cycles) {
    const key = String(c.t).slice(0, 7); // "YYYY-MM"
    if (!blockMap.has(key)) blockMap.set(key, []);
    blockMap.get(key).push(c);
  }
  return blockMap;
}

/**
 * Replay one one-life cap-first ledger across the full cycle history.
 * Cap is never derived from funds. Mirrors cap_withdrawal_sim.py replay().
 *
 * @param {Array<{t:*, r:number, m:number}>} cycles
 * @param {{backing?:number, step?:number, withdrawRate:number, sourceCap?:number}} params
 */
export function replay(cycles, { backing = 3, step = 3, withdrawRate, sourceCap = 10000 } = {}) {
  if (!cycles || cycles.length === 0) throw new Error('cannot replay zero cycles');
  if (withdrawRate === undefined) throw new Error('withdrawRate is required');

  const state = initState(sourceCap, backing);
  advance(cycles, state, { backing, step, withdrawRate }, { collectEvents: true, trackStats: true });

  return summarize(state, { backing, step, withdrawRate, sourceCap });
}

/**
 * Same cap-first ledger as replay(), but walked one calendar-month block at a
 * time so callers get a monthly time series (active funds / withdrawn cash /
 * total wealth) for charting — the final numbers are identical to replay()
 * because it's the exact same advance() state machine, just paused every
 * month to take a snapshot. Never used for the headline numbers themselves
 * (those come from replay()) — only for drawing the historical chart.
 *
 * @param {Array<{t:*, r:number, m:number}>} cycles
 * @param {{backing?:number, step?:number, withdrawRate:number, sourceCap?:number}} params
 */
export function monthlySeries(cycles, { backing = 3, step = 3, withdrawRate, sourceCap = 10000 } = {}) {
  if (!cycles || cycles.length === 0) throw new Error('cannot replay zero cycles');
  if (withdrawRate === undefined) throw new Error('withdrawRate is required');

  const state = initState(sourceCap, backing);
  const params = { backing, step, withdrawRate };
  const blocks = Array.from(groupByMonth(cycles).entries());

  const months = [];
  let eventsSoFar = 0;
  for (const [key, block] of blocks) {
    if (state.bust) break;
    advance(block, state, params, { collectEvents: true, trackStats: true });
    const activeFunds = Math.max(0, backing * state.cap + state.surplus);
    months.push({
      key,
      activeFunds,
      withdrawnCumulative: state.withdrawn,
      totalWealth: activeFunds + state.withdrawn,
      upgradesInMonth: state.events.length - eventsSoFar,
      bust: state.bust,
    });
    eventsSoFar = state.events.length;
  }

  return { months, summary: summarize(state, { backing, step, withdrawRate, sourceCap }) };
}

// Deterministic PRNG (mulberry32) — same seed = same sequence, every browser,
// every reload. Required so the public projection page never shows a
// different number to two visitors (or the same visitor twice).
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function percentile(sortedAsc, p) {
  if (sortedAsc.length === 0) return NaN;
  if (sortedAsc.length === 1) return sortedAsc[0];
  const idx = (p / 100) * (sortedAsc.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sortedAsc[lo];
  const frac = idx - lo;
  return sortedAsc[lo] + (sortedAsc[hi] - sortedAsc[lo]) * frac;
}

/**
 * Block bootstrap projection — resample whole calendar months (with
 * replacement) to build `paths` synthetic futures of `months` length,
 * continuing the ledger from `state` (current cap/surplus/withdrawn +
 * backing/step/withdrawRate). Returns wealth percentiles + bust count.
 *
 * Monthly blocks (not per-cycle resampling) preserve the "bad days cluster
 * together" shape of real drawdowns — per-cycle shuffling would smear a
 * violent down-day across many synthetic months and understate risk.
 *
 * @param {Array<{t:*, r:number, m:number}>} cycles
 * @param {{cap:number, surplus:number, withdrawn:number, backing:number, step:number, withdrawRate:number, initialActive?:number}} state
 * @param {number} months
 * @param {number} paths
 * @param {number} seed
 */
export function bootstrap(cycles, state, months, paths, seed) {
  if (!cycles || cycles.length === 0) throw new Error('bootstrap needs at least one cycle');
  if (months <= 0) throw new Error('months must be > 0');
  if (paths <= 0) throw new Error('paths must be > 0');

  const blocks = Array.from(groupByMonth(cycles).values());
  if (blocks.length === 0) throw new Error('bootstrap needs at least one monthly block');

  const { backing, step, withdrawRate } = state;
  const rng = mulberry32(seed);
  const wealths = new Array(paths);
  let bustedCount = 0;

  for (let p = 0; p < paths; p++) {
    const pathState = {
      cap: state.cap,
      surplus: state.surplus,
      withdrawn: state.withdrawn,
      bust: false,
      bustTime: null,
      events: [],
      paybackTime: null,
      processedCycles: 0,
      peakWealth: 0,
      maxDd: 0,
      peakActive: 0,
      maxActiveDd: 0,
      minCoverage: 0,
      initialActive: state.initialActive ?? backing * state.cap,
    };

    for (let m = 0; m < months; m++) {
      if (pathState.bust) break;
      const idx = Math.floor(rng() * blocks.length);
      const block = blocks[idx];
      advance(block, pathState, { backing, step, withdrawRate }, { collectEvents: false, trackStats: false });
    }

    const finalActive = backing * pathState.cap + pathState.surplus;
    wealths[p] = finalActive + pathState.withdrawn;
    if (pathState.bust) bustedCount++;
  }

  wealths.sort((a, b) => a - b);

  return {
    paths,
    months,
    bustedCount,
    p10: percentile(wealths, 10),
    p25: percentile(wealths, 25),
    p50: percentile(wealths, 50),
    p75: percentile(wealths, 75),
    p90: percentile(wealths, 90),
    wealths,
  };
}

/** Convert the exported columnar JSON ({t:[],r:[],m:[]}) into the
 * array-of-objects shape replay()/bootstrap() expect. */
export function cyclesFromJson(json) {
  const { t, r, m } = json;
  const out = new Array(t.length);
  for (let i = 0; i < t.length; i++) out[i] = { t: t[i], r: r[i], m: m[i] };
  return out;
}
