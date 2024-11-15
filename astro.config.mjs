import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from '@astrojs/vercel/serverless';
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/ remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://knn-07.vercel.app/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://knn-07.vercel.app/sitemap-index.xml",
        "https://knn-07.vercel.app/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "server",
  adapter: vercel({ edgeMiddleware: true }),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
