<script setup lang="ts">
//Libraries imports
import { defineProps } from "vue";

defineProps<{
  title: string;
}>();
</script>
<template>
  <div className="bg-neutral-200 px-1 py-[1px] rounded">
    <p className="text-neutral-500 font-normal text-[0.65rem] text-center capitalize">
      {{ title }}
    </p>
  </div>
</template>
