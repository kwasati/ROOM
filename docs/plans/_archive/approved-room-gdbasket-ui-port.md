---
project: 7-ROOM
created: 2026-07-16
last_updated: 2026-07-16
status: done
---

## Target / Goal

### เป้าหมาย
ทำได้: เปิด 7-ROOM production แล้วหน้า `/` ตรงกับ approved Room category/classroom index และหน้า `/ea/gdbasket` ตรงกับ approved GitHub-style repository plus README mockup โดยข้อมูลจริง ลิงก์จริง และ runtime behavior เดิมยังทำงานครบ

### รายละเอียด
- Source of truth ด้านภาพและ hierarchy คือ buildable artifact `C:/WORKSPACE/.claude/artifacts/7-room-approved-room-gdbasket-20260716/` และ approved checkpoint `manus-webdev://84594ff8`; ห้ามตีความ style ใหม่จากศูนย์
- Room `/` คือหน้า category/classroom index ขั้นกลางระหว่างเว็บหลักกับ course หรือ EA ไม่ใช่ marketing landing page
- Room ต้องคงลำดับ compact intro พร้อม ROOM / 07 signature และสถิติ, filter pills, pinned group, full item list, inline course outline และ lesson content
- Room mapping: mockup `room-intro` ใช้ข้อมูล count จาก `courses`, `eaItems`, `totalLessons`; `filter-pills` map กับ production filters `all`, `learn`, `ea`; `resource-grid` map กับ `pinnedItems` และ `restItems`; `course-preview` map กับ production `#course-content`, lesson tabs, rendered Markdown และ `BrokerCTA`
- Room ต้องใช้ Astro content collections, `src/data/ea.ts`, SSR pin fallback และ Supabase `site_settings.content_pins` เดิม ห้ามย้ายไป local hard-coded Resource array แบบ mockup
- EA card ต้องเป็น direct link ไปหน้า EA; course card ต้องเปิดหรือปิด inline course panel; การเปลี่ยน filter ต้องปิด panel และรองรับ initial query `?filter=ea` หรือ `?filter=learn` เดิม
- gdBasket `/ea/gdbasket` ต้องคง character แบบ GitHub repository plus README; ห้ามทำเป็น product landing page, oversized hero, guided signal rail หรือ sales funnel
- gdBasket mapping: mockup `repo-breadcrumb`, `repo-header`, `repo-tabs`, `repo-toolbar`, `file-browser`, `affiliate-note`, `readme-card`, `release-card`, `repo-sidebar` map ตรงกับ production sections เดิมใน `src/pages/ea/gdbasket.astro`
- gdBasket README section order ต้องคง: chart และ overview, ทำงานยังไง, capital concept, Peak Profit Trail System, จุดเด่น, Engine Profile, backtest proof, วิธีติดตั้ง, risk guidance, changelog summary
- gdBasket ต้องคง production constants และ destinations ได้แก่ download, XM affiliate, referral, VPS, Trading Journal และ changelog; mockup toast หรือ placeholder download ห้ามถูก port
- gdBasket ต้องคง build-time Myfxbook fetch/fallback, runtime Trading Journal hydration, Myfxbook card hydration, proof table switching, detail toggles และ copy-code feedback; ห้ามแทนด้วยตัวเลขจำลองจาก mockup
- ห้ามแต่งผลกำไร release data rating review testimonial หรือ proof ใหม่; ทุกตัวเลขและข้อความ factual ใช้ production source เดิมเท่านั้น
- ใช้ dark theme และ production tokens ใน `src/styles/global.css`; `.pixel` ใช้เฉพาะ English และตัวเลขตาม project rule; Thai body copy ใช้ typography เดิมของเว็บ
- คง `src/layouts/Layout.astro`, `src/components/Navbar.astro`, metadata, OG/Twitter tags, shared navbar continuity และ affiliate/risk footer; แก้ shared shell เฉพาะเมื่อจำเป็นต่อ regression ที่พิสูจน์ได้และต้องหยุดถามก่อน
- Visual port ให้ย้ายเฉพาะ active selector groups จาก artifact: Room `.room-*`, `.catalog-*`, `.resource-*`, `.course-preview`, `.lesson-*`; gdBasket `.repo-*`, `.file-*`, `.affiliate-*`, `.readme-*`, `.engine-*`, `.proof-*`, `.install-*`, `.release-*`; ห้ามคัดลอก legacy `.home-*` หรือ `.product-*` blocks
- Responsive acceptance ต้องครอบคลุม desktop 1280px, tablet 820px และ mobile 375px; ไม่มี horizontal overflow; filters, tabs และ lesson tabs เลื่อนได้เมื่อพื้นที่ไม่พอ; gdBasket sidebar ต้องลงใต้ content บนจอแคบโดยไม่ซ่อนข้อมูลสำคัญ
- Interaction ใช้ Astro markup และ browser scripts เดิมเป็นฐาน ห้าม port React state hooks หรือ mockup toast เข้า production
- ทุกปุ่มและ tab ต้อง keyboard reachable, มี visible focus, state ใช้ `aria-pressed` หรือ `aria-selected` ตามความหมาย และ content update ไม่ทำให้ focus หายโดยไม่จำเป็น
- ก่อน commit ต้องผ่าน `npm run build`, functional matrix ทั้งสองหน้า, screenshot compare desktop/mobile กับ artifact และ user approval ตาม UI workflow

### Scope Boundary
**In scope:**
- projects/7-ROOM/src/pages/index.astro
- projects/7-ROOM/src/pages/ea/gdbasket.astro
- projects/7-ROOM/src/styles/global.css
- projects/7-ROOM/src/layouts/Layout.astro และ src/components/Navbar.astro ในฐานะ read-only regression boundary
- .claude/artifacts/7-room-approved-room-gdbasket-20260716/ ในฐานะ visual source of truth

**Out of scope:**
- projects/7-ROOM/src/data/ea.ts และ Astro content collection schema/content
- Supabase schema, site_settings pin admin, Myfxbook API shape และ Trading Journal backend
- MQL5 source, EA binary, backtest generation และ trading logic
- หน้า home ของ IntensiveTrader, course detail routes อื่น, changelog page และ journal page
- database, authentication, new API, CMS หรือ admin feature ใหม่

### Non-goals
- ไม่ redesign Room เป็น landing page เพราะหน้าที่ของมันคือ catalog ขั้นกลาง
- ไม่ redesign gdBasket เป็น product page เพราะ user ยืนยัน GitHub repository plus README character เดิม
- ไม่ copy SiteChrome React mockup ทับ production Layout หรือ Navbar
- ไม่เปลี่ยน URL, data source, release semantics, affiliate disclosure หรือ risk wording เพื่อให้เข้ากับ mockup
- ไม่ refactor data architecture หรือ runtime integration ถ้า visual port ไม่จำเป็น
- ไม่ commit ก่อน user เห็นผล visual และอนุมัติ

### Skill Flow
- /build approved-room-gdbasket-ui-port
- /qc plan .claude/plans/7-ROOM/approved-room-gdbasket-ui-port.md
- /qc
- /done

### Stop Conditions
- Artifact path เปิดไม่ได้หรือ mockup build ไม่ขึ้น
- Production file ต่างจาก current snippets จน mapping ใช้ไม่ได้
- การทำ visual fidelity จำเป็นต้องเปลี่ยน data source, API contract, shared Layout หรือ Navbar
- ข้อความหรือตัวเลขใน mockup ขัดกับ production factual data
- download, affiliate, live journal, Myfxbook หรือ Supabase pin behavior ไม่ชัด
- acceptance ข้อใดวัดไม่ได้หรือ spec ขัดกัน; ให้หยุดถาม user ก่อนลงมือ ห้ามเดา

### Report-Back Contract
- verdict ว่า Room และ gdBasket ตรง approved artifact แค่ไหน
- รายชื่อไฟล์ที่แก้และเหตุผลต่อไฟล์
- ผล npm run build และ functional matrix
- desktop/mobile screenshot paths หรือ comparison summary
- รายการ production behaviors ที่ยืนยันว่ารอดครบ
- unresolved differences หรือข้อจำกัดที่ยังเหลือ
- ขอ user approval ก่อน commit

# Port Approved Room Index and gdBasket Repository UI

> Port visual hierarchy ที่ user อนุมัติจาก buildable mockup เข้า Astro production โดยรักษา data, integration, routes และ character เดิมของ Room กับ gdBasket ครบ

## Phase 1: Pre-build contract and source verification
- [x] Pre-build Review: อ่าน plan ทั้งไฟล์, `projects/7-ROOM/CLAUDE.md`, `projects/7-ROOM/src/pages/index.astro`, `projects/7-ROOM/src/pages/ea/gdbasket.astro`, `projects/7-ROOM/src/styles/global.css`, `projects/7-ROOM/src/layouts/Layout.astro`, `projects/7-ROOM/src/components/Navbar.astro` และ artifact `C:/WORKSPACE/.claude/artifacts/7-room-approved-room-gdbasket-20260716/` ก่อนแก้ code; เทียบ current snippets กับไฟล์จริงและสร้าง element-to-source checklist ตาม mapping ใน Spec Scope; scope: ยังไม่แก้ไฟล์และไม่ตีความส่วนที่ขัดกันเอง; Acceptance: รายงานว่า plan clear พร้อม checklist Room และ gdBasket ครบ หรือหยุดถาม user พร้อมระบุจุด stale หรือขัดกันแบบ exact path/section

### Reference
```text
Artifact source of truth
C:/WORKSPACE/.claude/artifacts/7-room-approved-room-gdbasket-20260716/
  client/src/pages/Home.tsx      -> Room hierarchy and states
  client/src/pages/Product.tsx   -> gdBasket repository plus README hierarchy
  client/src/index.css           -> active Room and gdBasket selector groups only

Production source of truth
projects/7-ROOM/src/pages/index.astro
projects/7-ROOM/src/pages/ea/gdbasket.astro
projects/7-ROOM/src/styles/global.css

Required mapping
Room intro/counts -> production courses, eaItems, totalLessons
Room filters -> all, learn, ea
Room resource cards -> pinnedItems, restItems
Room course preview -> #course-content plus lesson tabs plus BrokerCTA
gdBasket repo shell -> production breadcrumb/header/nav/toolbar/fileRows
gdBasket README -> production copy/proof/install/changelog
gdBasket sidebar -> production journal/Myfxbook/releases/download integrations
```

## Phase 2: Port approved Room category index
- [x] ปรับ markup ใน `projects/7-ROOM/src/pages/index.astro` ช่วง compact intro, filters, pinned group และ rest group ให้ใช้ hierarchy/class contract จาก artifact `Home.tsx` ได้แก่ `room-index`, `room-intro`, `room-intro-grid`, `room-index-signature`, `room-stats`, `room-catalog`, `catalog-toolbar`, `filter-pills`, `catalog-group`, `resource-grid`, `resource-card`; map text/counts/cards จาก Astro variables เดิม; scope: ไม่เพิ่ม hero, marketing sections, hard-coded resources หรือ React component/state และห้ามใส่ class `.pixel` บนข้อความไทย โดย `.pixel` ใช้เฉพาะ English/ตัวเลข ส่วน Thai heading/body ใช้ production typography เดิม; Acceptance: DOM มี intro หนึ่งชุด, filters สามค่า `all|learn|ea`, pinned/rest groups จาก data จริง, EA เป็น anchor และ course เป็น button โดยลำดับรายการตรง pin state เดิม
- [x] ปรับ inline course panel และ browser script ใน `projects/7-ROOM/src/pages/index.astro` ให้ผลลัพธ์ตรง artifact `course-preview` โดยยัง render Markdown lesson bodies และ `BrokerCTA` เดิม; รักษา toggle open/close, active lesson, smooth scroll, initial `?filter=ea|learn`, filter-close behavior และ Supabase pin reorder; scope: ไม่ port `useState`, `useEffect`, `useMemo`, mock toast หรือเปลี่ยน query key `learn` เป็น `course`; Acceptance: course เปิดและปิด panel เดิมได้, lesson tabs สลับ content จริงได้, filter update state/URL ตาม behavior เดิม, EA direct navigation ทำงาน และ pin hydration fail gracefully ด้วย SSR order
- [x] เพิ่มหรือปรับเฉพาะ Room selector groups ใน `projects/7-ROOM/src/styles/global.css` จาก artifact `client/src/index.css` active ranges `.room-*`, `.catalog-*`, `.resource-*`, `.course-preview`, `.lesson-*`; แปลง token ให้ reuse production variables และ typography rules; scope: ห้าม copy legacy `.home-*`, global React reset, mock SiteChrome styles หรือเปลี่ยน theme architecture; Acceptance: desktop เป็น compact two-column catalog, 820px ลงมาเป็น one-column, 375px cards/filter/lesson tabs ไม่ล้น, visible focus ชัด, hover/active motionไม่เกิน 300ms และหน้าอื่นไม่เปลี่ยน style

### Reference
```astro
# current (projects/7-ROOM/src/pages/index.astro:55-89)
<section class="py-10">
  <div class="max-w-[1100px] mx-auto px-5">
    <div class="flex items-start justify-between gap-5 flex-wrap">
      <h1>เรียน<span class="text-primary">+</span>เทรด<br><span class="text-secondary">ฟรีทั้งหมด</span></h1>
      <div class="flex gap-5 items-center">...{courses.length}...{eaItems.length}...{totalLessons}...</div>
    </div>
    <div id="course-filter">
      <button data-filter="all">ทั้งหมด</button>
      <button data-filter="learn">คอร์สเรียน</button>
      <button data-filter="ea">EA</button>
    </div>

# new hierarchy from approved artifact Home.tsx:126-175; implement in Astro, do not copy React state
<main id="main-content" class="room-index">
  <section class="room-intro">
    <div class="shell room-intro-grid">
      <div>ROOM / 07 CLASSROOM INDEX plus heading plus description</div>
      <div class="room-intro-rail">
        <div class="room-index-signature">ROOM /07 OPEN CLASSROOM</div>
        <dl class="room-stats">production counts</dl>
      </div>
    </div>
  </section>
  <section class="room-catalog shell">
    <div class="catalog-toolbar"><div class="filter-pills">production filter buttons</div></div>
    <div class="catalog-group pinned-group"><div class="resource-grid">production pinned items</div></div>
    <div class="catalog-group"><div class="resource-grid">production rest items</div></div>
    <section class="course-preview">production lesson content plus BrokerCTA</section>
  </section>
</main>

# approved CSS contract (artifact client/src/index.css:501-607)
.room-intro-grid { display: grid; grid-template-columns: minmax(0, 1fr) auto; }
.resource-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
@media (max-width: 820px) { .resource-grid { grid-template-columns: 1fr; } }
@media (max-width: 560px) { .filter-pills, .lesson-tabs { overflow-x: auto; } }
```

## Phase 3: Port approved gdBasket repository and README
- [x] ปรับ repo shell ใน `projects/7-ROOM/src/pages/ea/gdbasket.astro` ช่วง breadcrumb, identity/header, subnav, toolbar, latest commit และ fileRows ให้ใช้ hierarchy/classes จาก artifact `Product.tsx` ได้แก่ `repo-page`, `repo-shell`, `repo-breadcrumb`, `repo-header`, `repo-identity`, `repo-tabs`, `repo-columns`, `repo-toolbar`, `file-browser`, `commit-row`, `file-list`; scope: ไม่เพิ่ม product hero, signal rail, sales pitch หรือเปลี่ยน production href/download attributes และห้ามใส่ class `.pixel` บนข้อความไทย โดย `.pixel` ใช้เฉพาะ English/ตัวเลข ส่วน Thai heading/body ใช้ production typography เดิม; Acceptance: หน้าเริ่มเหมือน repository browser, file rows ทุกแถวใช้ production `fileRows`, tabs/anchors ไป section และ external destination เดิม, version/status/disclosure ตรง production
- [x] ปรับ README body ใน `projects/7-ROOM/src/pages/ea/gdbasket.astro` ให้ใช้ approved document hierarchy `readme-card`, `readme-title`, `readme-body`, `readme-steps`, `readme-callout`, `readme-two-col`, `feature-list`, `engine-tabs`, `engine-readout`, `proof-switch`, `proof-table`, `install-list`, `risk-note`, `release-card`; รักษาลำดับและ copy production ตั้งแต่ chart ถึง changelog; scope: ไม่เอาข้อความ placeholder, mocked chart interpretation หรือตัวเลขจำลองจาก React mockup; Acceptance: section anchors `readme|how|features|modes|install|release` มีครบ, Engine Profile ทุกโหมดแสดง production content, proof tables/detail toggles แสดง production figures และ risk interpretation/changelog link ยังอยู่
- [x] ปรับ affiliate note, utility sidebar และ runtime scripts ใน `projects/7-ROOM/src/pages/ea/gdbasket.astro` ให้ใช้ approved visual shells โดยรักษา `DL_LATEST`, XM URL, referral code, VPS URL, Trading Journal, Myfxbook build-time/fallback data, runtime journal/Myfxbook hydration และ copy feedback เดิม; scope: ห้าม port mock `DownloadButton`, toast, hard-coded `+53.40%`, `$460.36` หรือ placeholder text; Acceptance: download ได้ไฟล์จริง, affiliate/external links มี destination/rel เดิม, copy code เขียนค่าจริงและมี feedback, journal/Myfxbook แสดง live data เมื่อพร้อมและ fallback เดิมเมื่อ fetch fail, ไม่มี console error
- [x] เพิ่มหรือปรับเฉพาะ gdBasket selector groups ใน `projects/7-ROOM/src/styles/global.css` จาก artifact active `.repo-*`, `.file-*`, `.affiliate-*`, `.readme-*`, `.engine-*`, `.proof-*`, `.install-*`, `.risk-*`, `.release-*`; ใช้ GitHub-like compact radius, fine border และ document width โดย reuse production tokens; scope: ไม่ copy React global reset, SiteChrome หรือ legacy `.product-*`; Acceptance: desktop ใช้ main plus utility sidebar, content width อ่านง่าย, card repetitionไม่ทำให้เป็น dashboard, 820px ลงมา sidebar ลงใต้ README, 375px tabs/table/file rows scrollหรือ reflow โดยไม่มี page-level overflow และ character ยังเป็น repository plus README

### Reference
```astro
# current (projects/7-ROOM/src/pages/ea/gdbasket.astro:101-170)
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
  <div class="text-sm text-gray-dark mb-4">Room / EA / gdBasket</div>
  <div class="flex justify-between items-start gap-4 flex-wrap pb-4">
    <img src="/gdbasket-mark.png" ... />
    <span class="pixel text-primary">gdBasket</span>
    <span>ใช้งานจริง</span>
  </div>
  <div class="border-b border-dark-border flex gap-1">...</div>
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 mt-5">
    <div>toolbar plus latest commit plus fileRows plus README</div>
    <aside>live utility sidebar</aside>
  </div>
</div>

# new hierarchy from approved artifact Product.tsx:114-171; keep production data/actions
<main id="main-content" class="repo-page">
  <div class="shell repo-shell">
    <nav class="repo-breadcrumb">production links</nav>
    <header class="repo-header"><div class="repo-identity">production mark/name/status</div><div class="repo-version">production version</div></header>
    <nav class="repo-tabs">production anchors</nav>
    <div class="repo-columns">
      <div class="repo-main">
        <div class="repo-toolbar">production download and disclosure</div>
        <section class="file-browser">production commit plus fileRows</section>
        <section class="affiliate-note">production XM/referral/disclosure</section>
        <article id="readme" class="readme-card">production README in existing order</article>
        <section id="release" class="release-card">production changelog summary</section>
      </div>
      <aside class="repo-sidebar">production About, Journal, Myfxbook, Releases, quick links, download CTA</aside>
    </div>
  </div>
</main>

# approved CSS contract (artifact client/src/index.css:610 onward)
.repo-page { min-height: 100vh; background: #0d0f12; }
.repo-tabs { display: flex; overflow-x: auto; border-bottom: 1px solid #2d3138; }
.repo-columns { display: grid; grid-template-columns: minmax(0, 1fr) 292px; }
.file-browser { overflow: hidden; border: 1px solid #30343b; border-radius: 9px; }
```

## Phase 4: Regression, behavior and visual acceptance
- [x] ตรวจ shared-shell regression โดยเปิด `/`, `/ea/gdbasket` และหน้า production อื่นอย่างน้อยหนึ่งหน้าใน `projects/7-ROOM`; ยืนยัน `src/layouts/Layout.astro` และ `src/components/Navbar.astro` ยังให้ metadata, navbar links, active state, main slot และ affiliate/risk footer เดิม; scope: ห้ามแก้ shared files เพื่อแต่งเฉพาะสองหน้า ถ้าไม่พบ regression ที่พิสูจน์ได้; Acceptance: shared chrome ต่อเนื่องกับ IntensiveTrader, skip/focus navigation ใช้ได้, ไม่มี duplicate header/footer และหน้าอื่นไม่รับ selector leak
- [x] รัน functional matrix บน `/` และ `/ea/gdbasket`: Room filters `all|learn|ea`, initial query, course open/close, lesson tabs, BrokerCTA, EA link, pin fallback/hydration; gdBasket repo anchors, file links, download, copy referral, Engine tabs, proof switch/detail toggles, install/VPS/changelog, Journal/Myfxbook live/fallback; scope: ไม่ข้าม failed behavior เพื่อเน้นภาพ; Acceptance: ทุก case PASS หรือรายงาน blocker พร้อม console/network evidence และหยุดก่อน commit
- [x] รัน `npm run build` ที่ `C:/WORKSPACE/projects/7-ROOM` แล้วตรวจ desktop 1280px, tablet 820px และ mobile 375px ด้วย screenshots เทียบ artifact; scope: ห้ามตัด content เพื่อแก้ overflow และห้ามยอมรับภาพที่ Room กลายเป็น landing หรือ gdBasket กลายเป็น dashboard/product page; Acceptance: build exit code 0, ไม่มี console error, ไม่มี page-level horizontal overflow, text contrast/focus ผ่าน, hierarchy และ spacing ของทุก mapped elementตรง artifactในระดับที่ผู้ใช้มองเห็นได้
- [x] ทำ final report ตาม `report_back` พร้อม diff summary และ screenshot comparison; ขอ user approval ก่อน commit ตาม project UI rule; หลัง user อนุมัติค่อยรัน `/qc` และ `/done` ตาม workflow; scope: ห้ามประกาศเสร็จหรือ commit เองก่อน approval; Acceptance: user เห็นผลตรวจ, files touched, remaining differences และเลือก approve หรือขอแก้ได้โดยไม่ต้องย้อนถามว่าทำอะไรไป

### Reference
```text
Final acceptance matrix

Room /
[ ] category/classroom index, not marketing landing
[ ] data from courses plus eaItems plus Supabase pin state
[ ] filters all, learn, ea plus URL initialization
[ ] EA direct navigation
[ ] course inline panel plus real lesson Markdown plus BrokerCTA
[ ] desktop 1280, tablet 820, mobile 375 without page overflow

gdBasket /ea/gdbasket
[ ] GitHub-style repository plus README, not product landing
[ ] production fileRows, download, affiliate, VPS, journal, changelog URLs
[ ] production README order and factual numbers
[ ] Engine, proof, detail, copy interactions
[ ] live journal and Myfxbook plus fallback behavior
[ ] utility sidebar reflows below document on narrow screens

Shared
[ ] Layout, Navbar, metadata and risk footer unchanged
[ ] npm run build exits 0
[ ] no console errors or selector leak to another page
[ ] user visual approval before commit
```
