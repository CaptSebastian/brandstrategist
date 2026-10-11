import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bilingual = z.object({ nl: z.string(), en: z.string() });

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    tagline: bilingual.optional(),
    summary: bilingual.optional(),
    /** Beeld voor de kaart (vierkant uitgesneden). Valt terug op het eerste beeld uit `images`. */
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** Beelden voor de carousel op de projectpagina, elk met een optioneel 'geeltje'. */
    images: z
      .array(z.object({ src: z.string(), alt: z.string().default(''), note: bilingual.optional() }))
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases };
