<script setup lang="ts">
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
      <svg
        class="animate-spin -mr-1 ml-3 h-4 w-4 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8 8 0 0012 20v-4a4 4 0 00-4-4V7.708L6.707 9.29z"
        ></path>
      </svg>
    </div>
  </button>
</template>
