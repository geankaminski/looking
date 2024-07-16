<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { useHotelsStore } from '@/stores/hotels'

import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import BaseCounter from './BaseCounter.vue'

import type { UserSearch } from '@/types'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { loading } = storeToRefs(hotelsStore)
const { fetchHotels, setSearch } = hotelsStore

const userSearch = ref<UserSearch>({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  rooms: 1
})

const handleSearch = async () => {
  setSearch(userSearch.value)

  const status = await fetchHotels()

  if (status) {
    router.push({ name: 'hotels' })
  }
}
</script>

<template>
  <div class="flex items-center justify-center p-12 md:p-4">
    <div class="mx-auto w-full max-w-[550px] bg-white border border-primary rounded-md shadow-form">
      <form @submit.prevent="handleSearch" class="p-8 bg-white rounded-md shadow-form">
        <h2 class="text-2xl font-semibold text-center mb-3">Encontre hotéis</h2>

        <BaseInput
          label="Destino"
          v-model="userSearch.location"
          type="text"
          placeholder="São Paulo"
          @update:model="userSearch.location = $event"
        />

        <BaseCounter
          label="Hóspedes"
          :number="userSearch.guests"
          @increment="userSearch.guests++"
          @decrement="userSearch.guests--"
          class="mb-5"
        />

        <BaseCounter
          label="Quartos"
          :number="userSearch.rooms"
          @increment="userSearch.rooms++"
          @decrement="userSearch.rooms--"
          class="mb-5"
        />

        <div class="-mx-3 flex flex-wrap flex-row md:flex-col">
          <div class="w-full px-3">
            <BaseInput
              label="Data de entrada"
              v-model="userSearch.checkIn"
              type="date"
              :min="new Date().toISOString().split('T')[0]"
              placeholder="2022-12-31"
              @update:model="userSearch.checkIn = $event"
            />
          </div>
          <div class="w-full px-3">
            <BaseInput
              label="Data de saída"
              v-model="userSearch.checkOut"
              :min="userSearch.checkIn"
              type="date"
              placeholder="2023-01-01"
              @update:model="userSearch.checkOut = $event"
            />
          </div>
        </div>

        <div>
          <BaseButton
            type="submit"
            :disabled="loading"
            label="Buscar hoteis"
            class="w-full hover:shadow-form rounded-md bg-primary mt-4 py-2 px-8 text-center text-base font-semibold text-white outline-none"
          />
        </div>
      </form>
    </div>
  </div>
</template>
