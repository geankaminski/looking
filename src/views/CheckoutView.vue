<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useHotelsStore } from '@/stores/hotels'

import BookingDetails from '@/components/BookingDetails.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
import PageTitle from '@/components/PageTitle.vue'

import type { Hotel } from '@/types'

const hotelsStore = useHotelsStore()
const router = useRouter()

const { search } = storeToRefs(hotelsStore)

const hotel = ref<Hotel>({
  id: 0,
  name: '',
  description: '',
  price: 0,
  rating: 0,
  image: ''
})

onMounted(() => {
  const id = router.currentRoute.value.params.id
  hotel.value = hotelsStore.getHotelById(+id) || {
    id: 0,
    name: '',
    description: '',
    price: 0,
    rating: 0,
    image: ''
  }
})
</script>

<template>
  <div class="p-12 pt-8 md:p-4">
    <PageTitle title="Checkout" :showBackArrow="true" />

    <section>
      <div class="container flex flex-rol md:flex-col mt-8 gap-4">
        <BookingDetails :hotel="hotel" :search="search" />
        <PaymentInfo />
      </div>
    </section>
  </div>
</template>
