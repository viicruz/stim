<script setup lang="ts">
//Library imports

//Component imports
import GameCard from "@/components/GameCard.vue";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

//Hook imports
import { useGames } from "@/hooks/queries/useGames";


const games = useGames();

console.log(games.data.value);
</script>

<template>
  <main class="min-h-svh max-h-svh overflow-hidden h-fit relative bg-slate-900">
    <img class="absolute left-0 top-0 w-full opacity-30 min-h-svh" src="/backgroundImg.jpg" alt="">
    <div class="w-full flex items-center justify-center absolute left-0 top-0 z-10">
    <NavBar/>
    </div>
    <SideBar/>
    <div class="flex flex-row relative">

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
            :key="game.id"
            :game-id="game.id"
            :game-title="game.name"
            :game-image="game.background_image"
            :gamePlatforms="game.platforms"
            :gameScore="game.rating"
          />
        </div>
      </div>
    </div>
  </div>

  </main>
</template>
