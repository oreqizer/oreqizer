<script lang="ts">
  export let text: string;
</script>

<h1 class="frame text-5xl md:text-7xl p-4 glitch" data-text={text}>{text}</h1>

<style>
  .glitch::before,
  .glitch::after {
    @apply content-[attr(data-text)] absolute top-0 left-0 p-4 w-full h-full -z-10;
  }

  .glitch::before {
    @apply text-glitch-red;
    animation: glitch-effect 3s infinite;
  }

  .glitch::after {
    @apply text-glitch-blue;
    animation: glitch-effect 2s infinite;
  }

  @keyframes glitch-effect {
    0% {
      transform: translate3D(-1px, -2px, 0);
    }
    25% {
      transform: translate3D(-1px, 0, 0);
    }
    50% {
      transform: translate3D(0, 2px, 0);
    }
    75% {
      transform: translate3D(2px, 1px, 0);
    }
    100% {
      transform: translate3D(1px, 2px, 0);
    }
  }
</style>
