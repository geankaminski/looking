<script setup lang="ts">
import { useHotelsStore } from '@/stores/hotels'
import { useRouter } from 'vue-router'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { reserveHotel } = hotelsStore

const handleSubmit = async () => {
  reserveHotel(router.currentRoute.value.params.id)
  router.push({ name: 'confirmation' })
}
</script>

<template>
  <div class="flex flex-col md:flex-row mt-8">
    <div class="w-full md:w-2/3">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-xl font-semibold text-primary">Detalhes do pedido</h2>
        <div class="flex items-center justify-between mt-4">
          <div class="flex items center">
            <img
              src="https://picsum.photos/500/300"
              alt="product image"
              class="w-20 h-20 object-cover rounded-lg"
            />
            <div class="ml-4">
              <h3 class="text-lg font-semibold text-primary">Hotel Name</h3>
              <p class="text-sm text-gray-500">1 x Standard Room</p>
            </div>
          </div>
          <p class="text-lg font-semibold text-primary">$100</p>
        </div>

        <button
          class="mt-4 w-full bg-primary text-white font-semibold py-3 rounded-lg"
          @click="handleSubmit"
        >
          Realizar reserva
        </button>
      </div>
    </div>
  </div>
</template>
