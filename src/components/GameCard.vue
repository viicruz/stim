<script setup lang="ts">
//Libraries imports
import { ref } from "vue";

//Components imports
import Game from "@/views/Game.vue";

//Types imports
import type { Platform } from "@/schemas/platform";
import { PhStar } from "@phosphor-icons/vue";
import router from "@/router";

defineProps<{
  gameId:number;
  gameTitle: string;
  gameImage: string;
  gameScore: number;
  gamePlatforms: {
    platform: Platform;
  }[];
}>();

const isHearted = ref<boolean>(false);

const toggleHeart = () => {
  isHearted.value = !isHearted.value;
};

const route: string = "/game";
</script>

<template>
  <div
    class="bg-transparent rounded-lg transition-all hover:bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5"
  >
    <div class="w-48 shadow-2xl h-64 overflow-hidden rounded-lg relative">
      <div class="w-full h-full overflow-hidden relative">
        <RouterLink :to="`/game/${gameId}`">
        <img
          class="object-cover w-full h-full"
          :src="gameImage"
          alt="Game Image"
        />
      </RouterLink>
      </div>
      

      <div
        class="px-1 py-0.5 absolute bottom-0 left-0 w-full z-[1] bg-secondary-900/70 backdrop-blur-md"
      >
        <div class="w-full flex flex-col items-start">
          <h3 class="line-clamp-1 text-white font-bold text-base">
            {{ gameTitle }}
          </h3>
          <p class="text-white font-light text-sm line-clamp-1">
            {{
              gamePlatforms.map((platform) => platform.platform.name).join(", ")
            }}
          </p>
        </div>

        <div class="w-full flex">
          <div class="w-full gap-1.5 flex items-center justify-start">
            <PhStar class="font-medium text-xl text-yellow-400" weight="fill" />
            <div class="w-full flex items-center justify-start">
              <span class="font-extrabold text-white text-xl">{{
                gameScore
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
