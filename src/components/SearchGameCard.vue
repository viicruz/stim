<script setup lang="ts">
  defineProps<{
  gameTitle: string;
  gameImage: string;
}>();
</script>

<template>
  <div
    className="bg-transparent rounded-lg transition-all bg-white hover:bg-gradient-to-br from-primary-500 to-secondary-500 ps-0.5"
  >
    <div className="flex flex-row items-center gap-1">
      <div
        className="rounded-full overflow-hidden border min-h-8 max-h-8 min-w-8 max-w-8"
      >
        <img
          class="w-8 h-8"
          alt="Game Image"
          :src="gameImage"
        />
      </div>

      <div
        className="border-l-2 border-neutral-200 border-r-2 px-1 min-w-40  max-w-40"
      >
        <p className="font-bold text-base  text-start w-full line-clamp-1">
          {{ gameTitle }}
        </p>
        <div className="flex flex-row gap-1 items-center">
          <p className="font-normal text-[0.65rem] text-neutral-500">
            aopajgjagjao
          </p>
        </div>
      </div>
      <div
        className="flex flex-row flex-wrap gap-1 justify-start items-start w-full h-10"
      ></div>
    </div>
  </div>
</template>
