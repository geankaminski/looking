<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useHotelsStore } from '@/stores/hotels'

const hotelsStore = useHotelsStore()

const { sortByRating, sortByValue } = storeToRefs(hotelsStore)

const emits = defineEmits(['sort'])

watch([sortByRating, sortByValue], () => {
  emits('sort')
})
</script>

<template>
  <div>
    <div class="flex items-center justify-end px-5 py-3">
      <div>
        <span class="text-sm text-gray-600 dark:text-gray-300">Sort by Rating:</span>
        <select v-model="sortByRating" class="mx-2 px-2 py-1 border rounded-md">
          <option value="desc">Highest to Lowest</option>
          <option value="asc">Lowest to Highest</option>
        </select>
      </div>
      <div class="ml-4">
        <span class="text-sm text-gray-600 dark:text-gray-300">Sort by Price:</span>
        <select v-model="sortByValue" class="mx-2 px-2 py-1 border rounded-md">
          <option value="desc">Highest to Lowest</option>
          <option value="asc">Lowest to Highest</option>
        </select>
      </div>
    </div>
  </div>
</template>
