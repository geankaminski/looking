<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  label: string
  color?: string
  loading?: boolean
}>()
</script>

<template>
  <button
    :disabled="props.loading"
    :class="`bg-${props.color ? props.color : 'primary'} `"
    class="w-full text-white font-medium rounded-lg text-sm px-54 py-2 text-center mt-2 opacity-100 hover:opacity-90 focus:opacity-90 focus:outline-none transition duration-100 ease-in-out disabled:opacity-70"
  >
    <span v-if="!props.loading">{{ props.label }}</span>
    <div v-else class="flex items-center justify-center">
      <FontAwesomeIcon :icon="faSpinner" class="animate-spin" />
      <span class="ml-2">Loading...</span>
    </div>
  </button>
</template>
