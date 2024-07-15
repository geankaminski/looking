<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
</script>

<template>
  <header class="flex justify-between items-center bg-primary p-5 px-6 w-full md:gap-8">
    <h1>
      <router-link to="/" class="text-white text-2xl font-bold"> Looking </router-link>
    </h1>

    <div class="flex items-center">
      <FontAwesomeIcon
        aria-label="Notificações"
        :icon="faHeart"
        class="text-white text-xl cursor-pointer hover:opacity-70 transition-all"
      />
    </div>
  </header>
</template>
