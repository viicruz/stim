<script setup lang="ts">
//Library Imports
import { ref } from "vue";

//Component Imports

//Hook Imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";

const id = ref(22508);
const searchGame = useSearchGameById(id);
console.log(searchGame.data.value);
</script>
<template>
  <main>
    <h1>
      {{ $route.params.id }}
      Game
    </h1>
  </main>
</template>
