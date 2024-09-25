import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import icon from "astro-icon";
import robotsConfig from './robots-txt.config';
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap";
import { BASE_PATH } from './src/constants';
// https://astro.build/config
export default defineConfig({
  site: 'https://DMouayad.github.io',
  base: BASE_PATH,
  integrations: [tailwind(), icon(), sitemap(), robotsTxt(robotsConfig), compress()],
  output: "static"
});