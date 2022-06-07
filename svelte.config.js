import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import emoji from "remark-emoji";
import gfm from "remark-gfm";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
  },
  extensions: [".svelte", ".svx"],
  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex({
      layout: "src/lib/layout.svelte",
      smartypants: true,
      remarkPlugins: [emoji, gfm],
    }),
  ],
};

export default config;
