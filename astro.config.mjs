import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://primulpas.com",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ro"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  integrations: [tailwind(), sitemap({
    i18n: {
      defaultLocale: "en", // All urls that don't contain `ro` after `https://screwfast.uk/` will be treated as default locale, i.e. `en`
      locales: {
        en: "en", // The `defaultLocale` value must present in `locales` keys
        ro: "ro",
      },
    },
  }), compressor({
    gzip: false,
    brotli: true,
  }), mdx()],
  experimental: {
    clientPrerender: true,
  },
});