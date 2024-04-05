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

const searchGame = useSearchGameById(id);
</script>
<template>
  <main class="bg-slate-800 min-h-screen h-fit relative">
    <div
      class="w-full flex items-center justify-center absolute left-0 top-0 z-10"
    >
    </div>
    <div class="text-center text-white flex flex-col items-start pb-5"></div>

    <div class="flex w-full justify-center overflow-y-scroll max-h-screen">
      <div class="flex flex-col w-full max-w-7xl">
        <div class="pt-20 pb-5 pl-6">
          <h1 class="text-white text-xl font-bold">
            {{ searchGame.data.value?.name }}
          </h1>
        </div>
      </div>
    </div>
  </main>
</template>
