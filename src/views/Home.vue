<script setup lang="ts">
import GameCard from "@/components/GameCard.vue";
</script>

<template>
 <main class="bg-slate-800 min-h-screen flex items-center justify-center">
    <div class="text-center text-white">
      <h1 class="text-4xl font-bold mb-4">Stim!</h1>
      <h2 class="text-2xl">The best way to buy games online.</h2>
      <GameCard game-title="Testando" gameDescription="Full Game - PS5"/>
    </div>
  </main>
</template>
