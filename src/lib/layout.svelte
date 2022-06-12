<script type="ts" context="module">
  import Anchor from "./components/anchor.svelte";
  import Blockquote from "$lib/components/blockquote.svelte";
  import Heading from "$lib/components/heading.svelte";
  import Subtitle from "$lib/components/subtitle.svelte";
  import Subsubtitle from "$lib/components/subsubtitle.svelte";
  import Item from "$lib/components/item.svelte";
  import Paragraph from "$lib/components/paragraph.svelte";
  import List from "$lib/components/list.svelte";

  export const a = Anchor;
  export const blockquote = Blockquote;
  export const h1 = Heading;
  export const h2 = Subtitle;
  export const h3 = Subsubtitle;
  export const li = Item;
  export const p = Paragraph;
  export const ul = List;
</script>

<slot />
