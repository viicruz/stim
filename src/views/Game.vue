<script setup lang="ts">
//Library Imports
import { ref } from "vue";
import { useRoute } from "vue-router";

//Component Imports

//Hook Imports
import { useSearchGameById } from "@/hooks/queries/useSearchGameById";
const route = useRoute();
const id = ref(route.params.id);

const searchGame = useSearchGameById(id);
</script>
<template>
  <main></main>
</template>
