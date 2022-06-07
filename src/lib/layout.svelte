<script type="ts" context="module">
  import Heading from "$lib/components/heading.svelte";
  import Subtitle from "$lib/components/subtitle.svelte";
  import Subsubtitle from "$lib/components/subsubtitle.svelte";
  import Paragraph from "$lib/components/paragraph.svelte";

  export const h1 = Heading;
  export const h2 = Subtitle;
  export const h3 = Subsubtitle;
  export const p = Paragraph;
</script>

<slot />
