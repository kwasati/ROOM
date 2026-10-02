# Room

room.intensivetrader.com (ภาษาไทย) — ฮับ EA + บทเรียนของแบรนด์ IntensiveTrader · repo `kwasati/ROOM` · branch `master` = production

## WHY
- ที่รวม EA ของ IntensiveTrader: การ์ดใน home hub (`src\data\ea.ts`) ชี้ไปหน้ารายละเอียดของแต่ละ EA
- ตัวหลักตอนนี้คือ gdBasket: หน้า landing สไตล์ github-repo + changelog + รายการ releases + ปุ่มโหลด + Rolling Capital Planner (คิดสดในเบราว์เซอร์)
- มีโครงคอร์ส/บทเรียน (MDX) รองรับ แต่ตอนนี้ `src\content\courses\` และ `src\content\lessons\forex-basics\` ว่าง (build เตือน "collection empty" เป็นปกติ)

## HOW
- Astro 6 static (`output: 'static'`) + MDX + Tailwind 4 + sitemap · Node >=22.12
- login/session เป็นของเว็บหลัก `..\mainweb` — Navbar เรียก `https://www.intensivetrader.com/api/auth/session` แสดงสถานะ (room ไม่เก็บ auth เอง) · ลิงก์ไป Trading Journal `..\journal`
- ปุ่มดาวน์โหลดชี้ `https://intensivetrader.com/d/gdbasket` (redirect ไปไฟล์รุ่นล่าสุด) และ `/d/gdbasket-vXYZ` ของรุ่นเก่า — ค่า `DL_LATEST` ใน `src\pages\ea\gdbasket.astro`
- data ของ planner (`src\data\gdbasket-rolling-cycles.json`) export มาจาก EAfactory
- deploy = push `master` → Vercel build เอง · release gdBasket ใหม่ทำตาม `C:\WORKSPACE\projects\2-EAfactory\ea\gdBasket\publish\web\RELEASE-RUNBOOK.md` STEP B

## WHAT
| ที่ | คืออะไร |
|---|---|
| `src\pages\index.astro` | home hub (ปักหมุด + ทั้งหมด + filter) |
| `src\pages\ea\gdbasket.astro` | หน้า EA gdBasket (hardcode รุ่น publish) |
| `src\pages\ea\gdbasket\changelog.astro` | changelog gdBasket |
| `src\pages\ea\gdbasket\rolling-capital.astro` | Rolling Capital Planner |
| `src\pages\[slug].astro` · `[slug]\[lesson].astro` | หน้าคอร์ส / บทเรียน (จาก content collection) |
| `src\pages\items.json.ts` | list item ทั้งหมดให้ admin เว็บหลักทำ pin manager |
| `src\data\` | `ea.ts` (รายการ EA) · `gdbasket-rolling-cycles.json` (data planner) |
| `src\lib\` | `rolling-sim.mjs` + `rolling-chart.mjs` (engine planner) · `sessionRefresh.ts` (refresh session ของ Navbar) |
| `src\components\` `src\layouts\` `src\styles\` | UI ร่วม (Navbar, TopBar, CourseCard, LessonNav, BrokerCTA, Layout) |
| `tests\` | `link-cutover.test.mjs` + `link-cutover-built.test.mjs` (ลิงก์ข้ามเว็บ) · `rolling-sim.test.mjs` (เฉลย planner) · `unified-session.test.mjs` (session ของ Navbar) |
| `public\` | favicon · รูป gdBasket · `gdbasket-data.js` |
| `_archive\2026-10\` | แผน / mockup ที่ปิดแล้ว |

## ที่เกี่ยวข้อง
- repo พี่น้อง: `..\mainweb` (เว็บหลัก + auth + /d/ download) · `..\journal`
- ROADMAP ของทั้ง 3 ระบบ: `C:\WORKSPACE\projects\1-intensivetrader.com\ROADMAP.md`
- กฎ/คำสั่ง: `CLAUDE.md` · ประวัติงาน: `CHANGELOG.md`
