<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useHotelsStore } from '@/stores/hotels'

import HotelCard from '@/components/HotelCard.vue'
import SortSection from '@/components/SortSection.vue'
import PageTitle from '@/components/PageTitle.vue'

const hotelsStore = useHotelsStore()

const hotels = ref([])

onMounted(() => {
  getData()
})

const getData = () => {
  hotels.value = hotelsStore.getSortedHotels
}
</script>

<template>
  <div class="p-12 pt-8">
    <PageTitle title="Resultados da busca" showBackArrow link="/" />

    <SortSection @sort="getData" />

    <div class="flex flex-wrap justify-center">
      <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" class="m-2" />
    </div>
  </div>
</template>
