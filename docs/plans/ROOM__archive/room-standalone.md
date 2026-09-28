---
project: room
created: 2026-03-28
last_updated: 2026-03-28
status: active
---

# Room Standalone — แยกเป็นเว็บ subdomain

> แยก Room ออกจาก intensivetrader.com เป็นเว็บ standalone บน room.intensivetrader.com — ออกแบบตาม mockup ที่ approve แล้ว ใช้ Astro static + Vercel + Cloudflare DNS

## Phase 1: Cleanup + Project Skeleton
- [ ] ลบ Room ออกจาก intensivetrader.com — ลบ pages/room/, components/room/, content/courses/, content/lessons/, collections จาก config, Room จาก Navbar, room-mockup.html → commit + push
- [ ] สร้าง Astro project ใหม่ projects/room/ — minimal template + @astrojs/mdx + @tailwindcss/vite + output static + global.css (dark theme vars) + Layout.astro + TopBar.astro ตาม mockup
- [ ] สร้าง content collections (courses + lessons) + ย้าย sample content (xcs-guide 1 บท + forex-basics 3 บท) มาจาก code เดิม
- [ ] เพิ่มลิงก์ room.intensivetrader.com ใน Navbar เว็บหลัก เป็น external link

### Reference
```astro
<!-- TopBar.astro ตาม mockup -->
<div class="topbar sticky top-0 z-50 bg-dark-card border-b border-dark-border">
  <div class="max-w-7xl mx-auto px-4 h-12 flex items-center justify-between">
    <div class="flex items-center gap-3">
      <a href="/" class="font-extrabold text-lg"><span class="text-primary">Room</span></a>
      <span class="bg-primary text-white text-[11px] font-bold px-2 py-0.5 rounded-full">FREE</span>
    </div>
    <a href="https://intensivetrader.com" class="text-sm text-gray hover:text-primary transition-colors flex items-center gap-1">
      intensivetrader.com ↗
    </a>
  </div>
</div>

<!-- global.css -->
:root {
  --bg: #0F0F0F;
  --card: #1A1A1A;
  --border: #2A2A2A;
  --primary: #DC2626;
  --primary-dark: #B91C1C;
  --secondary: #F59E0B;
  --text: #E5E7EB;
  --text-gray: #9CA3AF;
  --text-dim: #6B7280;
}
body { font-family: 'Noto Sans Thai', 'Inter', sans-serif; }
```

## Phase 2: Build Pages
- [ ] Listing page (/) — hero section + filter pills + CourseCard grid (1/2/3 col) ตาม mockup design
- [ ] Course overview page (/[slug]) — breadcrumb + lesson list + sidebar (เริ่มเรียน + ToolDownload) + BrokerCTA sidebar
- [ ] Lesson page (/[slug]/[lesson]) — video embed + MDX content + LessonNav sidebar (desktop) + mobile outline toggle + breadcrumb + prev/next + BrokerCTA end-of-lesson + mobile sticky bar
- [ ] SEO metadata + OG tags ทุกหน้า + mobile responsive check (375/768/1024px)

### Reference
```astro
<!-- CourseCard ตาม mockup -->
<a href={url} class="group block bg-[--card] rounded-xl border border-[--border] hover:border-primary transition-all hover:-translate-y-0.5 overflow-hidden cursor-pointer">
  <div class="aspect-video bg-[#111] flex items-center justify-center relative">
    <!-- thumbnail or play icon -->
    <span class="absolute top-2 right-2 bg-green-500 text-black text-[11px] font-bold px-2 py-0.5 rounded">FREE</span>
  </div>
  <div class="p-4">
    <div class="flex items-center gap-2 mb-2">
      <span class="type-badge">{typeLabel}</span>
      <span class="text-xs text-[--text-dim]">{lessonCount} บท</span>
    </div>
    <h3 class="font-bold text-[--text] group-hover:text-primary transition-colors">{title}</h3>
    <p class="text-sm text-[--text-gray] line-clamp-2 mt-1">{description}</p>
  </div>
</a>
```

## Phase 3: Deploy
- [ ] สร้าง GitHub repo kwasati/room + git init + push
- [ ] Vercel: import repo + add domain room.intensivetrader.com | Cloudflare: CNAME room → cname.vercel-dns.com (DNS only, proxy off)

### Reference
```bash
# GitHub repo
cd projects/room
git init && git add . && git commit -m "init: Room standalone"
gh repo create kwasati/room --public --source=. --push

# Cloudflare DNS
# Name: room
# Type: CNAME
# Target: cname.vercel-dns.com
# Proxy: OFF (DNS only)
```
