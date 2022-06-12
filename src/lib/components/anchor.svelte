<script lang="ts">
  export let href: string;
  export let rel: string = "noopener noreferrer";
</script>

<a {href} {rel} class="underline text-link dark:text-glitch-blue"><slot /></a>

<style>
  a::after {
    @apply content-["🔗"] inline-block ml-2 no-underline;
  }
</style>
