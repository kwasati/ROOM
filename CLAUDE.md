# Room

ฮับคอร์ส + EA ใต้แบรนด์ IntensiveTrader — `room.intensivetrader.com` (ภาษาไทย)

## Stack
Astro 6 + MDX + Tailwind 4 · static output -> Vercel (repo แยก `kwasati/ROOM`, submodule ที่ `projects\7-ROOM`)

## Layout
- `src\pages\index.astro` — home hub (โซนปักหมุด + ทั้งหมด + filter)
- `src\pages\ea\gdbasket.astro` — หน้า EA สไตล์ github-repo (hardcode 10 รุ่น publish: v3.21..v1.18, รุ่นล่าสุด v3.21)
- `src\pages\ea\gdbasket\rolling-capital.astro` — Rolling Capital Planner (คิดสดในเบราว์เซอร์)
- `src\data\ea.ts` — รายการ EA แบบ hardcoded array (ไม่ใช่ content collection)
- `src\content\courses\` + `src\content\lessons\` — คอร์สเป็น MDX collection
- `src\lib\rolling-sim.mjs` + `rolling-chart.mjs` — engine ของ planner
- `src\data\gdbasket-rolling-cycles.json` — data ของ planner (export จาก EAfactory)

## Commands
- dev `npm run dev` / build `npm run build` / preview `npm run preview`
- test `npm run test:links` · `npm run test:links:built`
- test planner `node --test tests\rolling-sim.test.mjs`

## Rules
- คอร์สว่าง -> build warning "collection empty" เป็นปกติ ไม่ใช่ error
- ปุ่มโหลดใช้ค่า `DL_LATEST` ร่วมกับหน้าแม่เสมอ **ห้าม hardcode เวอร์ชัน**
- refresh data ของ planner แล้วต้องรัน `node --test tests\rolling-sim.test.mjs` ใหม่ และอัปเดตเฉลยในเทสตาม baseline ใหม่
- หน้า public พูดถึงเครื่องยนต์ VELOCE ตัวเดียว

## Read first
- `CHANGELOG.md`
- `docs\` — สเปกหน้าและ copy
