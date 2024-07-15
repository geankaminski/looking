<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useHotelsStore } from '@/stores/hotels'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { loading } = storeToRefs(hotelsStore)
const { fetchHotels, setSearch } = hotelsStore

const userSearch = ref({
  destination: '',
  guests: 0,
  rooms: 0,
  checkIn: '',
  checkOut: ''
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
  <div class="flex items-center justify-center p-12 bg-secondary">
    <div class="mx-auto w-full max-w-[550px] bg-white border border-primary rounded-md shadow-form">
      <form @submit.prevent="handleSearch" class="p-8 bg-white rounded-md shadow-form">
        <div class="mb-5">
          <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">Destino</label>
          <input
            v-model="userSearch.destination"
            type="text"
            name="guest"
            id="guest"
            placeholder="São Paulo"
            class="w-full appearance-none rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">
            Quantos hóspedes?
          </label>
          <input
            v-model="userSearch.guests"
            type="number"
            name="guest"
            id="guest"
            placeholder="5"
            min="0"
            class="w-full appearance-none rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label for="guest" class="mb-3 block text-base font-medium text-[#07074D]">
            Quantos quartos?
          </label>
          <input
            v-model="userSearch.rooms"
            type="number"
            name="guest"
            id="guest"
            placeholder="5"
            min="0"
            class="w-full appearance-none rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="-mx-3 flex flex-wrap">
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                Data de entrada
              </label>
              <input
                v-model="userSearch.checkIn"
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div class="w-full px-3 sm:w-1/2">
            <div class="mb-5">
              <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                Data de saída
              </label>
              <input
                v-model="userSearch.checkOut"
                type="date"
                name="date"
                id="date"
                class="w-full rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-full hover:shadow-form rounded-md bg-primary mt-4 py-2 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Buscar hoteis
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style></style>
