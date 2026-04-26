import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    category: z.enum(['Venture Analysis', 'Strategy', 'Incubation', 'Venture Evaluation', 'Execution and Strategy', 'Venture Models', 'Captive Path Perspective']),
    published: z.boolean().default(false),
    slug: z.string().optional(),
    canonical_url: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    og_title: z.string().optional(),
    og_description: z.string().optional(),
    og_image: z.string().optional(),
    og_image_width: z.number().optional(),
    og_image_height: z.number().optional(),
    og_image_alt: z.string().optional(),
    twitter_card: z.string().optional(),
    twitter_title: z.string().optional(),
    twitter_description: z.string().optional(),
    twitter_image: z.string().optional(),
    author: z.string().optional(),
    publish_date: z.string().optional(),
    schema_type: z.string().optional(),
  }),
});

export const collections = { journal };
