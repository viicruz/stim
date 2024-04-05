<script setup lang="ts">
import { PhStar } from "@phosphor-icons/vue";
defineProps<{
  gameId: number;
  gameTitle: string;
  gameImage: string;
  gameScore: number;
}>();
</script>

<template>
  <RouterLink :to="`/game/${gameId}`">
  <div
    className="bg-transparent rounded-lg transition-all bg-white hover:bg-gradient-to-br from-primary-500 to-secondary-500 ps-0.5"
  >
    <div className="flex flex-row items-center gap-1">
      <div
        className="rounded-full overflow-hidden border min-h-8 max-h-8 min-w-8 max-w-8"
      >
        <img class="w-8 h-8" alt="Game Image" :src="gameImage" />
      </div>

      <div
        className="border-l-2 border-neutral-200 border-r-2 px-1 min-w-40  max-w-40"
      >
        <p className="font-bold text-base  text-start w-full line-clamp-1">
          {{ gameTitle }}
        </p>
        <div className="flex flex-row gap-1 items-center">
          <PhStar class="text-base text-yellow-400" weight="fill" />
          {{ gameScore }}
        </div>
      </div>
      <div
        className="flex flex-row flex-wrap gap-1 justify-start items-start w-full h-10"
      >
        <div class="p-2 bg-red-600 text-white">
        </div>
      </div>
    </div>
  </div>
</RouterLink>
</template>
