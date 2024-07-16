<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <button
    class="w-full text-white bg-primary font-medium rounded-lg text-sm px-54 py-2 text-center mt-2"
  >
    {{ props.label }}
  </button>
</template>
