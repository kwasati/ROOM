---
project: 7-ROOM
created: 2026-07-28
last_updated: 2026-07-28
status: done
---

## Target / Goal

### เป้าหมาย
ทำได้: หน้า /ea/gdbasket ใช้เนื้อหาและลำดับจาก mockup ที่อาร์ทอนุมัติ อธิบายจุดเด่น VELOCE และความเสี่ยงครบ โดยระบบสดเดิมยังทำงานและ build ผ่าน

### รายละเอียด
- ยึด C:\WORKSPACE\.claude\artifacts\gdbasket-full-copy-mockup.html เป็น source of truth ด้าน copy, ลำดับ section, สี และการจัดวางที่อาร์ทอนุมัติ
- ยึด C:\WORKSPACE\projects\7-ROOM\src\pages\ea\gdbasket.astro เป็น source of truth ด้านโครง repo-style, constants, links, dynamic data, sidebar, popup และ interaction เดิม
- ยึด README public gdBasket v3.03 เป็น source of truth ด้านผลิตภัณฑ์: ตัวแจกเหลือ VELOCE ตัวเดียว ห้ามแสดง strada+ หรือ sport+ เป็นตัวเลือก
- จุดเด่นแกนต้องมี Adaptive Grid Behavior, Market Temperature และ PPTS ที่รวมการเติมไม้เมื่อราคาถูกทางกับการไล่ล็อกกำไร
- คำอธิบาย VELOCE ต้องตอบว่าคือเครื่องยนต์ 2 บ้าน ทำอะไรเมื่อตลาดเป็นใจ ทำอะไรเมื่อตลาดไม่เป็นใจ และผ่านการทดสอบอย่างไร
- การ์ด XM ต้องมีแถบรหัสผู้แนะนำ KWASATI เต็มแนวกว้าง พร้อมปุ่มคัดลอกที่ใช้งานได้
- ปุ่มดูสถิติเต็มต้องใช้รูปแบบเดิมของหน้า production: มีกล่องเกริ่น ข้อความสรุป 7 กลุ่ม และปุ่ม ดูสถิติเต็มทุกตัว ไม่มีย่อ
- ส่วนความเสี่ยงใช้กรอบและพื้นหลังสีเทากลืนกับเนื้อหา ใช้สีเตือนเพียงเล็กน้อย และยังอ่านง่ายทั้ง desktop และ mobile
- คง Trading Journal, Myfxbook, Supabase fetch, download links, affiliate links, changelog, release widget, modal สถิติ และ sidebar เดิม

### Scope Boundary
**In scope:**
- C:\WORKSPACE\projects\7-ROOM\src\pages\ea\gdbasket.astro
- C:\WORKSPACE\.claude\artifacts\gdbasket-full-copy-mockup.html เป็น reference เท่านั้น

**Out of scope:**
- C:\WORKSPACE\projects\7-ROOM\src\styles\global.css ยกเว้นพบว่าทำ scoped style ใน route ไม่ได้จริง
- ระบบ Trading Journal, Myfxbook, Supabase, API และฐานข้อมูล
- หน้า Rolling Capital, changelog และหน้าอื่นใน ROOM
- ไฟล์ EA, version, ตัวดาวน์โหลด และ release

### Non-goals
- ไม่ deploy production ใน plan นี้ เพราะต้องให้อาร์ทเปิดตรวจหน้า build ก่อน
- ไม่เปลี่ยนตัวเลขผลทดสอบหรือข้อมูลพอร์ตสด
- ไม่สร้าง theme ใหม่และไม่รื้อโครง repo-style เดิม
- ไม่เพิ่มเครื่องยนต์หรือความสามารถที่ไม่มีใน public v3.03

### Skill Flow
- /plan
- /build
- user visual approval
- /done task

### Stop Conditions
- ไฟล์จริงต่างจาก reference จนไม่สามารถรักษา dynamic ids หรือระบบ sidebar เดิมได้
- พบว่าความจริงผลิตภัณฑ์ public v3.03 ขัดกับ README หรือ mockup
- build พบ error ที่ต้องขยาย scope ไปแก้ module อื่น

### Report-Back Contract
- สรุป section ที่แก้จริง
- ผล npm run build และหลักฐาน route
- ข้อแตกต่างจาก mockupถ้ามี
- รายการสิ่งที่คงเดิมและไม่ได้แตะ
- สถานะ commit, push และ deploy

# gdBasket Content Rewrite From Approved Mockup

> พอร์ต full mockup ที่อาร์ทอนุมัติเข้าหน้า gdBasket จริง โดยรักษาระบบสดและโครงหน้าเดิมทั้งหมด พร้อมแก้ข้อมูลเก่าเรื่องหลายเครื่องยนต์ให้ตรงกับ public v3.03

## Phase 1: Port approved gdBasket content mockup
- [x] Claude Pre-build Review: อ่าน plan ทั้งไฟล์, C:\WORKSPACE\projects\7-ROOM\CLAUDE.md, C:\WORKSPACE\projects\7-ROOM\src\pages\ea\gdbasket.astro และ C:\WORKSPACE\.claude\artifacts\gdbasket-full-copy-mockup.html ก่อนแก้ code; ตรวจ scope, acceptance, path, reference snippet และระบบ dynamic ที่ห้ามแตะ; ถ้าข้อมูลขัดกันหรือไม่พอให้หยุดถามอาร์ท; ถ้าชัดให้ยืนยัน plan clear แล้วเริ่ม task ถัดไป — Acceptance: ระบุได้ชัดว่าอะไรจะเปลี่ยนและอะไรต้องคงเดิมก่อน edit
- [x] แก้ C:\WORKSPACE\projects\7-ROOM\src\pages\ea\gdbasket.astro ส่วน arrays และสารบัญให้ตรงผลิตภัณฑ์ปัจจุบัน: features, howSteps, fileRows และ installSteps ต้องสื่อ VELOCE ตัวเดียว, 3 จุดเด่นแกน, ความเสี่ยง และขั้นติดตั้งที่ไม่ให้เลือกเครื่องยนต์ — scope: ห้ามแก้ constants URL, release array, Myfxbook fetch หรือ dynamic ids — Acceptance: ไม่พบข้อความ strada+ หรือ sport+ ในส่วน product choice และสารบัญชี้ anchor ใหม่ถูกต้อง
- [x] แก้ C:\WORKSPACE\projects\7-ROOM\src\pages\ea\gdbasket.astro ส่วน README markup และ scoped style ให้ตรง mockup: จัดลำดับภาพรวม, จุดเด่น 3 แกน, วิธีทำงาน, 2 บ้าน, Common-TP/Swap/Common Stop, Capital/Rolling, ความพร้อมใช้จริง, VELOCE, ที่มา, ผลทดสอบ, ความเสี่ยง, install และ Copy Trade; เพิ่มแถบรหัส KWASATI เต็มแนวกว้างพร้อมปุ่มคัดลอก; ใช้ CTA สถิติรูปแบบ production เดิม; ใช้ risk card สี neutral — scope: ห้ามย้าย logic ไป global.css และห้ามเปลี่ยน backend interaction — Acceptance: หน้าตาและ copy ตรง mockup, VELOCE อธิบายตลาดเป็นใจและไม่เป็นใจ, ปุ่ม copy และ modal เปิดปิดได้, responsive breakpoint เดิมไม่พัง
- [x] ตรวจ C:\WORKSPACE\projects\7-ROOM ด้วย npm run build และตรวจผลหน้า /ea/gdbasket จาก output ที่ build แล้ว: anchors, รูป, ปุ่มคัดลอก, modal สถิติ, sidebar, dynamic element ids และไม่มี console/build error — scope: ไม่ deploy และไม่ commit final ก่อนอาร์ทตรวจใช้จริง — Acceptance: build exit 0, route ถูกสร้าง, strings สำคัญครบ, strada+ และ sport+ ไม่ปรากฏเป็นตัวเลือก, รายงานหลักฐานตรวจกลับอาร์ท

### Reference
```astro
# current: src/pages/ea/gdbasket.astro
const features = [
  { title: 'Adaptive Buy Grid', desc: 'ราคาลงยิ่งซื้อเพิ่มถัวเฉลี่ย...' },
  { title: 'PPTS', desc: 'ราคาวิ่งเข้าทางไม่รีบปิด...' },
  { title: 'Engine Profile', desc: '3 สไตล์การขับ...' },
];

<h2 id="modes">Engine Profile — เลือกเครื่องยนต์ให้เข้ากับใจคุณ</h2>
<p>gdBasket มี 3 เครื่องยนต์ให้เลือก...</p>

# new: approved mockup
<h2 id="features">จุดเด่นของระบบ</h2>
<!-- Adaptive Grid Behavior / Market Temperature / PPTS -->

<h2 id="modes">VELOCE · เครื่องยนต์ 2 บ้านที่รู้จังหวะบุกและระวัง</h2>
<p>VELOCE คือสูตรเรือธงของ gdBasket ที่ให้บ้านบนและบ้านล่างทำงานคู่กัน...</p>

<div class="ref-code">
  <span>รหัสผู้แนะนำ</span><strong>KWASATI</strong><button>คัดลอก</button>
</div>

<div class="full-report-card">
  <strong>อยากรู้ตัวเลขทุกตัวแบบไม่มีย่อ?</strong>
  <button>ดูสถิติเต็มทุกตัว ไม่มีย่อ →</button>
</div>
```
