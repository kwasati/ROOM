// EA items — hardcoded (มี gdBasket ตัวเดียว); link ออกไปหน้า detail /ea/gdbasket
// shared: index.astro (การ์ด home) + items.json.ts (ให้ admin ดึงไปทำ pin manager)
export const eaItems = [
  {
    kind: 'ea' as const,
    id: 'gdbasket',
    title: 'gdBasket',
    description: 'Buy Grid EA บน GOLD M15 — เปิด Buy เป็นชุด ถัวเฉลี่ยด้วย ATR ปิดทั้งตะกร้าราคาเดียว',
    version: 'v2.00',
    live: true,
    href: '/ea/gdbasket',
    cardType: 'ea',
    pinned: true,
    pinOrder: 1,
  },
];
