<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid, faAward, faStar } from '@fortawesome/free-solid-svg-icons'

import BaseButton from '@/components/BaseButton.vue'
import { useHotelsStore } from '@/stores/hotels'

import type { Hotel } from '@/types'

const hotelsStore = useHotelsStore()
const { toggleFavorite } = hotelsStore
const { favorites } = storeToRefs(hotelsStore)

const router = useRouter()

const loadingImg = ref(true)

const props = defineProps<{
  hotel: Hotel
  featured?: boolean
}>()
</script>

<template>
  <div
    class="w-full max-w-sm bg-white border rounded-lg shadow relative"
    :class="featured ? 'outline outline-green outline-4 border-0' : ''"
  >
    <div
      v-if="featured"
      class="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg z-10"
    >
      <div class="flex items-center justify-center bg-gray p-2 rounded-full w-12 h-12">
        <FontAwesomeIcon :icon="faAward" class="text-xl" />
      </div>
    </div>
    <img
      v-show="!loadingImg"
      class="rounded-t-lg h-56 w-full transition-all duration-300 object-cover"
      :src="props.hotel.image"
      alt="product image"
      @load="loadingImg = false"
      @error="loadingImg = true"
    />

    <div v-if="loadingImg" class="animate-pulse w-full h-56 rounded-t-lg"></div>

    <div class="px-5 pb-5">
      <div class="flex items-center justify-between">
        <h5 class="text-xl font-semibold tracking-tight text-primary mt-2">
          {{ props.hotel.name }}
        </h5>

        <button class="text-primary dark:text-primary mt-3" @click="toggleFavorite(props.hotel.id)">
          <FontAwesomeIcon
            :icon="favorites.includes(props.hotel.id) ? faHeartSolid : faHeart"
            :class="favorites.includes(props.hotel.id) ? 'text-red' : 'text-primary'"
            class="text-primary text-xl cursor-pointer hover:opacity-70 transition-all"
          />
        </button>
      </div>

      <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {{
          props.hotel.description.length > 80
            ? props.hotel.description.slice(0, 80) + '...'
            : props.hotel.description
        }}
      </p>

      <div class="flex items-center justify-between mt-2.5 mb-2">
        <div class="flex items-center">
          <FontAwesomeIcon :icon="faStar" class="text-primary text-xl text-yellow" />
          <span class="text-gray-500 dark:text-gray-400 ml-1">{{ props.hotel.rating }}</span>
        </div>

        <div class="text-3xl font-bold text-primary">${{ props.hotel.price }}</div>
      </div>

      <BaseButton
        @click="router.push({ name: 'checkout', params: { id: props.hotel.id } })"
        label="Add to cart"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0% {
    background-color: #f5f5f5;
  }
  50% {
    background-color: #686868;
  }
  100% {
    background-color: #f5f5f5;
  }
}

.animate-pulse {
  animation: pulse 1s infinite;
}
</style>
