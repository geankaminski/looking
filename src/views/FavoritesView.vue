<script setup lang="ts">
import { useHotelsStore } from '@/stores/hotels'
import HotelCard from '@/components/HotelCard.vue'
import { ref } from 'vue'

const hotelsStore = useHotelsStore()
const favorites = ref(hotelsStore.getFavorites)
</script>

<template>
  <div class="p-12">
    <h4 class="text-2xl font-bold text-center mb-4">Favoritos</h4>

    <div v-if="!favorites.length" class="text-center text-gray-500">
      <p>Você ainda não tem favoritos.</p>
    </div>

    <div v-else>
      <div>
        <p>Preço mais baixo: {{ hotelsStore.lowestPriceHotelFromFavorites }}</p>
        <p>Melhor avaliação: {{ hotelsStore.bestRatingHotelFromFavorites }}</p>
      </div>

      <div class="flex flex-wrap justify-center">
        <HotelCard v-for="hotel in favorites" :key="hotel.id" :hotel="hotel" class="m-2" />
      </div>
    </div>
  </div>
</template>
