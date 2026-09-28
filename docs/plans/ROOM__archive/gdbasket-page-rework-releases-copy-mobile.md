---
project: ROOM
type: ใบงาน
created: 2026-07-10
last_updated: 2026-07-10
status: done
---

## Target / Goal

### เป้าหมาย
ทำได้: เปิด room.intensivetrader.com/ea/gdbasket แล้วเห็น (1) Releases สไตล์ GitHub — widget แถบข้างโชว์รุ่นล่าสุด + ลิงก์ '+N releases' กดไปหน้าเต็ม /gdbasket-changelog.html ที่เรียง 3 รุ่น (v2.00/v1.37/v1.18) พร้อม changelog ละเอียด (2) ข้อความทั้งหน้าเป็นภาษาผู้ใช้ตามเด็ค ไม่มีศัพท์ทีม/logic หลุด (3) มือถือ 375px จัดวางไม่บิด ไม่ล้นขอบ. build ผ่าน npm run build ไม่มี error

### รายละเอียด
- SOURCE OF TRUTH ของทุกข้อความ = C:/WORKSPACE/.claude/artifacts/gdbasket-copy-mockup.md — Fable ต้องอ่านไฟล์นี้ทั้งไฟล์ก่อนเริ่ม ห้ามแต่งข้อความเอง ห้ามเดา ทุก copy ถอดจากเด็ค section 1-6
- อ่าน projects/_archive/ROOM/CLAUDE.md ก่อน (กฎบ้าน): ภาษาไทยทั้งหมด / dark theme เท่านั้น / Press Start 2P (.pixel) ใช้เฉพาะอังกฤษ+ตัวเลข (โลโก้ gdBasket / SPORT+ / version) heading ไทยใช้ bold ปกติ
- tagline หลักทั้งหน้า = 'Adaptive Buy Grid Behavior EA'
- ชื่อฟีเจอร์ทับศัพท์ทั้งหมด (ไม่แปล): Hour Entry / Adaptive Grid / Common-TP / PPTS / Broker-side Stop / Engine Profile / Capital / Std+Micro — ใช้ไทยเฉพาะตอนอธิบายจริงๆ (เด็ค section 1)
- ห้าม logic หลุดเด็ดขาด (ความลับ): ไม่มี EMA75 / แบ่งโซน high-low / ATR / preset / ชื่อ internal — ใช้คำเทียบความรู้สึกแทน (อ่านจังหวะตลาด / โซนราคาแพง-ถูก / ความเหวี่ยงตลาด)
- PPTS = ชื่อกลาง (Peak Profit Trail System) แตกเป็น 2 โหมด: legacy (ไม้เดี่ยว) / pyramid (ไม้เติม) — เด็ค section 2
- Engine Profile โชว์ 3 การ์ด: STRADA+ (ป้าย 'เร็วๆ นี้') / SPORT+ (ป้าย 'พร้อมใช้ · แนะนำ · ตั้งมาให้แล้ว') / CORSA (ป้าย 'เร็วๆ นี้') — เด็ค section 3. ของเดิมมีการ์ดเดียว ต้องขยายเป็น 3
- ตารางผลสอบใหม่แบบแยกกำไร-ชนเพดาน (เด็ค section 4.9 ตัวเลขจริง): รอบสำเร็จ 28 รอบ +288,459.40 / กำไรที่แบงก์ก่อนชนเพดาน (ใน 20 รอบ) +99,329.10 / รอบกำลังปั้น 1 รอบ +7,123.20 / รวมกำไรที่ทำได้จริง +394,911.70 / หักส่วนที่เสียตอนชนเพดาน 20 รอบ -195,239.00 / กำไรสุทธิ +199,672.70 (หัวข้อใหญ่โชว์ +199,673 ปัดเศษ) + หมายเหตุ 3 ย่อหน้าตามเด็ค (ชนเพดานไม่ใช่ขาดทุนล้วน)
- Releases 3 รุ่น publish เนื้อหา = เด็ค section 6.3: v2.00 (8 ก.ค. 2026 · ล่าสุด) / v1.37 (24 มิ.ย. 2026) / v1.18 (13 มิ.ย. 2026) — โหลดได้ทั้ง 3 (url เดิม: DL_V200=intensivetrader.com/d/gdbasket, DL_V137=/d/gdbasket-v137, DL_V118=/d/gdbasket-v118)
- widget Releases แถบข้าง (แทนที่บล็อก Releases list เดิม): สไตล์ GitHub — หัว 'Releases' + เลข 3 / การ์ดรุ่นล่าสุด v2.00 (ป้าย ล่าสุด + วันที่) / ลิงก์ '+2 releases ทั้งหมด ->' ชี้ /gdbasket-changelog.html. อ้างภาพ github.com/kwasati/KODE/releases เป็น pattern
- หน้าเต็ม public/gdbasket-changelog.html: รื้อ timeline ซิกแซกเดิมทิ้งทั้งหมด (ตอนนี้อ่าน GDB_DATA + filter chips) ทำใหม่เป็น github-releases-style — standalone html self-contained, ไม่ต้องพึ่ง gdbasket-data.js, hardcode 3 รุ่นจากเด็ค 6.3. เรียงใหม่->เก่า แต่ละบล็อก: ป้ายเวอร์ชัน + วันที่ + ป้าย 'ล่าสุด' + ชื่อรุ่น + ปุ่มดาวน์โหลด + รายการเปลี่ยนแปลง. โทน dark เข้ากับเว็บ (สีแดง/ทอง/ดำ ชุดเดียวกับ global.css)
- ตัด section 'Languages' (MQL5 92% / Docs 8%) ในแถบข้างออกทั้งบล็อก + ตัดแถว 'ภาษา = MQL5' ใน About ออก (ผู้ใช้ไม่สนโค้ด)
- Myfxbook card: เปลี่ยน label เป็นไทยตามเด็ค 5 (Abs. Gain -> กำไรรวม / Monthly -> ต่อเดือน / Drawdown -> ติดลบสูงสุด / Balance -> ยอดเงิน) หัวข้อ 'Myfxbook · ผลตรวจสอบจริง'. ห้ามแตะ logic fetch/proxy/clone-card ใน client script
- ธีม Aston Martin-Bentley GT: หรูเรียบ ทรงพลังไม่ตะโกน — มีผลกับ 'โทนการเขียน' (grand tourer/track-bred/effortless) + polish เล็กน้อย. ไม่ต้องเปลี่ยน palette หลัก (แดง #DC2626 / ทอง #F59E0B / ดำ) คงเดิม
- มือถือ 375px จุดเสี่ยงที่ต้องเช็ค: (a) ตารางผลสอบใหม่ต้อง wrap div overflow-x-auto กันล้น (b) file-list row บรรทัด 178-180 fixed width w-[190px] max-md:w-[130px] + note max-md:hidden — เช็ค meta ไม่ชิดขอบ (c) latest-commit bar 154-159 truncate flex-wrap (d) toolbar download note w-full 136-151 (e) container px-4 sm:px-6 padding สมดุลสองข้าง
- XM affiliate 3 จุดคงไว้ (การ์ด + แถว Broker ใน About + ขั้น 0 install) เกลาข้อความเฉพาะที่เด็คระบุ. rel='sponsored' + disclaimer คงครบ
- version display 'v2.00' + ปุ่มดาวน์โหลด absolute url คงเดิม ไม่แตะ

### Scope Boundary
**In scope:**
- projects/_archive/ROOM/src/pages/ea/gdbasket.astro (copy ทั้งหน้า + Releases widget + Engine Profile 3 การ์ด + ตารางผลสอบใหม่ + ตัด Languages/ภาษา MQL5 + Myfxbook label + mobile)
- projects/_archive/ROOM/public/gdbasket-changelog.html (รื้อทำใหม่ github-releases-style, 3 รุ่น)
- projects/_archive/ROOM/src/styles/global.css (เฉพาะถ้าจำเป็นต้องเพิ่ม utility เล็กน้อย — optional)
- อ่าน (ไม่แก้): C:/WORKSPACE/.claude/artifacts/gdbasket-copy-mockup.md + projects/_archive/ROOM/CLAUDE.md

**Out of scope:**
- ไม่แตะ myfxbook proxy endpoint / supabase fetch script / trading journal client logic (คง fetch + clone-card เดิม — แค่เปลี่ยน label ข้อความ)
- ไม่แตะหน้าอื่น (index.astro / [slug].astro / lessons / courses)
- ไม่แตะ Navbar / Layout / footer / SEO / sitemap / favicon
- ไม่แตะ EA / MQL5 source / publish/web ต้นทาง (เด็ค = source พอ)
- ไม่เปลี่ยน palette หลัก / ไม่เปลี่ยนโครง grid lg:grid-cols-[1fr_320px]
- ไม่ deploy เอง / ไม่ commit final จน อาร์ท smoke เปิดดูจริงผ่าน

### Non-goals
- ไม่ทำให้ STRADA+/CORSA ใช้งานได้จริง — แค่การ์ด 'เร็วๆ นี้' บนหน้าเว็บ
- ไม่เพิ่มรุ่น changelog เกิน 3 รุ่น publish — v0.68/v0.97/v1.09/v1.19 = ประวัติภายใน ไม่ขึ้นหน้าเว็บ (v1.18 รวบต้นเรื่องทั้งหมดแล้ว)
- ไม่ทำ pin manager / admin / dynamic release data — changelog html = static hardcode
- ไม่รื้อ data source myfxbook/journal realtime

### Skill Flow
- Fable รับใบงาน -> อ่านเด็ค + CLAUDE.md ROOM -> /build (worktree, branch แยก) -> npm run build verify -> รายงานกลับให้ อาร์ท smoke -> /done (submodule-aware: push sub ROOM ก่อน -> bump parent gitlink)

### Stop Conditions
- เด็ค gdbasket-copy-mockup.md หาไม่เจอ หรืออ่านไม่ครบ
- current code snippet ในไฟล์จริงต่างจาก reference ใน plan (plan stale) -> หยุดถาม
- ข้อความส่วนไหนในเด็คกำกวม/ขัดกับกฎบ้าน -> หยุดถาม ห้ามแต่งเอง
- logic myfxbook/journal/supabase ต้องแตะเพื่อเปลี่ยน label -> ถ้ากระทบมากกว่าเปลี่ยน text หยุดถาม

### Report-Back Contract
- verdict
- ไฟล์ที่แก้
- npm run build ผ่านไหม
- จุดที่ยังไม่ชัด/ค้าง
- branch+worktree ที่ใช้
- รอ อาร์ท smoke ก่อน commit final

### Current State + Anti-Collision

**ทำถึงไหน (2026-07-10):**
- Phase 1 (คุยงาน) + ภาษาเคาะจบแล้ว — เด็ค copy ครบทุก section ที่ `C:/WORKSPACE/.claude/artifacts/gdbasket-copy-mockup.md` (source of truth)
- ตัวเลขผลสอบดึงจาก CSV จริงแล้ว (อยู่ในเด็ค 4.9)
- ยังไม่แตะ code เลย — Fable เริ่มจาก Phase 1 (Pre-build Review) ได้เลย

**Anti-Collision (ห้ามชน):**
- ทำใน **worktree + branch แยก** ของ submodule ROOM (เช่น branch `gdbasket-web-rework`) — repo `kwasati/ROOM` ที่ `projects/_archive/ROOM`
- **ห้าม `git add -A`** — add เฉพาะไฟล์ที่แตะจริง (gdbasket.astro / gdbasket-changelog.html / global.css ถ้าจำเป็น)
- ห้ามแตะไฟล์นอก scope: myfxbook proxy / supabase fetch / trading journal client logic / index.astro / Navbar / Layout / SEO
- **ห้าม push final + ห้าม bump parent gitlink จน อาร์ท smoke เปิดดูจริงผ่าน** (กฎ /done ข้อ 1)
- แก้เด็คไม่ได้ — เด็ค = อ่านอย่างเดียว ถ้าเจอเด็คขัด/กำกวม หยุดถาม

### Handoff Prompt

```text
ทำใบงาน ROOM: รื้อหน้า gdBasket บนเว็บ room.intensivetrader.com — 3 ก้อน (Releases สไตล์ GitHub / copy ทั้งหน้าใหม่ / ซ่อมมือถือ)

plan file: C:\WORKSPACE\.claude\plans\ROOM\gdbasket-page-rework-releases-copy-mobile.md
source of truth ทุกข้อความ: C:\WORKSPACE\.claude\artifacts\gdbasket-copy-mockup.md (อ่านทั้งไฟล์ก่อน ห้ามแต่งเอง)
กฎบ้าน: C:\WORKSPACE\projects\_archive\ROOM\CLAUDE.md (ภาษาไทย / dark theme / Press Start 2P เฉพาะอังกฤษ+ตัวเลข)

ไฟล์เป้า: projects/_archive/ROOM/src/pages/ea/gdbasket.astro + projects/_archive/ROOM/public/gdbasket-changelog.html (+ global.css ถ้าจำเป็น)
ทำใน worktree + branch แยก (submodule ROOM) · ห้าม git add -A · build ด้วย npm run build · ห้าม push final จน อาร์ท smoke ผ่าน

เริ่มที่ Phase 1 (Pre-build Review): อ่าน plan + เด็ค + CLAUDE.md + ไฟล์จริง แล้วยืนยัน plan clear ก่อนลงมือ. เดินตาม Phase 1-5 ใน plan. เจอข้อสงสัย/เด็คกำกวม/current code ต่างจาก reference = หยุดถามก่อน
```

# gdBasket หน้าเว็บ ROOM — Releases สไตล์ GitHub + Copy ใหม่ + ซ่อมมือถือ

> รื้อหน้า gdBasket บนเว็บ ROOM 3 ก้อน — Releases สไตล์ GitHub (widget + หน้าเต็ม changelog ละเอียด 3 รุ่น) / เขียนข้อความทั้งหน้าใหม่เป็นภาษาผู้ใช้ตามเด็คที่เคาะจบแล้ว / ซ่อมมือถือ. ทำเพราะข้อความเดิมเป็นภาษาทีมพัฒนา คนใช้อ่านไม่รู้เรื่อง + Releases เดิมเป็น timeline ซิกแซกไม่เหมือน GitHub + มือถือจัดวางบิด. ใบงานส่ง Fable ทำ tab หน้า.

## Phase 1: Pre-build Review + อ่าน source
- [x] Pre-build Review: อ่าน plan ทั้งไฟล์ + อ่าน C:/WORKSPACE/.claude/artifacts/gdbasket-copy-mockup.md ทั้งไฟล์ (source ของทุกข้อความ) + projects/_archive/ROOM/CLAUDE.md (กฎบ้าน) + Read ไฟล์จริง gdbasket.astro และ public/gdbasket-changelog.html ก่อนแก้; ตรวจว่า scope/acceptance/reference snippet ตรงกับไฟล์จริงไหม; ถ้า current code ต่างจาก reference หรือเด็คกำกวม -> หยุดถามก่อนลงมือ; ถ้าชัดตอบว่า plan clear แล้วเริ่ม Phase 2. Acceptance: ยืนยันอ่านครบ 4 ไฟล์ + ไม่มี stale/ข้อสงสัยค้าง

### Reference
เด็ค = C:/WORKSPACE/.claude/artifacts/gdbasket-copy-mockup.md (section 1 รากศัพท์ / 2 PPTS / 3 Engine Profile / 4 copy ทั้งหน้า / 5 sidebar / 6 Releases)
ไฟล์เป้า gdbasket.astro = 542 บรรทัด (const arrays บรรทัด 52-92: features/howSteps/releases/fileRows/installSteps; README+ตาราง 205-302; Engine Profile 242-250; sidebar 322-419; script 436-541)

## Phase 2: Copy rewrite ทั้งหน้า gdbasket.astro (ตามเด็ค section 1-4)
- [x] แก้ const arrays บนหัวไฟล์ (บรรทัด 52-92) ให้ตรงเด็ค: features[] = 6 การ์ดเด็ค 4.8 (Adaptive Buy Grid / Common-TP / PPTS / Broker-side Stop / Engine Profile / Std+Micro) — ห้ามมีศัพท์ DCA/ATR/ZONE_HL. howSteps[] = 4 ขั้นเด็ค 4.6 (Hour Entry + Adaptive Grid + Common-TP + Broker-side Stop) ข้อความอาร์ท. installSteps คงโครง 6 ขั้นเด็ค 4.10. Acceptance: grep ไม่เจอคำต้องห้าม (DCA/ATR/ZONE_HL/EMA/preset/pyramid ดิบในความหมาย logic) ในข้อความผู้ใช้
- [x] แก้ header + README + tagline: header 'IntensiveTrader / gdBasket' + คำนิยาม 'Adaptive Buy Grid Behavior EA · GOLD M15' (เด็ค 4.1); README พาดหัว + ย่อหน้าเปิดข้อความอาร์ท (เด็ค 4.5); กล่อง Capital 3 ย่อหน้า (เด็ค 4.7) แทนกล่อง PPTS/Grid Dynamic เดิม (บรรทัด 226-230). Acceptance: ไม่มีคำ PPTS แบบไม่อธิบาย/Grid Dynamic ดิบ, tagline โผล่ที่ header+README+About
- [x] ขยาย Engine Profile จาก 1 การ์ดเป็น 3 การ์ด (บรรทัด 242-250) ตามเด็ค section 3: STRADA+ (เร็วๆ นี้) / SPORT+ (พร้อมใช้ · แนะนำ) / CORSA (เร็วๆ นี้) แต่ละใบมี ป้าย + พาดหัว .pixel + โปรย. ตัดหมายเหตุเดิมบรรทัด 250 ออกหรือปรับตามเด็ค. Acceptance: 3 การ์ดครบ, SPORT+ เด่นสุด (ป้าย แนะนำ), อีก 2 ป้าย เร็วๆ นี้
- [x] แก้ PPTS mention ให้เป็น legacy/pyramid ตามเด็ค 2 + fileRows[] note (บรรทัด 75-83) เปลี่ยนคำอธิบายเป็นภาษาผู้ใช้ (Adaptive Buy Grid Behavior EA / Engine Profile / Common-TP ฯลฯ). Acceptance: fileRows ทุกแถวไม่มีศัพท์ทีม

### Reference
# current features[] (gdbasket.astro:52-59) — ตัวอย่างที่ต้องเปลี่ยน
const features = [
  { title: 'Buy Grid ถัวเฉลี่ย (DCA)', desc: '...' },
  { title: 'ระยะกริดปรับตามตลาด (ATR)', desc: '...' },
  ...
];
# new -> ถอดจากเด็ค 4.8 (6 การ์ด: Adaptive Buy Grid / Common-TP / PPTS / Broker-side Stop / Engine Profile / Std+Micro Ready)

# current Engine Profile (gdbasket.astro:242-250) = การ์ดเดียว SPORT+
# new -> 3 การ์ด STRADA+/SPORT+/CORSA ตามเด็ค section 3 (2 ตัวป้าย 'เร็วๆ นี้')

# current กล่อง Capital มีคำ PPTS/Grid Dynamic (gdbasket.astro:226-230) -> แทนด้วยเด็ค 4.7 (3 ย่อหน้า Capital)

## Phase 3: ตารางผลสอบใหม่ + ตัด section โค้ด
- [x] แทนตารางผลสอบเดิม (บรรทัด 252-272) ด้วยตารางแยกกำไร-ชนเพดานตามเด็ค 4.9: 6 แถว (รอบสำเร็จ 28 +288,459.40 / กำไรก่อนชนเพดาน +99,329.10 / รอบกำลังปั้น 1 +7,123.20 / รวมกำไรที่ทำได้จริง +394,911.70 / หักชนเพดาน 20 -195,239.00 / กำไรสุทธิ +199,672.70) + คำนำ + หมายเหตุ 3 ย่อหน้า. หัวข้อการ์ด Myfxbook/ผลสอบยังโชว์เลขใหญ่ +199,673 ได้. ห่อ <table> ด้วย div overflow-x-auto กันล้นมือถือ. Acceptance: ตัวเลขตรงเด็คทุกบรรทัด + reconcile ได้ +199,672.70 + ตารางไม่ล้นที่ 375px
- [x] ลบบล็อก Languages ในแถบข้าง (บรรทัด 394-405 ทั้ง div) + ลบแถว 'ภาษา = MQL5' ใน About (บรรทัด 331). Acceptance: grep 'Languages' และ 'MQL5' ในแถบข้างไม่เจอ (ยกเว้นถ้ามีที่อื่นที่ตั้งใจคง)
- [x] เปลี่ยน Myfxbook label เป็นไทย (บรรทัด 355-368): หัวข้อ 'Myfxbook · ผลตรวจสอบจริง' + Abs.Gain->กำไรรวม / Monthly->ต่อเดือน / Drawdown->ติดลบสูงสุด / Balance->ยอดเงิน. ห้ามแตะ class .mfb-* หรือ logic client script (บรรทัด 489-531) — เปลี่ยนแค่ text label. Acceptance: label ไทยครบ + fetch/clone ยังทำงาน (build ผ่าน + selector .mfb-* คงเดิม)

### Reference
# current ตารางผลสอบ (gdbasket.astro:254-272) = 1 แถว SPORT+ +199,673/28/20
# new -> เด็ค 4.9 ตาราง 6 แถว แยกกำไร-ชนเพดาน + wrap overflow-x-auto

# current Languages sidebar (gdbasket.astro:394-405) -> ลบทั้ง div
<div class="border-t border-dark-border pt-5">
  <h3 ...>Languages</h3> ... MQL5 92% / Docs 8% ...
</div>

# current About row ภาษา (gdbasket.astro:331) -> ลบ
<div class="flex justify-between"><span ...>ภาษา</span><span ...>MQL5</span></div>

# Myfxbook labels (gdbasket.astro:361-365): text 'Abs. Gain'/'Monthly'/'Drawdown'/'Balance' -> ไทย (คง class .mfb-absgain/.mfb-monthly/.mfb-dd/.mfb-balance)

## Phase 4: Releases — widget แถบข้าง + หน้าเต็ม github-style
- [x] แก้บล็อก Releases แถบข้าง (บรรทัด 374-392) เป็น widget สไตล์ GitHub ตามเด็ค 6.1: หัว 'Releases' + เลข 3 / การ์ดรุ่นล่าสุด v2.00 (icon tag เขียว + ป้าย 'ล่าสุด' + วันที่ 8 ก.ค. 2026) / ลิงก์ '+2 releases ทั้งหมด ->' ชี้ /gdbasket-changelog.html. อ้าง pattern github.com/kwasati/KODE/releases (widget เล็ก). Acceptance: widget โชว์รุ่นล่าสุดเด่น + ลิงก์ไปหน้าเต็มคลิกได้
- [x] รื้อ public/gdbasket-changelog.html ทั้งไฟล์ (timeline ซิกแซก + GDB_DATA + filter chips) ทำใหม่เป็น github-releases-style standalone: หัว 'gdBasket / Releases' + คำโปรย / รายการ 3 รุ่นเรียงใหม่->เก่า แต่ละบล็อก (ป้ายเวอร์ชัน + วันที่ + ป้าย 'ล่าสุด' เฉพาะ v2.00 + ชื่อรุ่น + ปุ่มดาวน์โหลด url เดิม + bullet changelog). เนื้อหา 3 รุ่นถอดจากเด็ค 6.3 ทุกบรรทัด. hardcode ไม่พึ่ง gdbasket-data.js. โทน dark palette เดียวกับเว็บ (แดง/ทอง/ดำ). Acceptance: เปิดไฟล์ตรง /gdbasket-changelog.html เห็น 3 รุ่นเรียงสวยแบบ github + ทุกข้อความตรงเด็ค 6.3 + โหลดได้ 3 ปุ่ม + ไม่มี timeline/filter เดิมเหลือ
- [x] เช็ค cross-link: sub-nav tab 'Releases' (บรรทัด 127) + ปุ่ม/ลิงก์ที่ชี้ changelog เดิม ให้ชี้ถูก (widget -> /gdbasket-changelog.html). Acceptance: ทุกลิงก์ Releases ไปหน้าเต็มใหม่ ไม่ค้าง anchor เดิม

### Reference
# current Releases sidebar (gdbasket.astro:374-392) = list 3 รุ่นเรียงพร้อม note+ปุ่มโหลดต่อรุ่น
# new -> widget github-style: การ์ดรุ่นล่าสุดใบเดียวเด่น + '+2 releases ->' ลิงก์หน้าเต็ม (เด็ค 6.1)
const releases = [ {version:'v2.00',date:'2026-07-08',latest:true,...}, {v1.37}, {v1.18} ]  // array ใช้ต่อได้

# current changelog card ในหน้า (gdbasket.astro:304-319) ลิงก์ /gdbasket-changelog.html — คงลิงก์ ชี้หน้าใหม่

# current public/gdbasket-changelog.html = timeline (body:183 header / 199 toolbar tabs / 237 #timeline / 249 <script src=gdbasket-data.js> / render timeline)
# new -> github-releases-style, 3 รุ่นจากเด็ค 6.3, standalone, ตัด GDB_DATA/timeline/chips ทิ้ง
# ปุ่มโหลด url: v2.00=https://intensivetrader.com/d/gdbasket / v1.37=/d/gdbasket-v137 / v1.18=/d/gdbasket-v118

## Phase 5: มือถือ responsive + build verify
- [x] ไล่ responsive ทั้งหน้าที่ 375px (จุดเสี่ยงจาก detail): (a) ตารางผลสอบใหม่ wrap overflow-x-auto แล้ว (b) file-list row 178-180 เช็ค meta ไม่ชิดขอบ/ไม่ทับ note (c) latest-commit bar 154-159 truncate ไม่ดันขอบ (d) toolbar 136-151 download note w-full สมดุล (e) Engine Profile 3 การ์ด stack สวยบนมือถือ (f) container px-4 padding เท่ากันสองข้าง ไม่ชิดซ้าย. แก้เฉพาะ responsive utility (sm:/max-md:/flex-wrap/overflow) ไม่รื้อโครง. Acceptance: เปิด 375px แล้วทุก section ไม่ล้นขอบ ไม่บิด ไม่มี horizontal scroll ทั้งหน้า (ยกเว้นตารางที่ตั้งใจ scroll ในกรอบ)
- [x] รัน npm run build ที่ projects/_archive/ROOM ให้ผ่านไม่มี error (warning 'collection empty' ของ forex-basics = ปกติ ไม่ใช่ error). ตรวจ gdbasket.astro + gdbasket-changelog.html build ออกมาถูก. Acceptance: build exit 0 + ไฟล์ dist มีหน้า gdbasket + changelog

### Reference
# จุดเสี่ยงมือถือ (gdbasket.astro):
# 178-180 file-list: <span class="...w-[190px] max-md:w-[130px] shrink-0">{row.name}</span> + note max-md:hidden + meta whitespace-nowrap
# 154-159 latest-commit: <span class="text-gray truncate flex-1 min-w-[120px]">...</span>
# 136-151 toolbar: download note <p class="...w-full">
# 254 ตาราง: <table class="w-full border-collapse text-sm"> -> ห่อ <div class="overflow-x-auto">
# 96 container: <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
# build: cd projects/_archive/ROOM && npm run build (astro build, static)
