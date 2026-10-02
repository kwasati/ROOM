---
project: room
created: 2026-03-29
last_updated: 2026-03-29
status: done
---

# Room UX Redesign — Layout ใหม่ตาม Mockup Final

> Redesign layout ทุกหน้าตาม mockup ที่ approve — Desktop: floating pill topbar, hero ชิดซ้าย, horizontal cards 2 col, sidebar+progress | Mobile: full-width bar, centered hero, list rows, inline collapsible outline | สีเดิมทั้งหมด เปลี่ยนแค่ UX/layout

## Phase 1: TopBar Floating Pill
- [x] TopBar.astro — desktop: wrapper padding 10px 16px, inner border-radius 99px, bg rgba(26,26,26,0.85) backdrop-blur-16px, border border-dark-border | mobile ≤767px: padding 0, radius 0, full-width sticky, border-bottom แทน | ปรับ Layout.astro ถ้ามี padding-top ที่ต้องเปลี่ยน

### Reference
```astro
<!-- CURRENT TopBar.astro -->
<div class="sticky top-0 z-50 bg-dark-card border-b border-dark-border">
  <div class="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
    ...
  </div>
</div>

<!-- NEW TopBar.astro -->
<div class="sticky top-0 z-50 px-4 pt-2.5 md:px-4 md:pt-2.5 max-md:px-0 max-md:pt-0">
  <div class="max-w-[1100px] mx-auto bg-dark-card/85 backdrop-blur-[16px] rounded-full border border-dark-border px-5 h-12 flex items-center justify-between max-md:rounded-none max-md:border-0 max-md:border-b max-md:h-[52px] max-md:px-5">
    ...
  </div>
</div>
```

## Phase 2: Home Page Redesign
- [x] index.astro hero — desktop: flex justify-between, h1+p ชิดซ้าย, stat boxes (จำนวนคอร์ส/บทเรียน) อยู่ขวา, filter pills ใต้ | mobile ≤767px: flex-col centered, ซ่อน stat boxes แสดง inline text แทน (2 คอร์ส · 4 บทเรียน · ฟรี)
- [x] index.astro course cards — desktop: ไม่ใช้ CourseCard component แต่ inline horizontal cards 2-col grid (thumbnail 180px ซ้าย + body ขวา มี type badge, count, title, desc) | mobile ≤767px: แสดง list rows แทน (icon 44px + title/desc + count badge + arrow) ใช้ hidden/block responsive classes สลับ 2 views

### Reference
```astro
<!-- CURRENT index.astro hero -->
<div class="text-center mb-10">
  <h1>...</h1>
  <p>...</p>
</div>

<!-- NEW hero (desktop left, mobile center) -->
<div class="flex items-start justify-between gap-5 flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
  <div>
    <h1>เรียนเทรดฟรี<br><span class="text-secondary">จากประสบการณ์จริง</span></h1>
    <p>...</p>
    <div class="md:hidden">2 คอร์ส · 4 บทเรียน · ฟรี</div>
  </div>
  <div class="flex gap-4 max-md:hidden">
    <div>stat num + label</div>
  </div>
</div>

<!-- Desktop horizontal card -->
<a class="flex bg-dark-card rounded-[14px] border border-dark-border max-md:hidden">
  <div class="w-[180px] shrink-0 bg-gradient-to-br from-stone-900 to-stone-800 flex items-center justify-center">icon</div>
  <div class="p-4 flex-1">type + count + title + desc</div>
</a>

<!-- Mobile list row -->
<a class="hidden max-md:flex items-center gap-3.5 p-3.5 bg-dark-card rounded-[14px] border border-dark-border">
  <div class="w-11 h-11 rounded-[10px] bg-primary/10 flex items-center justify-center">icon</div>
  <div class="flex-1 min-w-0">title + desc</div>
  <span class="count badge">3 บท</span>
  <span>→</span>
</a>
```

## Phase 3: Lesson Page + Sidebar
- [x] LessonNav.astro — desktop sidebar: เพิ่ม progress bar (thin bar + label '1/3 บท') ใต้ lesson list | mobile: เปลี่ยน toggle button text เป็น 'สารบัญ — บทที่ X / N' + style outline items ให้ match mockup (rounded, active state primary-glow)
- [x] [slug]/[lesson].astro — เปลี่ยน prev/next navigation จาก 2 ฝั่ง (prev ซ้าย, next ขวา) เป็น next card แถวเดียว (วงกลมเลขบท + label 'ถัดไป' + title + arrow ขวา) ถ้าบทสุดท้ายแสดง 'กลับหน้า Room' | ลบ prev link ออก (mobile-first: swipe back ได้อยู่แล้ว)
- [x] [slug].astro — course overview ปรับ hero เป็น left-aligned style เดียวกับ home, sidebar card style ให้ consistent กับ lesson sidebar (rounded-[14px], progress bar ถ้ามี)

### Reference
```astro
<!-- CURRENT LessonNav sidebar -->
<aside class="hidden lg:block w-72 flex-shrink-0">
  <div class="sticky top-16">..list..</div>
</aside>

<!-- NEW: เพิ่ม progress bar -->
<div class="px-3.5 pb-3">
  <div class="h-[3px] bg-dark-border rounded-full overflow-hidden">
    <div class="h-full bg-primary rounded-full" style={`width:${progressPercent}%`}></div>
  </div>
  <div class="text-[11px] text-gray-dark mt-1.5 text-right">{currentIndex+1} / {total} บท</div>
</div>

<!-- CURRENT prev/next -->
<nav class="flex items-center justify-between">
  {prevLesson ? <a>← prev</a> : <div/>}
  {nextLesson ? <a>next →</a> : <a>กลับ Room</a>}
</nav>

<!-- NEW next card -->
{nextLesson ? (
  <a class="flex items-center gap-3.5 mt-9 p-3.5 bg-dark-card border border-dark-border rounded-[14px]">
    <span class="w-9 h-9 rounded-full bg-primary/10 border border-dark-border flex items-center justify-center text-sm text-primary">{nextIndex+1}</span>
    <div><span class="text-[11px] text-gray-dark">ถัดไป</span><span class="text-sm font-semibold">{nextLesson.data.title}</span></div>
    <span class="ml-auto text-gray-dark">→</span>
  </a>
) : (
  <a href="/" class="...same style...">กลับหน้า Room</a>
)}
```
