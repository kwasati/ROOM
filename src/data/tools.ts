// Tool items — hardcoded (AGENTQ only for now); external link out to the app
// shared: index.astro (Room hub cards) + items.json.ts (admin pin manager list)
export const toolItems = [
  {
    kind: 'tool' as const,
    id: 'agentq',
    title: 'AGENTQ',
    description: 'บอทยิงไม้บน IQ Option · ให้คะแนนทุกคู่ตามช่วงตลาด/วัน · ใช้ DEMO ได้ทุกฟีเจอร์หลังยืนยันเมล · พร้อมเมื่อไหร่ค่อยขึ้น REAL',
    badges: ['แอป · IQ Option', 'ที่นั่งจำกัด'],
    href: 'https://agentq.intensivetrader.com/',
    external: true,
    footerText: 'ไป agentq.intensivetrader.com',
    actionText: 'สมัคร / โหลดแอป ↗',
    cardType: 'tool',
    pinned: false,
    pinOrder: undefined as number | undefined,
  },
];
