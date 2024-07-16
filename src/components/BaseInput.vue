<script setup lang="ts">
const props = defineProps<{
  label: string
  modelValue: string
  type: string
  placeholder: string
  min?: number | string
}>()

defineEmits(['update:model'])
</script>

<template>
  <div class="mb-5">
    <label :for="props.label" class="mb-1 block font-small text-primary">{{ props.label }}</label>
    <input
      :value="props.modelValue"
      :type="props.type"
      :id="props.label"
      :min="props.min"
      class="w-full rounded-md border border-primary bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
      :placeholder="props.placeholder"
      @input="$emit('update:model', $event?.target?.value)"
    />
  </div>
</template>
