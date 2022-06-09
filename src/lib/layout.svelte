<script type="ts" context="module">
  import Heading from "$lib/components/heading.svelte";
  import Subtitle from "$lib/components/subtitle.svelte";
  import Subsubtitle from "$lib/components/subsubtitle.svelte";
  import Item from "$lib/components/item.svelte";
  import Paragraph from "$lib/components/paragraph.svelte";
  import List from "$lib/components/list.svelte";

  export const h1 = Heading;
  export const h2 = Subtitle;
  export const h3 = Subsubtitle;
  export const li = Item;
  export const p = Paragraph;
  export const ul = List;
</script>

<slot />

<style>
  /* No way to style <a> as a component — impossible to pass custom props */
  :global(a) {
    @apply text-link underline;
  }

  :global(.dark a) {
    @apply text-glitch-blue;
  }
</style>
