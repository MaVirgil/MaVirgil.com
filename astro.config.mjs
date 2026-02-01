// @ts-check
import { defineConfig } from 'astro/config';

import rehypeExternalLinks from "rehype-external-links";

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://mavirgil.com",
  output: "static",
  markdown: {
    rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank'
          }
        ]
    ]
  },
  integrations: [icon()]
});