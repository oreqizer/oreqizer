<script lang="ts">
  export let list: string[];
</script>

<ul class="flex items-center mb-4 flex-wrap">
  {#each list as item}
    <li
      class="inline-block p-2 mb-3 mr-3 border-2 border-black dark:border-white whitespace-nowrap"
    >
      {item}
    </li>
  {/each}
</ul>
