<script setup lang="ts">
const props = defineProps<{
  label: string
  color?: string
}>()
</script>

<template>
  <button
    :class="`bg-${props.color ? props.color : 'primary'}`"
    class="w-full text-white font-medium rounded-lg text-sm px-54 py-2 text-center mt-2"
  >
    {{ props.label }}
  </button>
</template>
