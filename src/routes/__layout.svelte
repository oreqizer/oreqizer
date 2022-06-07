<script>
  import Theme from "$lib/components/theme.svelte";
  import Glitch from "$lib/components/glitch.svelte";
  import "../app.css";
</script>

<main class="min-h-screen bg-background text-ink dark:bg-dark-background dark:text-dark-ink">
  <div class="font-mono p-2 max-w-2xl mx-auto">
    <div class="relative">
      <img src="/social.png" alt="Boris Petrenko" />

      <div class="mt-6 mb-12 md:my-0 md:absolute md:left-2 md:bottom-2 w-full">
        <Glitch text="Boris Petrenko" />
      </div>
    </div>

    <slot />
  </div>

  <div class="fixed top-4 right-4 z-50">
    <Theme />
  </div>
</main>
