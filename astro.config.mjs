import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://DMouayad.github.io',
  integrations: [tailwind(), icon(), sitemap(), compress()],
  output: "static"
});