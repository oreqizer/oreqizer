<div class="relative glitch mt-12 mb-4 z-10 inline-block">
  <h1 class="frame p-3 text-3xl">
    <slot />
  </h1>
</div>

<style>
  .glitch::before,
  .glitch::after {
    @apply content-[""] absolute p-4 w-full h-full;
  }

  .glitch::before {
    @apply bg-glitch-red -top-[1px] -left-[2px];
  }

  .glitch::after {
    @apply bg-glitch-blue top-[1px] left-[2px];
  }
</style>
