import { defineCollection, z } from 'astro:content';

// 1. Colección de Blog Posts
const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform((val) => new Date(val)),
    tags: z.array(z.string()).optional().default([]),
    summary: z.string().optional(),
    // SEO fields
    metaDescription: z.string().optional(),
    coverImage: z.string().optional(),
    coverImageAttribution: z.string().optional(),
    ogImage: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// 2. Colección de Portafolio
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    description: z.string(),
    projectDate: z.string().or(z.date()).transform((val) => new Date(val)),
    coverImage: z.string().optional(),
    stack: z.array(z.string()),
    status: z.enum(['active', 'completed', 'archived', 'wip']).optional().default('completed'),
  }),
});

const homeSingleton = defineCollection({
    type: 'data',
    schema: z.object({
        heroTitle: z.string().optional(),
        heroDescription: z.string().optional(),
        heroBackgroundImage: z.string().optional().nullable(),
        heroButtons: z.array(z.object({
            text: z.string(),
            link: z.string(),
            variant: z.enum(['primary', 'secondary'])
        })).optional()
    })
});

const aboutSingleton = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    })
});

// Exportamos las colecciones para que Astro las use
export const collections = {
  posts: postsCollection,
  portfolio: portfolioCollection,
  home: homeSingleton,
  about: aboutSingleton
};
