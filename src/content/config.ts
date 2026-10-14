import { defineCollection, z } from 'astro:content';

// Blog posts live in src/content/writing/*.md.
// category decides which tab a post appears under.
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['research', 'personal']),
    description: z.string().optional(),
    draft: z.boolean().default(false), // drafts show in `npm run dev` only
  }),
});

export const collections = { writing };
