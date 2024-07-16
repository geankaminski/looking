<script setup lang="ts">
import { useHotelsStore } from '@/stores/hotels'
import HotelCard from '@/components/HotelCard.vue'
import PageTitle from '@/components/PageTitle.vue'
import { ref } from 'vue'

const hotelsStore = useHotelsStore()
const favorites = ref(hotelsStore.getFavorites)
</script>

<template>
  <div class="p-12 pt-8">
    <PageTitle title="Favoritos" showBackArrow link="/" />

    <div v-if="!favorites.length" class="text-center text-gray-500">
      <p>Você ainda não tem favoritos.</p>
    </div>

    <div v-else>
      <div class="text-center mb-4">
        <p>Preço mais baixo: {{ hotelsStore.lowestPriceHotelFromFavorites.name }}</p>
        <p>Melhor avaliação: {{ hotelsStore.bestRatingHotelFromFavorites.name }}</p>
      </div>

      <div class="flex flex-wrap justify-center">
        <HotelCard
          v-for="hotel in favorites"
          :key="hotel.id"
          :hotel="hotel"
          class="m-2"
          :featured="
            hotel.id === hotelsStore.bestRatingHotelFromFavorites.id ||
            hotel.id === hotelsStore.lowestPriceHotelFromFavorites.id
          "
        />
      </div>
    </div>
  </div>
</template>
