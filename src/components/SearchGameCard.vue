<script setup lang="ts">
//Libraries imports
import { PhStar } from "@phosphor-icons/vue";

//Types imports
import type { Genre } from "@/schemas/genre";
import type { Platform } from "@/schemas/platform";

//Components imports
import GamePlatformTag from "@/components/GamePlatformTag.vue";

defineProps<{
  gameId: number;
  gameTitle: string;
  gameImage: string;
  gameScore: number;

  gamePlatforms: {
    platform: Platform;
  }[];
}>();
</script>

<template>
  <!-- Navigation to game screen with dynamic id -->
  <RouterLink :to="`/game/${gameId}`">
    <div
      class="bg-transparent rounded-lg transition-all bg-white hover:bg-gradient-to-br from-primary-500 to-secondary-500 ps-0.5"
    >
      <div class="flex flex-row items-center gap-1">
        <div
          class="rounded-full overflow-hidden border min-h-8 max-h-8 min-w-8 max-w-8"
        >
          <img class="w-8 h-8" alt="Game Image" :src="gameImage" />
        </div>

        <div
          class="border-l-2 border-neutral-200 border-r-2 px-1 min-w-40 max-w-40"
        >
          <p class="font-bold text-base text-start w-full line-clamp-1">
            {{ gameTitle }}
          </p>
          <div class="flex flex-row gap-1 items-center">
            <PhStar class="text-base text-yellow-400" weight="fill" />
            {{ gameScore }}
          </div>
        </div>

        <div
          class="flex flex-row flex-wrap gap-1 justify-start items-start w-full h-10"
        >
          <GamePlatformTag
            v-for="platform in gamePlatforms"
            :key="platform.platform.name" 
            :title="platform.platform.name"
          />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
