---
project: 7-ROOM
created: 2026-07-31
last_updated: 2026-07-31
status: done
---

## Target / Goal

### เป้าหมาย
ทำได้: เปิดหน้า room.intensivetrader.com/ea/gdbasket เห็นการ์ด 3 ใบเรียงชุด IB(แดง)/VPS(ทอง)/Copy(เขียว) แบบ A (IB เต็มกว้างด่านแรก + VPS/Copy คู่ล่าง) สีวิ่งทั้งใบ ปุ่มแยกสีน้ำหนักเท่ากัน มือถือ stack IB->VPS->Copy ตรง mockup 100%

### รายละเอียด
- SSOT ดีไซน์ = C:\WORKSPACE\.claude\artifacts\gdbasket-vps-copy-cards-mockup.html (สี/โครง/ก็อปข้อความ/layout เอาจากนี่ 100%)
- hue ต่อการ์ด: IB=แดง 220,38,38 / VPS=ทอง 245,158,11 / Copy=เขียว 34,197,94 — ทุก element ในใบ (พื้น gradient / border / eyebrow / ไอคอน / จุด bullet / ref-code border) ผูก hue เดียวผ่านตัวแปร --hue-r/g/b (สูตร CSS เดียวกันทุกใบ)
- ปุ่ม CTA แยกสีแต่คุมน้ำหนักเท่ากัน (พื้นเฉด 600 / border เฉด 500 / text ขาว): IB ใช้ .repo-download เดิม (#DC2626 / #EF4444) / VPS .btn-gold (#D97706 / #F59E0B) / Copy .btn-green (#16A34A / #22C55E)
- การ์ด IB เดิมโทนทอง (secondary) เปลี่ยนเป็นแดง — แทนที่ section .affiliate-note (gdbasket.astro 220-242) ด้วยบล็อก aff-card 3 ใบ
- href ใช้ const เดิมในไฟล์ (บรรทัด 14-17): IB {XM_AFF} / VPS {VPS_AFF} / Copy {COPYTRADE_URL} / รหัส {XM_CODE} — ปุ่มคัดลอกต้องทำงาน (data-copy={XM_CODE} class=copy-code ของเดิม script ท้ายไฟล์ผูกอยู่), ปุ่ม a ทุกอันใส่ rel=noopener noreferrer sponsored
- VPS callout เดิม (astro 448-451) + Copy Trade section header/callout เดิม (453-461) ซ้ำกับการ์ดใหม่ => ลบ; Risk Warning copytrade เดิม (.risk-note 462-465) = legal ต้องคงไว้ ห้ามหาย (ย้ายไปวางใต้การ์ด Copy หรือคงท้ายบล็อก)
- CSS ใหม่ห้ามทับ .repo-download base + .ref-code base เดิม (ใช้ทั่วหน้า เช่นปุ่มโหลด EA) — เพิ่มเฉพาะ modifier (.btn-gold/.btn-green) + class การ์ดใหม่ + override แบบ scope .aff-card เท่านั้น
- responsive: เพิ่ม @media (max-width:600px){ .cards-2col{ grid-template-columns:1fr } } ให้คู่ล่าง stack บนมือถือ (breakpoint เดิมของหน้า = 1020/820/600)
- ข้อความการ์ด VPS: eyebrow 'VPS ที่ผมใช้เอง' / หัว 'รัน EA 24 ชม. ไม่ต้องเปิดคอม' / bullet: รัน 24 ชม. / ปิดคอม-เน็ตหลุดไม่กระทบ / ทดลองฟรี 7 วัน / เริ่ม 290 บาท/เดือน / ปุ่ม 'ดู VPS ที่ผมใช้'
- ข้อความการ์ด Copy: eyebrow 'ไม่อยากลง EA เอง' / หัว 'Copy ไม้ VELOCE อัตโนมัติ' / bullet: ก็อปไม้อัตโนมัติ / ระบบทางการ XM / ขั้นต่ำ 50 ดอลลาร์ / ทำงาน 24 ชม. / ปุ่ม 'ดูรายละเอียด Copy Trade'

### Scope Boundary
**In scope:**
- projects/7-ROOM/src/pages/ea/gdbasket.astro — section .affiliate-note (220-242) + VPS/Copy callout ใน install (448-465)
- projects/7-ROOM/src/styles/global.css — เพิ่มชุด CSS การ์ด (aff-card system + btn modifier + media query)

**Out of scope:**
- const ลิงก์ 14-17 (มีครบแล้ว ไม่แก้ค่า)
- sidebar / README body / KPI / changelog / myfxbook
- gdbasket-full-copy-mockup.html (SSOT copy หน้าเดิม — ไม่แตะ)
- src/data/ea.ts การ์ด home hub

### Non-goals
- ไม่เปลี่ยนลิงก์ปลายทาง (ใช้ const เดิม)
- ไม่เปลี่ยนไป VPS ฟรีของ XM (ยึด MT Cloud เดิมตาม VPS_AFF)
- ไม่แตะปุ่มโหลด EA / ระบบ myfxbook / ระบบคัดลอกรหัส
- ไม่ทำ layout แบบ B (3 การ์ดเท่ากัน) — อาร์ทเลือกแบบ A แล้ว

### Skill Flow
- /build -> /qc -> /done

### Stop Conditions
- global.css .repo-download / .ref-code ต่างจากที่ plan อ้าง (อาจ stale)
- astro บรรทัด affiliate-note (220-242) หรือ callout (448-465) เลื่อนจากที่ระบุ
- แก้ CSS แล้วปุ่มโหลด EA / ปุ่มอื่นที่ใช้ .repo-download หน้าตาเพี้ยน
- spec ขัดกัน หรือข้อมูลไม่พอ

### Report-Back Contract
- ไฟล์ที่แก้
- npm run build ผ่านไหม
- การ์ด 3 ใบสีถูก (IB แดง/VPS ทอง/Copy เขียว) + ปุ่มลิงก์ถูกทั้ง 3
- Risk Warning copytrade ยังอยู่ครบไหม
- VPS/Copy callout เดิมที่ซ้ำลบครบไหม + ปุ่มโหลด EA ไม่ regression

# gdBasket web — การ์ด IB / VPS / Copytrade เรียงชุด (แบบ A)

> เพิ่มการ์ด VPS + Copytrade เรียงชุดกับการ์ด IB (แบบ A) บนหน้า gdBasket room — ยก mockup ที่อาร์ท approve ลงหน้าจริง + เปลี่ยนโทน IB เป็นแดง + ลบ VPS/Copy callout เดิมที่ซ้ำ (คงคำเตือน copytrade)

## Phase 1: CSS การ์ด system (global.css)
- [x] Pre-build Review: อ่าน plan ทั้งไฟล์ + gdbasket.astro (220-242 และ 448-465) + global.css (.affiliate-note / .repo-download / .ref-code / .repo-columns + breakpoints) + mockup SSOT ก่อนแก้; grep ว่า .repo-download กับ .ref-code ถูกใช้จุดอื่นของหน้าไหม (กัน CSS ใหม่ทับ base จนปุ่มโหลด EA เพี้ยน); ถ้าบรรทัด/โครงต่างจาก reference หรือ spec ขัด ให้หยุดถามก่อนลงมือ; ชัดแล้วตอบ plan clear แล้วเริ่ม task ถัดไป
- [x] แก้ `projects/7-ROOM/src/styles/global.css` เพิ่มชุด CSS การ์ดใหม่ copy ตรงจาก mockup style block (บรรทัด 107-268 ใน gdbasket-vps-copy-cards-mockup.html): .aff-card + ตัวแปร --hue-r/g/b + .card-ib/.card-vps/.card-copy + .pill-row + .pill + .aff-list + .card-icon + .cards-2col + .repo-download.btn-gold + .repo-download.btn-green + .aff-card scope override ของ .ref-code (border ใช้ hue) + @media (max-width:600px){ .cards-2col{ grid-template-columns:1fr } }. Scope: ห้ามแก้ .repo-download base และ .ref-code base เดิม (ใช้ทั่วหน้า) — เพิ่มเฉพาะ modifier .btn-gold/.btn-green และ selector ที่ scope ใต้ .aff-card; .affiliate-note เดิมคงไว้ได้ (จะเลิกใช้หลัง Phase 2). Acceptance: `npm run build` ผ่าน, ทุก class จาก mockup มีครบ, ปุ่มที่ใช้ .repo-download อื่นในหน้ายังหน้าตาเดิม (ไม่มี margin-top เกินมาดันปุ่ม)

### Reference
SSOT: C:\WORKSPACE\.claude\artifacts\gdbasket-vps-copy-cards-mockup.html — style block บรรทัด 107-268 คือ CSS ที่ต้องยกลง (มีคอมเมนต์กำกับทุกบล็อกแล้ว).

จุดระวัง global.css เดิม: .repo-download (ปุ่ม CTA base — ใช้ปุ่มโหลด EA ทั่วหน้า) กับ .ref-code (base) มีอยู่แล้ว. mockup redefine .repo-download มี margin-top:13px และ .ref-code ใช้ hue var — ห้ามยกทับ base เดิม. เอาเฉพาะ:
- .repo-download.btn-gold / .repo-download.btn-green (modifier ใหม่)
- .aff-card .ref-code { border-color: rgba(var(--hue-r),var(--hue-g),var(--hue-b),.45) } (scope override เฉพาะในการ์ด)
- ส่วน margin-top ของปุ่มในการ์ด ใช้ .aff-card .repo-download { margin-top:13px } (scope) หรือ .cards-2col .aff-card .repo-download { margin-top:auto } ตาม mockup — อย่าแตะ base

## Phase 2: markup การ์ด + จัดการของเดิม (gdbasket.astro)
- [x] แก้ `projects/7-ROOM/src/pages/ea/gdbasket.astro` แทนที่ทั้ง section `.affiliate-note` (บรรทัด 220-242 การ์ด IB โทนทอง) ด้วยบล็อกการ์ด 3 ใบตาม mockup body (บรรทัด 300-356): การ์ด IB `<div class=aff-card card-ib>` (eyebrow/h2/desc/pill-row/ref-code/ปุ่ม/disclosure) ตามด้วย `<div class=cards-2col>` มี VPS `.card-vps` + Copy `.card-copy`. แปลง href ใน mockup กลับเป็น const: IB href={XM_AFF} / VPS href={VPS_AFF} / Copy href={COPYTRADE_URL} / รหัสใน ref-code strong={XM_CODE}. ปุ่มคัดลอกใช้ของเดิม `<button type=button data-copy={XM_CODE} class=copy-code>` (แทน button เปล่าใน mockup — script ท้ายไฟล์ผูก class นี้). ทุก `<a>` ปุ่มใส่ rel="noopener noreferrer sponsored". Acceptance: render การ์ด IB แดง / VPS ทอง / Copy เขียว, ปุ่ม IB->affs.click/jih0m, VPS->bit.ly/MTCloudVPS, Copy->social.tp-redirect, กดคัดลอกได้รหัส KWASATI
- [x] แก้ `projects/7-ROOM/src/pages/ea/gdbasket.astro` ลบ VPS callout เดิม (บรรทัด 448-451 กล่อง `<a ... bg-primary/5>`) + Copy Trade section เดิม (h2 'Copy Trade VELOCE' + `.readme-callout` เขียว, 453-461) เพราะย้ายขึ้นเป็นการ์ดแล้ว. คง Risk Warning copytrade เดิม (`.risk-note` 462-465 ย่อหน้า 'Risk Warning...การ Copytrade...') — ย้ายไปวางต่อท้ายการ์ด Copy `.card-copy` (ใต้ disclosure) หรือคงเป็น standalone ใต้บล็อกการ์ด 3 ใบ; ห้ามลบ. Acceptance: VPS/Copy โผล่ที่เดียว (บล็อกการ์ด) ไม่ซ้ำใน install, ข้อความ Risk Warning copytrade ยังครบ, ขั้นตอนติดตั้งอื่น (install-list / risk-note อัปเกรด 443-446) ไม่กระทบ
- [x] verify: รัน `npm run build` ที่ `projects/7-ROOM` ผ่านไม่ error; เปิด preview เช็คสายตา — desktop การ์ด 3 ใบเรียงแบบ A (IB เต็มกว้าง + VPS/Copy คู่ล่างสูงเท่ากันปุ่มเรียงเส้นเดียว), มือถือ stack IB->VPS->Copy, สี hue ถูกทั้ง 3. Acceptance: build ผ่าน + layout ตรง mockup แบบ A

### Reference
current (gdbasket.astro 220-242 — การ์ด IB ที่จะถูกแทน):
```astro
<section class="affiliate-note" aria-label="ข้อมูลโบรก">
  <div>
    <small>โบรกที่ผมเทรดเอง</small>
    <h2>gdBasket ทำมาเพื่อ XM โดยเฉพาะ</h2>
    <p>EA ตัวนี้ล็อกให้รันเฉพาะ GOLD บน XM ...</p>
    <div class="flex gap-2 flex-wrap mt-3 ..."> pill 3 อัน </div>
  </div>
  <div class="ref-code referral-strip"> รหัส KWASATI + ปุ่มคัดลอก </div>
  <a href={XM_AFF} ... class="repo-download mt-3">เปิดบัญชี XM ผ่านลิงก์เพื่อน</a>
  <p class="disclosure">...</p>
</section>
```

current (gdbasket.astro 448-465 — callout/section ที่จะจัดการ):
- 448-451: `<a href={VPS_AFF} ... bg-primary/5 border border-primary/30 ...>` VPS callout (ลบ)
- 453: `<h2>Copy Trade VELOCE</h2>` (ลบ)
- 454-461: `<div class=readme-callout style=border-left-color:green> ... badge ใหม่! ... <a href={COPYTRADE_URL} class=repo-download>ดูรายละเอียด</a></div>` (ลบ)
- 462-465: `<div class=risk-note>` ย่อหน้า Risk Warning copytrade (คงไว้ ห้ามลบ — ย้ายไปใต้การ์ด Copy)

new markup: ยกจาก mockup body บรรทัด 300-356 (การ์ด IB + cards-2col) — icon SVG, โครง, ข้อความ เอาตรงจาก mockup; เปลี่ยนแค่ href เป็น const + ปุ่มคัดลอกเป็น button.copy-code[data-copy] เดิม
