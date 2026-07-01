# Room — Claude Instructions

## Architecture
Unified hub (คอร์ส + EA) under IntensiveTrader brand — `room.intensivetrader.com` (Thai language). ตั้งแต่ 2026-07-01 EA ทั้งหมดย้ายมาอยู่ room (เว็บหลักไม่มีหน้า /ea แล้ว)

- **Stack:** Astro 6 + MDX + Tailwind CSS 4, static output
- **Content:**
  - Courses = MDX Astro Content Collections (glob loader): `src/content/courses/*.mdx` (title, description, courseType, tags, order, **pinned, pinOrder**) + `src/content/lessons/{course-slug}/*.mdx` (title, course, order, videoId, duration). Course types: `learn` / `learn-tool`
  - EA = **hardcoded array `eaItems` ใน `src/pages/index.astro`** (ไม่ใช่ collection — มี gdBasket ตัวเดียว). แต่ละ EA มีหน้า detail แยกเอง
- **Pages:**
  - `src/pages/index.astro` — home hub: รวม course + EA เป็น list เดียว, โซน **ปักหมุด** (pinned เรียง pinOrder) + โซนทั้งหมด, filter ทั้งหมด/คอร์สเรียน/EA, อ่าน `?filter=ea` auto-กดปุ่ม, inline lesson toggle สำหรับ course
  - `src/pages/ea/gdbasket.astro` — gdBasket detail สไตล์ **github-repo** (repo header + toolbar + file list + README + sidebar About/Releases/Languages). ปุ่มโหลด absolute -> `intensivetrader.com/d/gdbasket` (ตัวนับยอดเว็บหลัก)
  - `src/pages/[slug].astro` — course detail (multi-lesson; single-lesson redirect home)
  - `src/pages/[slug]/[lesson].astro` — lesson page
- **Components:** `src/components/` — **Navbar** (โคลนเว็บหลัก glass-dark: หน้าแรก/Room/Trading Journal + login, cross-subdomain absolute URL), BrokerCTA, CourseCard, LessonNav. (`TopBar.astro` = legacy เลิกใช้ ยังไม่ลบ)
- **Layouts:** `src/layouts/Layout.astro` — Navbar + slot
- **Content config:** `src/content.config.ts` — courses (+ pinned/pinOrder) + lessons
- **Styling:** `src/styles/global.css` — Tailwind dark theme + Inter/Noto Sans Thai + **port จากเว็บหลัก:** Press Start 2P (`.pixel`) + `.pixel-shadow` + `.glass-dark`
- **Deploy:** static build -> Vercel (own repo `kwasati/ROOM` -> room subdomain auto-deploy). submodule ของ WORKSPACE ที่ `projects/_archive/ROOM`
- **Build:** `npm run build` (astro build)

## Rules
- Content is Thai language — keep all UI text in Thai
- Dark theme only — colors ผ่าน CSS custom properties (dark-card, dark-border, primary, secondary, green ฯลฯ)
- **Press Start 2P ไม่มี glyph ไทย** — `.pixel` ใช้เฉพาะข้อความอังกฤษ/ตัวเลข (โลโก้ gdBasket) เท่านั้น; heading ไทยใช้ bold ปกติ
- Navbar ต้องเนียนเหมือนเว็บหลัก (glass-dark + logo + เมนู absolute URL) — room เป็น subdomain แต่ให้รู้สึกเป็นเว็บเดียว
- เพิ่มคอร์ส = สร้าง course MDX + lesson MDX (pinned:true + pinOrder ถ้าอยากปักหมุด). เพิ่ม EA = เพิ่ม object ใน `eaItems` + สร้างหน้า `src/pages/ea/{slug}.astro`
- BrokerCTA = affiliate placement (end-of-lesson + sidebar)
