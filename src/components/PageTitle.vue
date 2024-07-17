<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  title: string
  showBackArrow?: boolean
}>()
</script>

<template>
  <div>
    <div class="flex items-center">
      <router-link v-if="props.showBackArrow">
        <button class="text-primary mt-1 mr-2" @click="$router.go(-1)">
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
