<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useHotelsStore } from '@/stores/hotels'

const hotelsStore = useHotelsStore()
const { toggleFavorite } = hotelsStore
const { favorites } = storeToRefs(hotelsStore)

const router = useRouter()

interface Hotel {
  id: number
  name: string
  price: number
  rating: number
}

const props = defineProps<{
  hotel: Hotel
}>()
</script>

<template>
  <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
  >
    <a href="#">
      <img class="rounded-t-lg" src="https://picsum.photos/500/300" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <div class="flex items-center justify-between">
        <h5 class="text-xl font-semibold tracking-tight text-primary mt-2">
          {{ props.hotel.name }}
        </h5>

        <button class="text-primary dark:text-primary mt-3" @click="toggleFavorite(props.hotel.id)">
          <FontAwesomeIcon
            aria-label="Notificações"
            :icon="favorites.includes(props.hotel.id) ? faHeartSolid : faHeart"
            class="text-primary text-xl cursor-pointer hover:opacity-70 transition-all"
          />
        </button>
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {{ props.hotel.description }}
      </p>

      <div class="flex items-center justify-between mt-2.5 mb-2">
        <div class="flex items-center">
          <FontAwesomeIcon :icon="faStar" class="text-primary text-xl" />
          <span class="text-gray-500 dark:text-gray-400 ml-1">{{ props.hotel.rating }}</span>
        </div>

        <div class="text-3xl font-bold text-primary">${{ props.hotel.price }}</div>
      </div>

      <button
        @click="router.push({ name: 'checkout', params: { id: props.hotel.id } })"
        class="w-full text-white bg-primary font-medium rounded-lg text-sm px-54 py-2.5 text-center mt-2"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>
