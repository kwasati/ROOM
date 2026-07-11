// EA items — hardcoded (มี gdBasket ตัวเดียว); link ออกไปหน้า detail /ea/gdbasket
// shared: index.astro (การ์ด home) + items.json.ts (ให้ admin ดึงไปทำ pin manager)
export const eaItems = [
  {
    kind: 'ea' as const,
    id: 'gdbasket',
    title: 'gdBasket',
    description: 'Adaptive Buy Grid Behavior EA บน GOLD M15 — ราคาย่อยิ่งถัวเป็นชุด เด้งแล้วปิดยกชุดรับกำไรพร้อมกัน ปรับจังหวะตามตลาดเอง',
    version: 'v2.01',
    live: true,
    href: '/ea/gdbasket',
    cardType: 'ea',
    pinned: true,
    pinOrder: 1,
  },
];
