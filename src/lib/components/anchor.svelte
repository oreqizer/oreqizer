<script lang="ts">
  export let href: string;
</script>

<a {href} class="underline text-link dark:text-glitch-blue"><slot /></a>

<style>
  a::after {
    @apply content-["🔗"] inline-block ml-2 no-underline;
  }
</style>
