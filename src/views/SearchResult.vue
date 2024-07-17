<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useHotelsStore } from '@/stores/hotels'

import HotelCard from '@/components/HotelCard.vue'
import SortSection from '@/components/SortSection.vue'
import PageTitle from '@/components/PageTitle.vue'

import type { Hotel } from '@/types'

const hotelsStore = useHotelsStore()

const hotels = ref<Hotel[]>([])

onMounted(() => {
  getData()
})

const getData = () => {
  hotels.value = hotelsStore.getSortedHotels
}
</script>

<template>
  <div class="p-12 pt-8 md:p-4">
    <PageTitle title="Search results" showBackArrow />

    <SortSection @sort="getData" />

    <div class="flex flex-wrap justify-center">
      <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" class="m-2" />
    </div>
  </div>
</template>
