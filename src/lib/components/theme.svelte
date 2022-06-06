<script lang="ts">
  import { onMount } from "svelte";

  enum Theme {
    DARK = "dark",
    LIGHT = "light",
  }

  let theme: Theme | null = null;

  function saveTheme(theme: Theme) {
    if (theme === Theme.DARK) {
      sessionStorage.setItem("theme", theme);
      document.documentElement.classList.add("dark");
    }
    if (theme === Theme.LIGHT) {
      sessionStorage.setItem("theme", theme);
      document.documentElement.classList.remove("dark");
    }
  }

  $: saveTheme(theme);

  onMount(() => {
    if (
      sessionStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme = Theme.DARK;
    } else {
      theme = Theme.LIGHT;
    }
  });

  function handleClick() {
    if (theme === Theme.DARK) {
      theme = Theme.LIGHT;
    } else {
      theme = Theme.DARK;
    }
  }
</script>

<button class="p-2 bg-black" aria-label="toggle theme" on:click={handleClick}>
  {#if theme === Theme.DARK}☀️{/if}
  {#if theme === Theme.LIGHT}🌙{/if}
</button>
