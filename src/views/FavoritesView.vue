<script setup lang="ts">
import { ref } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons'

import { useHotelsStore } from '@/stores/hotels'

import HotelCard from '@/components/HotelCard.vue'
import PageTitle from '@/components/PageTitle.vue'

const hotelsStore = useHotelsStore()
const favorites = ref(hotelsStore.getFavorites)
</script>

<template>
  <div class="p-12 pt-8 md:p-4">
    <PageTitle title="Favorites" :showBackArrow="true" />

    <div v-if="!favorites.length" class="text-center mt-8">
      <p class="font-semibold mb-2">You don't have any favorites yet</p>
    </div>

    <div v-else>
      <div class="text-center mb-4">
        <p class="font-semibold mb-2">
          <FontAwesomeIcon :icon="faDollarSign" class="text-green" />
          Lowest price: {{ hotelsStore.lowestPriceHotelFromFavorites.name }}
        </p>
        <p class="font-semibold">
          <FontAwesomeIcon :icon="faStar" class="text-yellow" />
          Best rating: {{ hotelsStore.bestRatingHotelFromFavorites.name }}
        </p>
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
