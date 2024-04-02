<script setup lang="ts">
//Components imports
import GameCard from "@/components/GameCard.vue";
import SideBar from "@/components/SideBar.vue";

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
  {
    id: 6,
    title: "Cyberpunk 2077",
    description: "Full Game - PC/PS4/Xbox",
  },
  {
    id: 7,
    title: "The Witcher 3",
    description: "Full Game - PC/PS4/Xbox/Switch",
  },
  {
    id: 8,
    title: "Horizon Zero Dawn",
    description: "Full Game - PS4",
  },
  {
    id: 9,
    title: "Death Stranding",
    description: "Full Game - PC/PS4",
  },
  {
    id: 10,
    title: "Assassin's Creed Valhalla",
    description: "Full Game - PC/PS4/Xbox",
  },
  {
    id: 11,
    title: "Marvel's Spider",
    description: "Full Game - PS4",
  },
  {
    id: 12,
    title: "Resident Evil Village",
    description: "Full Game - PC/PS4/Xbox",
  },
];
</script>

<template>
  <main class="bg-slate-800 h-fit min-h-screen flex flex-row relative">
    <SideBar />
    <div class="text-center text-white flex flex-col items-start pb-5"></div>

    <div class="flex w-full justify-center overflow-y-scroll max-h-screen">
      <div class="flex flex-col w-full max-w-7xl">
        <h1 class="text-white text-3xl font-bold">Games</h1>
        <div
          class="flex flex-wrap w-full gap-4 items-start justify-center h-fit"
        >
          <GameCard
            v-for="game in games"
            :key="game.id"
            :game-title="game.title"
            :gameDescription="game.description"
          />
        </div>
      </div>
    </div>
  </main>
</template>
