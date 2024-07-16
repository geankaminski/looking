<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  title: string
  showBackArrow?: boolean
  link?: string
}>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <router-link v-if="props.showBackArrow" :to="props.link || '/'">
        <button class="text-primary mt-2 mr-2">
          <FontAwesomeIcon
            :icon="faArrowLeft"
            class="text-primary text-xl cursor-pointer hover:opacity-70 transition-all"
          />
        </button>
      </router-link>
      <h1 class="text-2xl font-bold">{{ props.title }}</h1>
    </div>
    <hr class="my-4 border-hint" />
  </div>
</template>
