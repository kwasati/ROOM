# Room

ฮับรวม บทเรียน / EA / Signal / เครื่องมือ ใต้แบรนด์ IntensiveTrader — `room.intensivetrader.com` (ภาษาไทย)

## Commands
- dev `npm run dev` / build `npm run build` / preview `npm run preview`
- build บนเครื่อง Windows: Node 24 ปิดตัวพัง exit 127 หลัง "Complete!" (บั๊ก Node ไม่ใช่โค้ด) → `npx -y -p node@22 node node_modules\astro\bin\astro.mjs build`
- test `npm run test:links` · `npm run test:links:built`

## Rules
- คอร์สว่าง -> build warning "collection empty" เป็นปกติ ไม่ใช่ error
- ปุ่มโหลดใช้ค่า `DL_LATEST` ร่วมกับหน้าแม่เสมอ **ห้าม hardcode เวอร์ชัน**
- หน้า public พูดถึงเครื่องยนต์ VELOCE ตัวเดียว

## → ลูก
- `src\pages\index.astro` — home hub — grid เดียว 4 หมวด บทเรียน / EA / Signal / เครื่องมือ + filter (`?filter=ea|tool`) · ปักหมุดจาก admin เรียงใน grid
- `src\pages\ea\gdbasket.astro` — หน้า EA สไตล์ github-repo (hardcode 12 รุ่น publish: v4.10..v1.18, รุ่นล่าสุด v4.10)
- `src\data\ea.ts` — รายการ EA แบบ hardcoded array (ไม่ใช่ content collection)
- `src\content\courses\` + `src\content\lessons\` — คอร์สเป็น MDX collection
- `src\data\tools.ts` — รายการเครื่องมือ (AGENTQ ลิงก์ออก agentq.intensivetrader.com)
- `src\pages\ea\gdbasket\changelog.astro` — changelog route ของ gdBasket (hardcode · แก้ทุก release)
- `src\pages\items.json.ts` — list item ทั้งหมดของ room ให้ admin เว็บหลักทำ pin manager
- `CHANGELOG.md`
- `_archive\2026-10\` — แผน / mockup / design direction ที่ปิดแล้ว อ่านย้อนรอยเท่านั้น
- `C:\WORKSPACE\projects\1-intensivetrader.com\ROADMAP.md` — SSOT สถานะ/คิวของ intensivetrader ทั้ง 3 ระบบ (เปิดเมื่อวางแผน/ต่องาน)
- `C:\WORKSPACE\projects\2-EAfactory\ea\gdBasket\publish\web\RELEASE-RUNBOOK.md` — ขั้น release gdBasket ขึ้น room (STEP B · deploy branch master)
