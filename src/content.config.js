import { defineCollection} from "astro:content";
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects"}),
});

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts"})
});

export const collections = { projects, posts };