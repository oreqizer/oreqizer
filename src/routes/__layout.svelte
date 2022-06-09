<script>
  import Theme from "$lib/components/theme.svelte";
  import Glitch from "$lib/components/glitch.svelte";
  import "../app.css";
</script>

<main class="min-h-screen bg-background text-ink dark:bg-dark-background dark:text-dark-ink">
  <div class="font-mono p-2 max-w-2xl mx-auto">
    <div class="relative mb-8">
      <img src="/social.png" alt="Boris Petrenko" />

      <div class="my-6 md:my-0 md:absolute md:left-2 md:bottom-2 w-full">
        <Glitch text="Boris Petrenko" />
      </div>
    </div>

    <section class="text-base md:text-lg">
      <slot />
    </section>
  </div>

  <div class="fixed top-4 right-4 z-50">
    <Theme />
  </div>
</main>
