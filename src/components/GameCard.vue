<script setup lang="ts">
defineProps<{
  gameTitle: string;
  gameDescription: string;
}>();
</script>

<template>
  <div class="w-48 bg-slate-700 rounded-lg shadow-2xl overflow-hidden">
    <div class="w-full h-48 overflow-hidden">
      <img
        class="object-cover w-full h-full"
        src="https://th.bing.com/th/id/OIP.KxNhQoVv4unUCYC6CGGNYAAAAA?rs=1&pid=ImgDetMain"
        alt="Game Image"
      />
    </div>

    <div class="px-1 py-0.5">
      <div class="w-full flex flex-col items-start">
        <h3 class="line-clamp-1 text-white font-bold text-base">
          {{ gameTitle }}
        </h3>
        <p class="text-white font-light text-sm line-clamp-1">{{ gameDescription }}</p>
      </div>

      <div class="w-full flex">
        <div class="w-full gap-1.5 flex items-center justify-start">
          <span class="font-medium text-base text-white">R$</span>

          <div class="w-full flex items-center justify-start">
            <span class="font-extrabold text-white text-xl">999</span>
            <h1 class="font-medium text-white text-xs">,99</h1>
          </div>
          <button class="bg-emerald-600 px-5 py-1.5 rounded-lg">
            <label class="text-emerald-50 text-sm font-bold">Buy</label>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
