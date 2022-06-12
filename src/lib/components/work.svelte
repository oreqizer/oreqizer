<script lang="ts">
  export let src: string;
</script>

<div
  class="my-4 border-2 border-black dark:border-white min-h-[6rem] w-full grid grid-cols-[6rem_1fr] gap-1 items-center"
>
  <img
    {src}
    alt="Company logo"
    class="object-contain justify-self-center p-2 h-full w-full dark:bg-white"
  />

  <div class="p-4 space-y-2">
    <div class="font-bold text-xl">
      <slot name="title" />
    </div>

    <div>
      <slot name="description" />
    </div>

    <div>
      <slot name="link" />
    </div>
  </div>
</div>
