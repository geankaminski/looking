<script setup lang="ts">
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'

import { useHotelsStore } from '@/stores/hotels'

import TheHeader from '@/components/TheHeader.vue'
import InfoModal from '@/components/InfoModal.vue'

const hotelsStore = useHotelsStore()

const { infoModal } = storeToRefs(hotelsStore)
</script>

<template>
  <InfoModal :isOpen="infoModal" @modal-close="infoModal = null" />
  <TheHeader />
  <RouterView />
</template>
