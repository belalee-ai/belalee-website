import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

export default defineConfig({
  site: 'https://belalee.vercel.app',
  output: 'static',
  adapter: vercel(),
  integrations: [mdx(), tailwind()]
});
