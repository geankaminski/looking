<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

import { useHotelsStore } from '@/stores/hotels'

import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'
import BaseCounter from './BaseCounter.vue'

import type { UserSearch } from '@/types'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { loading, search } = storeToRefs(hotelsStore)
const { fetchHotels, setSearch } = hotelsStore

const userSearch = ref<UserSearch>({
  location: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  rooms: 1
})

const errors = ref({
  location: '',
  checkIn: '',
  checkOut: ''
})

onMounted(() => {
  userSearch.value = search.value
})

const handleSearch = async () => {
  if (!validateSearch()) return

  setSearch(userSearch.value)

  const status = await fetchHotels()

  if (status) {
    router.push({ name: 'hotels' })
  }
}

const validateSearch = () => {
  errors.value = {
    location: userSearch.value.location ? '' : 'Campo obrigatório',
    checkIn: userSearch.value.checkIn ? '' : 'Campo obrigatório',
    checkOut: userSearch.value.checkOut ? '' : 'Campo obrigatório'
  }

  return !Object.values(errors.value).some((error) => error)
}
</script>

<template>
  <div class="flex items-center justify-center p-12 md:p-4">
    <div class="mx-auto w-full max-w-[550px] bg-white border border-primary rounded-md shadow-form">
      <form @submit.prevent="handleSearch" class="p-8 bg-white rounded-md shadow-form">
        <h2 class="text-2xl font-semibold text-center mb-3">Find hotels</h2>

        <BaseInput
          label="Location"
          v-model="userSearch.location"
          type="text"
          placeholder="Shire"
          :error="errors.location"
          @update:model="userSearch.location = $event"
        />

        <BaseCounter
          label="Guests"
          :number="userSearch.guests"
          @increment="userSearch.guests++"
          @decrement="userSearch.guests--"
          class="mb-5"
        />

        <BaseCounter
          label="Rooms"
          :number="userSearch.rooms"
          @increment="userSearch.rooms++"
          @decrement="userSearch.rooms--"
          class="mb-5"
        />

        <div class="-mx-3 flex flex-wrap flex-row md:flex-col">
          <div class="w-full px-3">
            <BaseInput
              label="Check-in"
              v-model="userSearch.checkIn"
              type="date"
              :error="errors.checkIn"
              :min="new Date().toISOString().split('T')[0]"
              placeholder="2022-12-31"
              @update:model="userSearch.checkIn = $event"
            />
          </div>
          <div class="w-full px-3">
            <BaseInput
              label="Check-out"
              v-model="userSearch.checkOut"
              :min="userSearch.checkIn"
              type="date"
              placeholder="2023-01-01"
              :error="errors.checkOut"
              @update:model="userSearch.checkOut = $event"
            />
          </div>
        </div>

        <div>
          <BaseButton type="submit" :loading="loading" :disabled="loading" label="Search" />
        </div>
      </form>
    </div>
  </div>
</template>
