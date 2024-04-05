<script setup lang="ts">
defineProps<{
  gameId?: number;
  gameTitle: string;
  gameImage: string;
  gameScore: number;
}>();
</script>
<template>
  <div class="bg-slate-500 w-full p-2 rounded-lg flex flex-row">
    <div class="bg-red-600 w-1/2 overflow-hidden relative">
      <img
        class="object-cover w-full h-full"
        :src="gameImage"
        alt="Game Image"
      />
    </div>

    <div>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
      <p>aogahgaohgahi</p>
      <p>aigajgoaijgaj</p>
    </div>
  </div>
</template>
