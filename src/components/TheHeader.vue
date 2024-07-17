<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faBell } from '@fortawesome/free-regular-svg-icons'

import InfoModal from '@/components/InfoModal.vue'

import { useHotelsStore } from '@/stores/hotels'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { favorites, notifications } = storeToRefs(hotelsStore)

const openNotifications = ref(false)
const openModal = ref(false)

watchEffect((onInvalidate) => {
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement
    const notificationsButton = document.querySelector('.notifications-button')

    if (!notificationsButton || !notificationsButton.contains(target)) {
      openNotifications.value = false
    }
  }

  if (openNotifications.value) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }

  onInvalidate(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})

const handleNotificationClick = (id: number) => {
  openNotifications.value = false
  openModal.value = true
  notifications.value = notifications.value.filter((n) => n.id !== id)
}
</script>

<template>
  <InfoModal :isOpen="openModal" @modal-close="openModal = false" />
  <header class="flex justify-between items-center bg-primary p-5 px-6 w-full md:gap-8">
    <h1>
      <router-link to="/" class="text-white text-2xl font-bold">Looking</router-link>
    </h1>

    <div class="flex gap-4">
      <button
        class="notifications-button py-2 px-1 relative border-transparent text-gray rounded-full hover:text-gray focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out"
        aria-label="Notifications"
        @click="openNotifications = !openNotifications"
      >
        <FontAwesomeIcon
          aria-label="Notificações"
          :icon="faBell"
          class="text-white text-2xl cursor-pointer hover:opacity-70 transition-all"
        />
        <span class="absolute inset-0 object-right-top -mr-5 mt-4" v-if="notifications.length">
          <div
            class="inline-flex items-center px-1 bg-red rounded-full pb-0.5 text-xs leading-4 text-white font-semibold"
          >
            {{ notifications.length }}
          </div>
        </span>
      </button>

      <div
        v-if="openNotifications"
        class="notifications-popup absolute top-12 right-20 w-80 bg-white border rounded-lg shadow-lg p-4"
      >
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Notifications</h2>
        </div>
        <div class="mt-4" v-if="notifications.length">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            @click="handleNotificationClick(notification.id)"
            class="flex items-center gap-4 py-2 cursor-pointer"
          >
            <div class="w-4 h-4 bg-gray rounded-full"></div>
            <div>
              <p class="text-sm font-semibold">{{ notification.message }}</p>
            </div>
          </div>
        </div>
        <p v-else class="text-hint">No new notifications</p>
      </div>

      <button
        @click="router.push({ name: 'favorites' })"
        class="py-2 px-1 relative border-transparent text-gray rounded-full hover:text-gray focus:outline-none focus:text-gray transition duration-150 ease-in-out"
        aria-label="Favorites"
      >
        <FontAwesomeIcon
          aria-label="Favoritos"
          :icon="faHeart"
          class="text-white text-2xl cursor-pointer hover:opacity-70 transition-all"
        />
        <span class="absolute inset-0 object-right-top -mr-5 mt-4" v-if="favorites.length">
          <div
            class="inline-flex items-center px-1 bg-red rounded-full pb-0.5 text-xs leading-4 text-white font-semibold"
          >
            {{ favorites.length }}
          </div>
        </span>
      </button>
    </div>
  </header>
</template>
