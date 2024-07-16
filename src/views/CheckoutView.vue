<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useHotelsStore } from '@/stores/hotels'

import ReservationDetails from '@/components/ReservationDetails.vue'
import PaymentInfo from '@/components/PaymentInfo.vue'
import PageTitle from '@/components/PageTitle.vue'

const hotelsStore = useHotelsStore()
const router = useRouter()

const { search } = storeToRefs(hotelsStore)

const hotel = ref(null)

onMounted(() => {
  const id = router.currentRoute.value.params.id
  hotel.value = hotelsStore.getHotelById(id)
  console.log(hotel.value)
})
</script>

<template>
  <div class="p-12 pt-8">
    <PageTitle title="Checkout" showBackArrow="false" link="/" />

    <section>
      <div class="container flex flex-rol md:flex-col mt-8 gap-4">
        <ReservationDetails :hotel="hotel" :search="search" />
        <PaymentInfo />
      </div>
    </section>
  </div>
</template>
