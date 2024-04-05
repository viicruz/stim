<script setup lang="ts">

//Components Imports
import UserSectionComponent from "@/components/UserSectionComponent.vue";
import LikedGameSection from "@/components/LikedGameSection.vue";
import LibraryGameSection from "@/components/LibraryGameSection.vue";
</script>

<template>
  <div
    class="w-80 h-full min-h-screen bg-secondary-200 p-2 gap-4 flex flex-col absolute left-0 top-0 z-10"
  >
    <UserSectionComponent />

    <div class="flex flex-col gap-2">
      <LikedGameSection />
      <LibraryGameSection />
    </div>
  </div>
</template>
