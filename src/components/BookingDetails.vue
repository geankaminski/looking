<script setup lang="ts">
import { watch } from 'vue'
import { getDays, formatDate } from '@/utils/date'

import { useCounterAnimation } from '@/composables/useCounterAnimation'

import { formatMoney } from '@/utils/money'

import type { Hotel, UserSearch } from '@/types'

const props = defineProps<{
  hotel: Hotel
  search: UserSearch
}>()

const { count, animate } = useCounterAnimation()

const updateCounter = (newValue: number) => {
  animate(newValue)
}

watch(() => props.hotel.price, updateCounter)
</script>

<template>
  <div class="w-full" v-if="props.hotel">
    <div class="bg-white p-5 bg-white border rounded-lg shadow">
      <h2 class="text-xl font-semibold text-primary">Booking details</h2>
      <div class="flex items-center justify-between mt-4">
        <div class="flex items-center">
          <img
            src="https://picsum.photos/500/300"
            alt="product image"
            class="w-20 h-20 object-cover rounded-lg"
          />
          <div class="ml-4">
            <h3 class="text-lg font-semibold text-primary">
              {{ props.hotel.name }} - {{ props.search.location }}
            </h3>
            <p class="text-sm date-info">
              {{ formatDate(props.search.checkIn) }} - {{ formatDate(props.search.checkOut) }} |
              {{ getDays(props.search.checkIn, props.search.checkOut) }} days
            </p>
            <p class="text-sm date-info">
              {{ formatMoney(props.hotel.price) }}
              by night
            </p>
            <p class="text-sm guests-info">
              {{ props.search.guests }} {{ props.search.guests > 1 ? 'guests' : 'guest' }} and
              {{ props.search.rooms }} {{ props.search.rooms > 1 ? 'rooms' : 'room' }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-end mt-4 font-semibold">
        <p class="total-price">
          Total: {{ formatMoney(count * getDays(props.search.checkIn, props.search.checkOut)) }}
          <span class="text-sm text-hint">taxes included</span>
        </p>
      </div>
    </div>
  </div>
</template>
