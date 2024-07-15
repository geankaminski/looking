<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

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
      <img class="p-2 rounded-t-lg" src="https://picsum.photos/500/300" alt="product image" />
    </a>
    <div class="px-5 pb-5">
      <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-primary">
          {{ props.hotel.name }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
          >{{ props.hotel.rating }}</span
        >
      </div>
      <div class="flex items-center justify-between">
        <span class="text-3xl font-bold text-primary">${{ props.hotel.price }}</span>
        <a
          href="#"
          class="w-60 text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >Add to cart</a
        >
        <button class="text-primary dark:text-primary">
          <FontAwesomeIcon
            aria-label="Notificações"
            :icon="faHeart"
            class="text-primary text-xl cursor-pointer hover:opacity-70 transition-all"
          />
        </button>
      </div>
    </div>
  </div>
</template>
