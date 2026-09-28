---
project: 7-ROOM
created: 2026-07-30
last_updated: 2026-07-30
status: done
type: ใบงาน
---

## Target / Goal

### เป้าหมาย
ทำได้: หน้า gdBasket บน room.intensivetrader.com (/ea/gdbasket + /ea/gdbasket/changelog) โชว์เวอร์ชันล่าสุด v3.04 + ปุ่มโหลดชี้ไฟล์ v3.04 จริงที่ intensivetrader.com/d/gdbasket (รุ่นก่อนหน้า demote เป็น version-specific link ที่ยังโหลดได้) + changelog entry v3.04 ขึ้นบนสุด + parent WORKSPACE gitlink bump แล้ว — ตาม publish/web/RELEASE-RUNBOOK.md ทุก STEP (A-C) + verify 5 ข้อผ่านหมด

### รายละเอียด
- depends on ใบงาน gdbasket-publish-v304-build (project 2-EAfactory) — ต้องมีไฟล์ publish/releases/v3.04/gdBasket_v3.04.ex5 มาก่อนเริ่ม STEP A จริง
- SSOT วิธีทำ = projects/2-EAfactory/ea/gdBasket/publish/web/RELEASE-RUNBOOK.md เขียนจากการปล่อย v2.02 จริง 2026-07-13 — ไล่ทีละ STEP ตามนั้น ห้ามงมใหม่ ห้ามลอก schema มาซ้ำในใบงานนี้
- เว็บ gdBasket = 2 repo คนละก้อน: หน้าโชว์ = projects/7-ROOM (deploy branch master, submodule ของ WORKSPACE) / ตัวโหลด = projects/1-intensivetrader.com (deploy branch main, standalone repo ไม่ใช่ submodule)
- กับดักที่เคยเจอจริง (v2.02): intensivetrader repo อาจค้างอยู่ branch demo-sales ไม่ใช่ main — ต้อง git branch --show-current เช็คก่อนแตะทุกครั้ง
- เนื้อหาโปรยฟีเจอร์ v3.04 (จาก CHANGELOG.md public ของ 2-EAfactory ใต้หัว v3.04): กำไรสุทธิอ่านสดจากประวัติดีลจริงเสมอ (กันเลขเพี้ยนตอนความจำหาย/ย้ายเครื่อง) / รอบสำเร็จ-รอบแตก-เลขรอบนับเดินหน้าจากวันติดตั้ง 3.04 / ฝาก-ถอนเงินจริงไม่ทำให้เลขขยับ / ความจำผูกกับเลขบัญชี กันเลขปนกันหลายบัญชี / ถอด Rolling Capital Mode ออกชั่วคราว (รอพิสูจน์แนวทางใหม่) / งานนี้ไม่แตะการเทรด
- ก่อนแก้จริงต้องเช็คสถานะเว็บปัจจุบัน — session log ล่าสุดบอกว่า v3.02 VELOCE ship production (2026-07-23) แต่ v3.03 เคย build publish แล้วแม้ยังไม่ smoke ก่อนขึ้นเว็บ (ตาม CHANGELOG v3.03) ต้องยืนยันจากไฟล์จริง/เว็บจริงว่าตอนนี้หน้าเว็บโชว์เลขรุ่นอะไรอยู่ ก่อนแก้
- ไม่ใช่ UI ใหม่ — เป็นการอัปเดตเนื้อหา/เลขเวอร์ชันตาม pattern ที่มีอยู่แล้วจริงในหน้าเว็บ (การ์ด/releases array/changelog block) ตาม runbook ที่ระบุ element -> จุดแก้ชัดเจนอยู่แล้ว = Research stage (อ่าน runbook + อ่านไฟล์จริงเทียบ pattern) ทำหน้าที่แทน mockup stage ตามกฎ 3-stage chain (ไม่มี layout ใหม่ให้ mock — ถ้าระหว่าง research เจอว่าต้องเปลี่ยน layout ให้หยุดถามอาร์ทก่อน ไม่ใช่ mock เอง)
- practice: n/a (งานเว็บ ไม่ใช่ EA — ไม่แตะ MQL5)

### Scope Boundary
**In scope:**
- projects/1-intensivetrader.com: public/downloads/gdbasket/ + src/pages/api/downloads/[slug].ts + src/pages/d/[slug].ts
- projects/7-ROOM: src/data/ea.ts + src/pages/ea/gdbasket.astro + src/pages/ea/gdbasket/changelog.astro + CLAUDE.md (บรรทัด Pages)
- C:\WORKSPACE parent repo: bump gitlink projects/2-EAfactory (ถ้ายังไม่ได้ bump จากใบงาน 1) + projects/7-ROOM
- projects/7-ROOM/public/gdbasket-og.png (เฉพาะถ้าจุดขาย/เวอร์ชันบนภาพเปลี่ยนจริง — v3 wordmark generic ตั้งแต่ v3.03 น่าจะไม่ต้องแก้)

**Out of scope:**
- EA source code / trading logic ทุกส่วน
- publish build process ของไฟล์ ex5 (ใบงาน gdbasket-publish-v304-build ที่ 2-EAfactory ทำเสร็จมาให้แล้ว)
- branch demo-sales ของ intensivetrader.com — ห้ามแตะ
- ระบบ license/key (ด่าน E2/E4 ใน gdbasket-master-map.md) — ไม่เกี่ยวกับงานนี้

### Non-goals
- ไม่ทำ marketing asset ใหม่ (fb/ig caption) เว้นแต่อาร์ทสั่งเพิ่ม
- ไม่แก้ og image เว้นแต่จุดขายภาพเปลี่ยนจริง
- ไม่ merge main เข้า demo-sales

### Current State
- v3.04 public merge+deploy เสร็จแล้ว (ดูใบงาน `gdbasket-publish-v304-build` ที่ project 2-EAfactory) — publish build v3.04 (ตัวแจก) เป็น dependency ตรง ต้องเสร็จก่อนงานนี้เริ่ม STEP A จริง
- เว็บปัจจุบัน (ก่อนงานนี้เริ่ม): ตาม session log ล่าสุด ROOM หน้า `/ea/gdbasket` ship production v3.02 VELOCE (2026-07-23) — v3.03 เคย build publish (`publish/releases/v3.03/gdBasket_v3.03.ex5`) แต่ CHANGELOG ระบุ "ยังไม่ smoke ก่อนขึ้นเว็บ" จึงไม่ชัดว่าขึ้นจริงหรือยัง — Research phase (Phase 1) ต้องเช็คของจริงให้ชัดก่อนแก้ ห้ามเชื่อ log เก่าเฉยๆ
- `CHANGELOG.md` (public, 2-EAfactory) มีทั้ง entry v3.02/v3.03/v3.04 พร้อมโปรยฟีเจอร์ — ใช้เป็นวัตถุดิบ copy ขึ้นหน้าเว็บ

### Anti-Collision
- `projects/7-ROOM` = git submodule ของ WORKSPACE (deploy branch master) / `projects/1-intensivetrader.com` = standalone repo (deploy branch main, ไม่ใช่ submodule)
- ก่อนแตะ intensivetrader ต้อง `git branch --show-current` เช็คก่อนเสมอ — เคยเจอค้างอยู่ branch `demo-sales` (งาน tab อื่น) ห้าม checkout ทับตรงๆ ถ้าจำเป็นให้ทำผ่าน `git worktree add` ชั่วคราวจาก main แล้วลบทิ้งหลัง push (pattern พิสูจน์แล้วใน `_archive/gdbasket-publish-cut-webhook.md` Phase 3 ของ 2-EAfactory)
- ห้าม `git add -A` ทั้ง 2 repo (มี `dist/` gitignored + cruft ของ tab อื่นค้างได้)
- หลัง push submodule `2-EAfactory` (จากใบงานที่ 1) และ `7-ROOM` (งานนี้) แล้ว ต้อง bump parent WORKSPACE gitlink ทั้งคู่พร้อมกัน (ถ้าใบงานที่ 1 bump ไปแล้ว ให้ bump เฉพาะ `7-ROOM` เพิ่ม)
- เช็ค `_shared/worktrees/` และ `projects/7-ROOM/.claude/worktrees/` ก่อนเริ่มว่ามี tab อื่นถือ worktree ของ ROOM ค้างอยู่ไหม

### Handoff Prompt
```text
งาน: gdBasket web update v3.04 — ROOM + intensivetrader
อ่านก่อนเริ่ม: C:\WORKSPACE\.claude\plans\7-ROOM\gdbasket-room-web-v304-update.md (ใบงานนี้ทั้งไฟล์)
SSOT วิธีทำ: C:\WORKSPACE\projects\2-EAfactory\ea\gdBasket\publish\web\RELEASE-RUNBOOK.md (ไล่ทีละ STEP)

เช็คก่อนเริ่ม: ไฟล์ C:\WORKSPACE\projects\2-EAfactory\ea\gdBasket\publish\releases\v3.04\gdBasket_v3.04.ex5 ต้องมีอยู่จริงแล้ว (มาจากใบงาน gdbasket-publish-v304-build ที่ project 2-EAfactory) — ถ้ายังไม่มี STOP รอให้จบก่อน อย่าเริ่ม STEP A

บริบท: gdBasket v3.04 (กำไร/ตัวนับรอบอ่านสดจากประวัติดีลจริงเสมอ กันเลขเพี้ยนตอนความจำหาย + ถอด Rolling Capital ชั่วคราว) พร้อมขึ้นเว็บแล้ว อาร์ทยืนยัน "ใช้ได้จริง" บน live แล้ว

ทำ: Phase 1-4 ในใบงาน (Research ของจริงในโค้ด+เทียบ runbook -> STEP A intensivetrader ตัวโหลด -> STEP B ROOM หน้าโชว์ -> STEP C bump parent gitlink + verify 5 ข้อ).
ห้าม: แก้ EA code, แตะ branch demo-sales, git add -A.
เสร็จแล้ว: รายงาน URL verify 5 จุด + commit hash 2 repo + parent gitlink กลับ แล้ว /done ปิดทั้ง 2 ใบงาน + cleanup BACKLOG.
```

### Skill Flow
/build -> STEP A (intensivetrader ตัวโหลด) -> STEP B (ROOM หน้าโชว์) -> STEP C (parent gitlink) -> verify เว็บจริง -> /done

### Stop Conditions
- ไฟล์ publish/releases/v3.04/gdBasket_v3.04.ex5 ยังไม่มี -> STOP รอใบงานที่ 1 จบก่อน ห้ามเริ่ม STEP A
- intensivetrader repo ไม่ใช่ branch main และมี uncommitted work ของ tab อื่นค้าง -> หยุดถาม ห้าม checkout ทับ
- pattern จริงในไฟล์ไม่ตรงกับที่ runbook อธิบาย (drift หลัง v2.02) -> หยุดถามอาร์ทก่อนแก้ตามที่เจอจริง ห้ามเดา
- npm run build fail (ROOM) -> STOP แก้ก่อน push
- push origin fail/conflict -> หยุดรายงาน ห้าม force push

### Report-Back Contract
- URL 5 จุด verify พร้อมผลลัพธ์ (โหลดได้ตรงไฟล์ v3.04 / รุ่นเก่ายังโหลดได้ / เลขรุ่นหน้า ROOM ตรง / changelog บล็อกใหม่บนสุด / การ์ด home ตรง)
- commit hash ทั้ง 2 repo (intensivetrader main, ROOM master) + parent WORKSPACE gitlink
- ยืนยัน BACKLOG cleanup (ลบ pointer ของใบงานทั้งคู่ออกหลังจบ)

# gdBasket web update — v3.04 ขึ้น ROOM

> ใบงาน 2/2 ของ chain ปล่อยรุ่น v3.04. Part: web update (ROOM หน้าโชว์ + intensivetrader ตัวโหลด) ตาม RELEASE-RUNBOOK. Depends: ใบงาน gdbasket-publish-v304-build (project 2-EAfactory) ต้องมีไฟล์แจกก่อน. Parallel: ทำหลังใบงาน 1 เท่านั้น ไม่ขนานกัน.

## Phase 1: Research (ก่อนแก้ไฟล์จริง)
- [x] อ่าน publish/web/RELEASE-RUNBOOK.md ทั้งไฟล์ (SSOT ของ workflow นี้) + ยืนยันว่าไฟล์แจก publish/releases/v3.04/gdBasket_v3.04.ex5 มีอยู่จริงจากใบงานที่ 1 (ถ้ายังไม่มี = STOP รอใบงานที่ 1 จบก่อน)
- [x] Research ของจริงบนทั้ง 2 repo ตามที่ runbook ชี้: projects/1-intensivetrader.com (src/pages/api/downloads/[slug].ts, src/pages/d/[slug].ts, public/downloads/gdbasket/) + projects/7-ROOM (src/data/ea.ts, src/pages/ea/gdbasket.astro, src/pages/ea/gdbasket/changelog.astro, CLAUDE.md) — เทียบ pattern ที่ runbook อธิบาย (เขียนตอนปล่อย v2.02) กับโค้ดจริงตอนนี้ (อาจมี drift หลัง v3.01-v3.03) — บันทึกจุดที่ไม่ตรง runbook ถ้าเจอ ก่อนแก้จริง + ยืนยันเลขรุ่นที่หน้าเว็บจริงโชว์อยู่ตอนนี้ (v3.02 หรือ v3.03) เป็นจุดตั้งต้น

## Phase 2: STEP A — intensivetrader (ตัวโหลด)
- [x] เช็ค branch (git branch --show-current) repo projects/1-intensivetrader.com — ถ้าไม่ใช่ main ต้อง checkout main (stash เฉพาะไฟล์ของ tab อื่นถ้ามี uncommitted แล้วคืนทีหลัง ห้ามแตะ branch demo-sales)
- [x] copy publish/releases/v3.04/gdBasket_v3.04.ex5 (จาก 2-EAfactory) -> public/downloads/gdbasket/gdBasket_v3.04.ex5 (track ปกติ ไม่ ignore)
- [x] เพิ่ม entry 'gdbasket-vX.YY' ใหม่ (v3.04) ใน src/pages/api/downloads/[slug].ts (map DOWNLOADS)
- [x] แก้ src/pages/d/[slug].ts (SHORT_LINKS): gdbasket -> ชี้ v3.04 + เพิ่ม shortlink version-specific ของ v3.04 + เพิ่ม shortlink ของรุ่นที่เพิ่งตกจากล่าสุด (ถ้ายังไม่มี)
- [x] commit เฉพาะ 3 ไฟล์ (ex5 + 2 route) ห้าม git add -A -> push origin main -> คืน branch เดิมถ้า checkout มาจากที่อื่น

### Reference
# ดู STEP A เต็มใน publish/web/RELEASE-RUNBOOK.md ของ 2-EAfactory (checklist A1-A5) — ห้ามลอก schema มาซ้ำที่นี่ เปิดไฟล์นั้นตอนลงมือจริง

## Phase 3: STEP B — ROOM (หน้าโชว์)
- [x] src/data/ea.ts: version -> v3.04 (+ description ถ้าคำโปรยเปลี่ยน)
- [x] src/pages/ea/gdbasket.astro: const DL_LATEST/DL_ รุ่นเก่าใหม่ + array releases (แถวใหม่ latest:true url DL_LATEST, แถวรุ่นก่อนหน้า latest:false url version-specific) + fileRows (Releases note + แถว gdBasket v3.04) + installSteps + Layout description + badge เลขทุกจุด (header/toolbar/sub-nav/file-note/commit bar) + changelog card เพิ่ม bullet รุ่นใหม่บนสุด (เนื้อหาจาก CHANGELOG.md v3.04: อ่านกำไรสดจากประวัติดีลจริง / ตัวนับรอบเดินหน้าจากวันติดตั้ง / ฝาก-ถอนไม่กระทบเลข / ความจำผูกเลขบัญชี / ถอด Rolling Capital ชั่วคราว)
- [x] src/pages/ea/gdbasket/changelog.astro: เพิ่ม section release ใหม่บนสุด (badge latest) + ปลด class latest ออกจาก block รุ่นก่อนหน้า + เปลี่ยนปุ่มโหลดของ block นั้นเป็น version-specific link
- [x] CLAUDE.md (ROOM) sync บรรทัด Pages ให้ตรงจำนวนรุ่น publish จริง
- [x] npm run build ผ่าน (warning courses/lessons empty = ปกติ) -> commit เฉพาะไฟล์ที่แก้ (ห้าม -A, dist/ gitignored) -> push origin HEAD (master)

### Reference
# ดู STEP B เต็มใน publish/web/RELEASE-RUNBOOK.md ของ 2-EAfactory (checklist B1-B6, รายละเอียดจุดแก้ครบทุกไฟล์) — เปิดไฟล์นั้นตอนลงมือจริง

## Phase 4: STEP C + Verify + ปิดงาน
- [x] bump parent gitlink WORKSPACE: git add projects/2-EAfactory projects/7-ROOM (เฉพาะ 2 path นี้) -> commit -> push
- [x] Verify 5 ข้อหลัง deploy (รอ Vercel ~1-2 นาที): intensivetrader.com/d/gdbasket โหลดไฟล์ v3.04 ขนาดตรง / shortlink รุ่นเก่ายังโหลดได้ / room.intensivetrader.com/ea/gdbasket เลขรุ่น+ปุ่มโหลด+Releases = v3.04 / room.intensivetrader.com/ea/gdbasket/changelog บล็อกใหม่บนสุด + ปุ่มรุ่นเก่าชี้ version-specific / การ์ด home room.intensivetrader.com version ตรง
- [x] /done ปิดงาน + cleanup BACKLOG entry ของใบงานทั้งคู่ (publish-build + web-update)
