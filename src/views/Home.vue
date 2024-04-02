<script setup lang="ts">
//Components imports
import GameCard from "@/components/GameCard.vue";

const games = [
  {
    id: 1,
    title: "Overwatch 2",
    description: "Full Game - PC/PS4/Xbox/Switch",
  },
  {
    id: 2,
    title: "The Last of Us Part II",
    description: "Full Game - PS4",
  },
  {
    id: 3,
    title: "God of War",
    description: "Full Game - PS4",
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    description: "Full Game - Pc/PS4/Xbox",
  },
  {
    id: 5,
    title: "Ghost of Tsushima",
    description: "Full Game - PS4",
  },
];
</script>

<template>
  <main class="bg-slate-800 min-h-screen">
    <div class="text-center text-white flex flex-col">
      <h1 class="text-xl font-bold text-white">Populares</h1>
    </div>
    <div class="flex flex-row w-full gap-4 items-center justify-center">
      <GameCard
        v-for="game in games"
        :key="game.id"
        :game-title="game.title"
        :gameDescription="game.description"
      />
    </div>
  </main>
</template>
