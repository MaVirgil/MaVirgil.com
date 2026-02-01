import { defineCollection} from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects"}),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updateDate: z.coerce.date().optional(),
        cover: image(),
        coverAlt: z.string(),
        technologies: z.array(z.string()),
    })
});

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts"})
});

export const collections = { projects, posts };