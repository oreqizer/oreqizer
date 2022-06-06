<script>
  import Theme from "$lib/components/theme.svelte";
  import "../app.css";
</script>

<main class="min-h-screen bg-background text-ink dark:bg-dark-background dark:text-dark-ink">
  <slot />

  <div class="fixed top-4 right-4 z-50">
    <Theme />
  </div>
</main>
