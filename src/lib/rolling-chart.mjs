// Pure SVG-geometry helpers for the gdBasket Rolling Capital Planner charts.
//
// No DOM access anywhere in this file — safe to import from both the Astro
// page's frontmatter (Node, build-time SSR paint) and its client
// <script type="module"> (browser, re-render on every input change). Kept
// deliberately separate from rolling-sim.mjs so the simulation math (locked
// behind test vectors matching cap_withdrawal_sim.py) never has to know
// anything about pixels or viewBox coordinates.

const WIDTH = 600;
const HEIGHT = 200;
const PAD_TOP = 6;
const PAD_BOTTOM = 4;

/**
 * Monotonic sqrt scale — compresses the top of a fast-compounding series so
 * early history stays visible next to the later blow-up, while keeping
 * value ordering intact (v1 > v2 always maps to y1 < y2). Domain always
 * starts at 0 (money in this ledger never goes negative on-screen).
 */
function sqrtY(value, maxValue) {
  if (maxValue <= 0) return HEIGHT - PAD_BOTTOM;
  const t = Math.sqrt(Math.max(0, value)) / Math.sqrt(maxValue);
  const clamped = Math.min(1, Math.max(0, t));
  return HEIGHT - PAD_BOTTOM - clamped * (HEIGHT - PAD_TOP - PAD_BOTTOM);
}

/**
 * Build the two-layer historical area chart: active funds (bottom fill) +
 * withdrawn cash stacked on top, total-wealth boundary on top of that, plus
 * marker points on every month an upgrade ("ขึ้นชั้น") happened.
 *
 * @param {Array<{activeFunds:number, withdrawnCumulative:number, totalWealth:number, upgradesInMonth:number}>} months
 *   from rolling-sim.mjs monthlySeries().months
 */
export function historicalChartGeometry(months) {
  if (!months || months.length === 0) {
    return { activeAreaPoints: '', withdrawnAreaPoints: '', totalLinePoints: '', markers: [], width: WIDTH, height: HEIGHT };
  }
  const n = months.length;
  const maxTotal = Math.max(...months.map((m) => m.totalWealth), 1);
  const xAt = (i) => (n === 1 ? 0 : (i / (n - 1)) * WIDTH);

  const activeY = months.map((m, i) => [xAt(i), sqrtY(m.activeFunds, maxTotal)]);
  const totalY = months.map((m, i) => [xAt(i), sqrtY(m.totalWealth, maxTotal)]);
  const fmt = (pt) => `${pt[0].toFixed(1)},${pt[1].toFixed(1)}`;
  const bottom = (HEIGHT - PAD_BOTTOM).toFixed(1);

  const activeAreaPoints = [`${xAt(0).toFixed(1)},${bottom}`, ...activeY.map(fmt), `${xAt(n - 1).toFixed(1)},${bottom}`].join(' ');
  const withdrawnAreaPoints = [...activeY.map(fmt), ...[...totalY].reverse().map(fmt)].join(' ');
  const totalLinePoints = totalY.map(fmt).join(' ');

  const markers = months
    .map((m, i) => ({ x: xAt(i), y: sqrtY(m.totalWealth, maxTotal), count: m.upgradesInMonth, key: m.key }))
    .filter((m) => m.count > 0);

  return { activeAreaPoints, withdrawnAreaPoints, totalLinePoints, markers, width: WIDTH, height: HEIGHT };
}

/**
 * Build the projection fan chart (p10-p90 outer band, p25-p75 inner band,
 * p50 mid line) fanning out from today's wealth (month 0, a single point —
 * no spread yet) to the chosen horizon.
 *
 * @param {Array<{months:number, p10:number, p25:number, p50:number, p75:number, p90:number}>} samples
 *   ascending by `months`, first entry must be `months: 0` with all
 *   percentiles equal to today's wealth (bootstrap() can't run 0 months).
 */
export function fanChartGeometry(samples) {
  if (!samples || samples.length === 0) {
    return { outerPoints: '', innerPoints: '', midPoints: '', width: WIDTH, height: HEIGHT };
  }
  const horizon = samples[samples.length - 1].months || 1;
  const maxVal = Math.max(...samples.map((s) => s.p90), 1);
  const xAt = (s) => (s.months / horizon) * WIDTH;
  const fmt = (pt) => `${pt[0].toFixed(1)},${pt[1].toFixed(1)}`;

  const p10 = samples.map((s) => [xAt(s), sqrtY(s.p10, maxVal)]);
  const p25 = samples.map((s) => [xAt(s), sqrtY(s.p25, maxVal)]);
  const p50 = samples.map((s) => [xAt(s), sqrtY(s.p50, maxVal)]);
  const p75 = samples.map((s) => [xAt(s), sqrtY(s.p75, maxVal)]);
  const p90 = samples.map((s) => [xAt(s), sqrtY(s.p90, maxVal)]);

  const outerPoints = [...p90.map(fmt), ...[...p10].reverse().map(fmt)].join(' ');
  const innerPoints = [...p75.map(fmt), ...[...p25].reverse().map(fmt)].join(' ');
  const midPoints = p50.map(fmt).join(' ');

  return { outerPoints, innerPoints, midPoints, width: WIDTH, height: HEIGHT };
}

/**
 * Build the `samples` array fanChartGeometry() expects, by calling
 * bootstrap() at 5 fractions of the chosen horizon (0/4, 1/4, 2/4, 3/4, 4/4).
 * month 0 is today (single point, current wealth, no bootstrap call).
 *
 * @param {(cycles: any, state: any, months: number, paths: number, seed: number) => any} bootstrapFn
 *   pass rolling-sim.mjs's bootstrap() in — kept as a parameter so this file
 *   never has to import the engine module itself.
 */
export function buildFanSamples(bootstrapFn, cycles, state, horizonMonths, todayWealth, paths, seed) {
  const fracs = [0, 0.25, 0.5, 0.75, 1];
  const monthsSeen = new Set();
  const samples = [];
  // "Today" point (month 0) hasn't run any future cycles yet, so the four
  // extra metrics start at their present-day values (zero cycles booked, but
  // withdrawn/active carry whatever the historical replay already produced)
  // — matches the projection table's "อีก X ได้อะไรบ้าง" definition.
  const todayActive = state.backing * state.cap + state.surplus;
  const todayWithdrawn = state.withdrawn;
  // Today's clamp status (cap already at/over the ceiling from the historical
  // replay, before any future cycle runs) — derived here since buildFanSamples
  // only gets the raw ledger state, not rolling-sim.mjs's summarize() output.
  const todayClamped = state.capCeiling !== undefined && state.cap >= state.capCeiling;
  for (const f of fracs) {
    const m = f === 0 ? 0 : Math.max(1, Math.round(horizonMonths * f));
    if (monthsSeen.has(m)) continue;
    monthsSeen.add(m);
    if (m === 0) {
      samples.push({
        months: 0,
        p10: todayWealth, p25: todayWealth, p50: todayWealth, p75: todayWealth, p90: todayWealth,
        success: { p10: 0, p50: 0, p90: 0 },
        steps: { p10: 0, p50: 0, p90: 0 },
        withdrawn: { p10: todayWithdrawn, p50: todayWithdrawn, p90: todayWithdrawn },
        active: { p10: todayActive, p50: todayActive, p90: todayActive },
        clampedFraction: todayClamped ? 1 : 0,
      });
    } else {
      const bs = bootstrapFn(cycles, state, m, paths, seed);
      samples.push({
        months: m, p10: bs.p10, p25: bs.p25, p50: bs.p50, p75: bs.p75, p90: bs.p90,
        bustedCount: bs.bustedCount, paths: bs.paths,
        success: bs.success, steps: bs.steps, withdrawn: bs.withdrawn, active: bs.active,
        clampedFraction: bs.clampedFraction,
      });
    }
  }
  return samples;
}
