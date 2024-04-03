<script setup lang="ts">
import { PhMagnifyingGlass } from '@phosphor-icons/vue';
</script>

<template>
    <div class="border-2 w-full max-w-[512px] flex flex-col pl-3  pr-3 rounded-lg  bg-white overflow-hidden">
        <div className='flex items-center gap-3'>
        <PhMagnifyingGlass className='tex-base text-black' />
        <input className='w-full h-11 text-start text-black placeholder-black outline-none bg-transparent' type="text" placeholder='Digite o nome do artista' />
      </div>

    </div>
</template>