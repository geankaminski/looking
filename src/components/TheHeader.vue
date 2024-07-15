<script setup lang="ts">
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { storeToRefs } from 'pinia'
import { useHotelsStore } from '@/stores/hotels'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { favorites } = storeToRefs(hotelsStore)
</script>

<template>
  <header class="flex justify-between items-center bg-primary p-5 px-6 w-full md:gap-8">
    <h1>
      <router-link to="/" class="text-white text-2xl font-bold"> Looking </router-link>
    </h1>

    <div>
      <button
        @click="router.push({ name: 'favorites' })"
        class="py-2 px-1 relative border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Cart"
      >
        <FontAwesomeIcon
          aria-label="Notificações"
          :icon="faHeart"
          class="text-white text-xl cursor-pointer hover:opacity-70 transition-all"
        />
        <span class="absolute inset-0 object-right-top -mr-6 mt-4" v-if="favorites.length">
          <div
            class="inline-flex items-center px-1.5 bg-secondary py-0.5 rounded-full text-xs font-semibold leading-4 bg-red-500 text-white"
          >
            {{ favorites.length }}
          </div>
        </span>
      </button>
    </div>
  </header>
</template>
