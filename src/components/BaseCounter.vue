<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const props = defineProps<{
  label: string
  number: number
}>()

const emit = defineEmits(['increment', 'decrement'])
</script>

<template>
  <div class="w-full">
    <label class="mb-1 block font-small text-primary">{{ props.label }}</label>

    <div class="flex items-center justify-between">
      <button
        class="text-primary"
        @click="props.number > 0 && emit('decrement')"
        type="button"
        :aria-label="`Decrement ${props.label}`"
      >
        <FontAwesomeIcon :icon="faMinus" class="text-xl cursor-pointer" />
      </button>

      <p class="text-lg font-semibold text-primary">{{ props.number }}</p>

      <button
        class="text-primary"
        @click="emit('increment')"
        type="button"
        :aria-label="`Increment ${props.label}`"
      >
        <FontAwesomeIcon :icon="faPlus" class="text-xl cursor-pointer" />
      </button>
    </div>
  </div>
</template>
