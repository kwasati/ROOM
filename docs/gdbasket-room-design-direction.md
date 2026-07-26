# 7-ROOM Full Mockup — Design Direction

## สามแนวทางที่พิจารณา

### Theme Name: Signal Deck

**Very Brief Intro:** ห้องควบคุมการเทรดแบบ editorial ที่เข้ม สุขุม และอ่านง่าย ใช้เส้นสัญญาณกับแผงข้อมูลเป็นภาษาภาพ โดยไม่ทำให้เว็บกลายเป็น dashboard หนัก ๆ

**Probability:** 0.037

### Theme Name: Red Ledger

**Very Brief Intro:** ภาพลักษณ์คล้ายสมุดบันทึกนักเทรดระดับมืออาชีพ เน้นตัวอักษรใหญ่ พื้นที่ว่าง และเส้นคั่นแบบสิ่งพิมพ์ เพื่อให้หลักฐานกับเนื้อหาดูจริงจัง

**Probability:** 0.071

### Theme Name: Night Workshop

**Very Brief Intro:** ห้องทดลอง EA ยามค่ำที่เป็นกันเองกว่า ใช้พื้นผิวโลหะด้าน ป้ายเล็ก และจังหวะการ์ดไม่เท่ากัน เพื่อสื่อว่าทุกชิ้นผ่านการลงมือทำจริง

**Probability:** 0.019

## แนวทางที่เลือก: Signal Deck

### Design Movement

**Neo-industrial editorial interface** ผสมภาษาของ trading terminal, technical manual และนิตยสารเทคโนโลยี โดยหลีกเลี่ยงภาพ dashboard ทั่วไปและการ์ดที่เรียงเท่ากันทั้งหน้า

### Core Principles

1. **Guide before browse:** ทุกหน้าต้องบอกผู้ใช้ว่า “นี่คืออะไร เหมาะกับใคร และควรทำอะไรต่อ” ก่อนแสดงรายละเอียดทั้งหมด
2. **Proof before promotion:** ผลทดสอบ เวอร์ชัน และสถานะการใช้งานต้องมาก่อน broker/VPS CTA
3. **Controlled density:** ข้อมูลแน่นได้ แต่ต้องแบ่งจังหวะด้วยพื้นที่ว่าง เส้นนำสายตา และตัวเลขเด่น ไม่ใช้กรอบล้อมทุกอย่าง
4. **One decisive action:** แต่ละช่วงหน้ามีการกระทำหลักเพียงหนึ่งอย่าง การกระทำรองต้องไม่แข่งกัน

### Color Philosophy

พื้นหลักเป็น **charcoal-black ที่มีน้ำเงินเล็กน้อย** เพื่อให้รู้สึกเหมือนพื้นที่ทำงานจริง ไม่ดำสนิทจนแบน สีแดง IntensiveTrader ใช้กับการนำทางและจุดตัดสินใจเท่านั้น ส่วน **signal amber** ใช้บอกลำดับ/สิ่งที่ควรสังเกต และ **profit mint** ใช้เฉพาะข้อมูลผลลัพธ์บวก ทำให้ความหมายของสีคงที่และจดจำได้

### Layout Paradigm

ใช้ **asymmetric signal rail**: เนื้อหาหลักเดินเป็นแนวตั้งขนาดกว้าง ส่วน rail ด้านขวาเก็บสถานะ เวอร์ชัน สารบัญ และ CTA ที่สัมพันธ์กับจุดอ่าน หน้าแรกไม่ใช้ grid catalog กลางหน้า แต่ใช้ featured artifact ขนาดใหญ่หนึ่งชิ้น แล้วมี “เส้นทางที่แนะนำ” กับสิ่งที่จะเพิ่มในอนาคตอยู่รอบ ๆ อย่างมีลำดับ

### Signature Elements

- **Signal rail:** เส้นแนวตั้งบางที่มี node แสดงลำดับ เข้าใจ → ดูผล → เช็กความพร้อม → ดาวน์โหลด
- **Telemetry strip:** แถบตัวเลขสั้น ๆ ไม่มีกรอบหนา แสดงรุ่นล่าสุด ความเสี่ยง และหลักฐานสำคัญ
- **Cut-corner panels:** แผงข้อมูลบางชิ้นตัดมุมหนึ่งด้าน ใช้กับสถานะและ CTA เท่านั้น ไม่ใช้ทุกการ์ด

### Interaction Philosophy

การโต้ตอบต้องให้ feedback ทันทีและทำให้ผู้ใช้เข้าใจข้อมูลเพิ่มขึ้น เช่น สลับ SPORT+/STRADA+ แล้วทั้งตัวเลข สรุป และข้อความเหมาะกับใครเปลี่ยนพร้อมกัน ปุ่มดาวน์โหลดเปิด readiness panel สั้น ๆ ก่อน ไม่พุ่งออกจากหน้าโดยไม่มีบริบท

### Animation

หน้าโหลดใช้ reveal ตามลำดับ rail ครั้งเดียว: headline → featured EA → proof strip → next action ระยะ 40–60ms ต่อชิ้น การ hover ใช้เส้นขอบ/แสงแดงเคลื่อนเล็กน้อย ไม่ยกการ์ดลอยแรง การสลับ profile ใช้ crossfade 180ms กับ translate 6px และต้องปิด motion เมื่อผู้ใช้ตั้ง reduced motion

### Typography System

- **Display/ตัวเลข/ภาษาอังกฤษ:** Chakra Petch 600–700 เพื่อให้มีกลิ่น technical แต่ยังอ่านง่าย
- **Body/ภาษาไทย:** IBM Plex Sans Thai 400–600 เพื่อความคมและเป็นมืออาชีพ
- H1 ใช้ 52–68px desktop และ 34–42px mobile, line-height แน่น 1.05–1.15
- หัวข้อ section ใช้เลขลำดับ monospace-like + Thai heading ขนาด 26–34px
- ตัวเลขผลลัพธ์ใหญ่กว่า label อย่างชัดเจนและใช้ tabular numerals

### Brand Essence

**7-ROOM คือพื้นที่รวมเครื่องมือและบทเรียนจากการเทรดจริง สำหรับคนที่ต้องการเข้าใจหลักฐานก่อนใช้งาน — ตรงไปตรงมา, รอบคอบ, ลงมือจริง**

### Brand Voice

Headline พูดตรงและมีจุดยืน CTA บอกผลที่จะได้ ไม่ใช้คำกว้าง ๆ แบบ “เริ่มต้นวันนี้”

ตัวอย่าง:
- “เครื่องมือที่กูใช้จริง พร้อมหลักฐานก่อนมึงโหลด”
- “ดูผลทดสอบ แล้วค่อยเลือกโหมดที่เหมาะกับพอร์ต”

### Wordmark & Logo

ใช้สัญลักษณ์ **ประตูห้องหมายเลข 7 ที่รวมกับเส้นกราฟขาขึ้นหนึ่งจังหวะ** เป็น mark เดี่ยว ไม่มีตัวอักษรในไอคอน Wordmark ใช้ `ROOM / 07` แบบ custom lockup โดยตัดปลายตัว R และเลข 7 ให้เป็นมุมเดียวกับ cut-corner panels

### Signature Brand Color

**Signal Red — #F04444** เป็นแดงสว่างที่เห็นชัดบนพื้น charcoal แต่ไม่ neon ใช้เฉพาะ navigation state, primary CTA และ node สำคัญ

## Style Decisions

- Dark theme only และต้องต่อกับ IntensiveTrader navbar แบบเว็บเดียวกัน
- หน้าหลักต้องดูตั้งใจแม้มี EA เพียงหนึ่งตัว ห้ามสร้างการ์ดหลอกเพื่อเติมพื้นที่
- gdBasket เรียงเนื้อหา: เข้าใจ → เหมาะกับใคร → หลักฐาน → profile → วิธีติดตั้ง → ดาวน์โหลด → broker/VPS
- Mobile มี sticky download bar หลังผู้ใช้อ่าน proof section แล้ว ไม่แสดงตั้งแต่เปิดหน้า
- ไม่ใช้ Inter, purple gradient, glass card ซ้ำทั้งหน้า หรือมุมโค้งเท่ากันทุก component

- ห้ามใช้ section สีครีมหรือกระดาษเต็มแถบ การเปลี่ยนจังหวะต้องอยู่ใน charcoal, blue-black, graphite หรือพื้นผิวอุตสาหกรรมเข้ม
- Signal rail เป็นกระดูกสันหลังของหน้า ทุก section หลักต้องเชื่อมกับ numbered node ไม่ลอยเป็น marketing block แยกกัน
- กล่องสงวนไว้สำหรับ status, proof, readiness และ primary CTA ส่วนคำอธิบายใช้ editorial line, telemetry strip และพื้นที่ว่างแบบอสมมาตร
- ROOM / 07 wordmark กับ door-7 mark ต้องเป็นลายเซ็นซ้ำที่มองเห็นชัด ไม่ใช่โลโก้เล็กใน navigation เท่านั้น
- พื้นที่ proof ต้องให้ความรู้สึกเป็น versioned test log และ inspected telemetry ไม่ใช่ product card เชิงโปรโมต

### Requirement Override — โครงจริงที่ต้องรักษา

- หน้า **Room** เป็น category/classroom index ขั้นกลางระหว่าง Home กับ course/EA จึงต้องคง filter, list และ inline course outline เป็น hierarchy หลัก ไม่ยก gdBasket เป็น product hero จนกลายเป็น landing page
- หน้า **gdBasket** ยึด GitHub repository + README character เดิมเป็น ground truth: file browser, markdown document และ utility sidebar มาก่อน signal-rail/product storytelling
- ข้อเสนอจาก visual review ที่ให้ Room กลับไปเน้น featured EA หรือให้ gdBasket เปลี่ยนเป็น numbered signal rail ไม่ใช้ เพราะขัดกับ requirement ล่าสุดโดยตรง
- รับเฉพาะข้อเสนอที่ไม่เปลี่ยนโครง: ทำ ROOM / 07 signature ให้ชัดขึ้น ลดภาษากลาง ๆ และคง status/proof wording แบบตรงไปตรงมา
