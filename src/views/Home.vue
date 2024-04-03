<script setup lang="ts">
//Libraries imports
import { useQueryClient } from "@tanstack/vue-query";

//Components imports
import GameCard from "@/components/GameCard.vue";
import SideBar from "@/components/SideBar.vue";

//Hooks imports
import { useGames } from "@/hooks/queries/useGames";

const queryClient = useQueryClient();

const games = useGames();

console.log(games.data.value);
</script>

<template>
  <main class="bg-slate-800 h-fit min-h-screen flex flex-row relative">
    <SideBar />
    <div class="text-center text-white flex flex-col items-start pb-5"></div>

    <div class="flex w-full justify-center overflow-y-scroll max-h-screen">
      <div class="flex flex-col w-full max-w-7xl">
        <div class="pt-20 pb-5 pl-6">
          <h1 class="text-white text-3xl font-bold">Popular Games</h1>
        </div>
        <div
          class="flex flex-wrap w-full gap-4 items-start justify-center h-fit"
        >
          <GameCard
            v-for="game in games.data.value?.results"
            :key="game.slug"
            :game-title="game.name"
            :game-image="game.background_image"
            :gamePlatforms="game.platforms"
          />
        </div>
      </div>
    </div>
  </main>
</template>
