import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { eaItems } from '../data/ea';

// list item ทั้งหมดใน room (คอร์ส + EA) ให้ admin (เว็บหลัก) ดึงไปทำ pin manager
// key = {type}:{slug} — ตรงกับ content_pins contract
export const GET: APIRoute = async () => {
  const courses = await getCollection('courses');
  const items = [
    ...eaItems.map(e => ({ key: `ea:${e.id}`, type: 'ea', title: e.title })),
    ...courses.map(c => ({ key: `course:${c.id}`, type: 'course', title: c.data.title })),
  ];
  return new Response(JSON.stringify(items), {
    headers: { 'content-type': 'application/json' },
  });
};
