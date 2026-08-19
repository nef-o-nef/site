import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    section: z.string(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    link: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { works };
