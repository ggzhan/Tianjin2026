import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Lager-Team"),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    gallery: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
