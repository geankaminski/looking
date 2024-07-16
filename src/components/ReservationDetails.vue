<script setup lang="ts">
import { getDays, formatDate } from '@/utils/date'

import type { Hotel, UserSearch } from '@/types'

const props = defineProps<{
  hotel: Hotel
  search: UserSearch
}>()
</script>

<template>
  <div class="w-full" v-if="props.hotel">
    <div class="bg-white p-5 bg-white border rounded-lg shadow">
      <h2 class="text-xl font-semibold text-primary">Detalhes do pedido</h2>
      <div class="flex items-center justify-between mt-4">
        <div class="flex items center">
          <img
            src="https://picsum.photos/500/300"
            alt="product image"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-primary">
              {{ props.hotel.name }} - {{ props.search.location }}
            </h3>
            <p class="text-sm text-gray-500">
              {{ formatDate(props.search.checkIn) }} - {{ formatDate(props.search.checkOut) }} |
              {{ getDays(props.search.checkIn, props.search.checkOut) }} dias
            </p>
            <p class="text-sm text-gray-500">
              {{ props.search.guests }} hóspedes e {{ props.search.rooms }} quartos
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-4 font-semibold">
        <p>
          Total: ${{ props.hotel.price * getDays(props.search.checkIn, props.search.checkOut) }}
        </p>
      </div>
    </div>
  </div>
</template>
