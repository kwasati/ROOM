// EA items — hardcoded (มี gdBasket ตัวเดียว); link ออกไปหน้า detail /ea/gdbasket
// shared: index.astro (การ์ด home) + items.json.ts (ให้ admin ดึงไปทำ pin manager)
export const eaItems = [
  {
    kind: 'ea' as const,
    id: 'gdbasket',
    title: 'gdBasket',
    description: 'Adaptive Buy Grid Behavior EA บน GOLD M15 — โหมดใหม่ VELOCE26 เครื่องพีระมิด 2 บ้าน ผ่านพิสูจน์ 6 ปี 8 เดือน 2020–2026 พร้อมแผงจัดการสดบนจอ',
    version: 'v3.21',
    live: true,
    href: '/ea/gdbasket',
    cardType: 'ea',
    pinned: true,
    pinOrder: 1,
  },
];
