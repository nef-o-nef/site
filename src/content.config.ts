import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const md = (dir: string) => glob({ pattern: '**/*.md', base: `./src/content/${dir}` });

const projects = defineCollection({
  loader: md('projects'),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    section: z.string().optional(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: md('events'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),          // 2026-09-14 or 2026-09-14T20:00
    endDate: z.coerce.date().optional(),
    venue: z.string(),
    city: z.string(),
    kind: z.string().optional(),    // performance / installation / workshop
    with: z.string().optional(),
    link: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const diary = defineCollection({
  loader: md('diary'),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    images: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, events, diary };
