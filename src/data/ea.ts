// EA items — hardcoded (มี gdBasket ตัวเดียว); link ออกไปหน้า detail /ea/gdbasket
// shared: index.astro (การ์ด home) + items.json.ts (ให้ admin ดึงไปทำ pin manager)
export const eaItems = [
  {
    kind: 'ea' as const,
    id: 'gdbasket',
    title: 'gdBasket',
    description: 'Adaptive Buy Grid Behavior EA บน GOLD M15 — Mode AGILE เลือกชุดค่าเองตามความร้อนของตลาด ผลย้อนหลัง 8 ปี 34 รอบสำเร็จ / 6 SO พร้อมแผงจัดการสดบนจอ',
    version: 'v4.00',
    live: true,
    href: '/ea/gdbasket',
    cardType: 'ea',
    pinned: true,
    pinOrder: 1,
  },
];
