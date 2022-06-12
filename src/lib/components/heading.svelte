<div class="relative glitch mt-12 mb-6 z-10 inline-block">
  <h1 class="frame p-3 text-3xl">
    <slot />
  </h1>
</div>

<style>
  .glitch::before,
  .glitch::after {
    @apply content-[""] absolute p-4;
    height: calc(100% + 3px);
    width: calc(100% + 5px);
  }

  .glitch::before {
    @apply bg-glitch-red -top-[3px] -left-[5px];
  }

  .glitch::after {
    @apply bg-glitch-blue top-0 left-0;
  }
</style>
