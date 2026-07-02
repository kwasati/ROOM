# Room — Claude Instructions

## Architecture
Unified hub (คอร์ส + EA) under IntensiveTrader brand — `room.intensivetrader.com` (Thai language). ตั้งแต่ 2026-07-01 EA ทั้งหมดย้ายมาอยู่ room (เว็บหลักไม่มีหน้า /ea แล้ว)

- **Stack:** Astro 6 + MDX + Tailwind CSS 4, static output
- **Content:**
  - Courses = MDX Astro Content Collections (glob loader): `src/content/courses/*.mdx` + `src/content/lessons/{course-slug}/*.mdx`. Course types: `learn` / `learn-tool`. **คอร์สทดสอบ forex-basics ลบแล้ว 2026-07-02 (คง collection/config เผื่ออนาคต) — ตอนนี้ home เหลือ EA อย่างเดียว, build warning "collection empty" = ปกติ ไม่ error**
  - EA = **hardcoded array `eaItems` ใน `src/data/ea.ts`** (ไม่ใช่ collection — มี gdBasket ตัวเดียว; shared โดย index.astro + items.json.ts). แต่ละ EA มีหน้า detail แยกเอง
- **Pages:**
  - `src/pages/index.astro` — home hub: รวม course + EA เป็น list เดียว, โซน **ปักหมุด** (pinned เรียง pinOrder) + โซนทั้งหมด, filter ทั้งหมด/คอร์สเรียน/EA, อ่าน `?filter=ea` auto-กดปุ่ม, inline lesson toggle สำหรับ course
  - `src/pages/ea/gdbasket.astro` — gdBasket detail สไตล์ **github-repo** (repo header + toolbar + file list + README + sidebar). ปุ่มโหลด absolute -> `intensivetrader.com/d/gdbasket`. **sidebar = About + Trading Journal card (ดึง Supabase `baskets` client-side: กำไรสะสม/winrate/count) + Myfxbook card (realtime ผ่าน proxy — ดู memory `reference_room_gdbasket_web`) + Releases + ผู้พัฒนา.** มี **XM affiliate 3 จุด** (การ์ด + แถว Broker ใน About + ขั้น 0 วิธีติดตั้ง) + Trading Journal 3 จุด (tab + สารบัญ + การ์ด) ลิงก์ `intensivetrader.com/journal`. ภาพ chart จริงหัว readme
  - `src/pages/[slug].astro` — course detail (multi-lesson; single-lesson redirect home)
  - `src/pages/[slug]/[lesson].astro` — lesson page
  - `src/pages/items.json.ts` — list item (คอร์ส+EA) key={type}:{slug} + CORS (vercel.json) ให้ admin เว็บหลักดึงไปทำ pin manager
- **ปักหมุด (จาก admin):** home ดึง `site_settings.content_pins` (Supabase REST, env PUBLIC_SUPABASE_URL/ANON_KEY) มาจัดโซนปักหมุด+ติดป้าย; fetch fail = คง frontmatter (pinned/pinOrder) เดิม. eaItems อยู่ `src/data/ea.ts` (shared index + items.json)
- **Components:** `src/components/` — **Navbar** (โคลนเว็บหลัก glass-dark: หน้าแรก/Room/Trading Journal + login, cross-subdomain absolute URL), BrokerCTA, CourseCard, LessonNav. (`TopBar.astro` = legacy เลิกใช้ ยังไม่ลบ)
- **Layouts:** `src/layouts/Layout.astro` — Navbar + slot
- **Content config:** `src/content.config.ts` — courses (+ pinned/pinOrder) + lessons
- **Styling:** `src/styles/global.css` — Tailwind dark theme + Inter/Noto Sans Thai + **port จากเว็บหลัก:** Press Start 2P (`.pixel`) + `.pixel-shadow` + `.glass-dark`
- **Deploy:** static build -> Vercel (own repo `kwasati/ROOM` -> room subdomain auto-deploy). submodule ของ WORKSPACE ที่ `projects/_archive/ROOM`. **Vercel env `MYFXBOOK_EMAIL/PASSWORD` set แล้ว (myfxbook card)**
- **SEO:** `public/robots.txt` (allow all + AI bots) + `@astrojs/sitemap` (`site: room.intensivetrader.com`). favicon = `/favicon.png` (วงกลมโปร่งใส) — ดู memory `reference_room_gdbasket_web`
- **Build:** `npm run build` (astro build)

## Rules
- Content is Thai language — keep all UI text in Thai
- Dark theme only — colors ผ่าน CSS custom properties (dark-card, dark-border, primary, secondary, green ฯลฯ)
- **Press Start 2P ไม่มี glyph ไทย** — `.pixel` ใช้เฉพาะข้อความอังกฤษ/ตัวเลข (โลโก้ gdBasket) เท่านั้น; heading ไทยใช้ bold ปกติ
- Navbar ต้องเนียนเหมือนเว็บหลัก (glass-dark + logo + เมนู absolute URL) — room เป็น subdomain แต่ให้รู้สึกเป็นเว็บเดียว
- เพิ่มคอร์ส = สร้าง course MDX + lesson MDX (pinned:true + pinOrder ถ้าอยากปักหมุด). เพิ่ม EA = เพิ่ม object ใน `eaItems` + สร้างหน้า `src/pages/ea/{slug}.astro`
- **XM affiliate** = ลิงก์ `affs.click/jih0m` + รหัส `KWASATI` วางที่ gdBasket (การ์ด+about+install) + **footer ทุกหน้า** (ใน `Layout.astro`). โทนเพื่อนบอกเพื่อน + disclaimer "ไม่ใช่คำแนะนำการลงทุน" + `rel=sponsored` ทุกจุด (กันข้อหาแนะนำการลงทุน). _(component `BrokerCTA.astro` เดิม = end-of-lesson course — ไม่ใช้แล้ว course ลบ)_
