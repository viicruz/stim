<script setup lang="ts">
//Library Imports
import { ref } from "vue";
import { useRoute } from "vue-router";

//Component Imports
import NavBar from "@/components/NavBar.vue";
import DetailCardGame from "@/components/DetailCardGame.vue";

//Hook Imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

const route = useRoute();
const id = ref(route.params.id);

const game = useSearchGameById(id);
</script>
<template>
  <main class="min-h-svh max-h-svh overflow-hidden h-fit relative bg-slate-900">
    <img class="absolute left-0 top-0 w-full opacity-30 min-h-svh" src="/backgroundImg.jpg" alt="">
    <div
      class="w-full flex items-center justify-center absolute left-0 top-0 z-10"
    >
      <NavBar />
    </div>
    <div class="text-center text-white flex flex-col items-start pb-5"></div>

    <div class="flex w-full justify-center">
      <div class="flex flex-col w-full max-w-7xl">
        <div class="pt-20 pb-5 pl-6">
          <h1 class="text-white text-xl font-bold">
            {{ game.data.value?.name }}
          </h1>
          <img
            v-for="gameScreenshot in game.data.value?.short_screenshots"
            class="w-48 h-48 rounded-lg"
            :src="gameScreenshot.image"
            alt="Game Image"
          />

          <img
            class="w-48 h-48 rounded-lg"
            :src="game.data.value?.background_image"
            alt="Game Image"
          />

          <p class="text-white text-xl font-bold">
            {{ game.data.value?.description_raw }}
          </p>

          <p v-for="platform in game.data.value?.platforms">
            {{ platform.platform.name }}
          </p>

          <p>
            {{ game.data.value?.rating }}
          </p>

          <p>
            {{ game.data.value?.released }}
          </p>
          <p>
            {{ game.data.value?.genres.map((genre) => genre.name).join(", ") }}
          </p>
          <p>metacritic: {{ game.data.value?.metacritic }}</p>
        </div>
      </div>
    </div>
  </main>
</template>
