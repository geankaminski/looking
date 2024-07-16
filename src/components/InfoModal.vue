<script setup>
import { defineEmits, ref } from 'vue'
import { useRouter } from 'vue-router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

import BaseButton from './BaseButton.vue'

defineProps({
  isOpen: Boolean
})

const router = useRouter()

const emit = defineEmits(['modal-close'])

const target = ref(null)

function handleClose() {
  emit('modal-close')
  router.push('/')
}
</script>

<template>
  <div v-if="isOpen" class="modal-mask transition-all duration-300">
    <div class="modal-wrapper">
      <div class="modal-container p-8 bg-white" ref="target">
        <div class="modal-header mb-6">
          <slot name="header">
            <h4 class="text-2xl font-semibold text-center">Reserva confirmada!</h4>

            <div class="flex items-center justify-center mt-6">
              <FontAwesomeIcon :icon="faCircleCheck" class="text-7xl text-green" />
            </div>
          </slot>
        </div>

        <div class="modal-body mb-4">
          <slot name="content">
            <p class="text-center">Você receberá um email com os detalhes da sua reserva.</p>
          </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <BaseButton @click="handleClose" label="Fechar" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 600px;
  max-width: 80%;
  margin: 150px auto;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
