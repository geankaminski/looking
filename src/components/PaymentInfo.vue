<script setup lang="ts">
import { useHotelsStore } from '@/stores/hotels'
import { useRouter } from 'vue-router'
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { reserveHotel } = hotelsStore

const handleSubmit = async () => {
  reserveHotel(router.currentRoute.value.params.id)
  router.push({ name: 'confirmation' })
}
</script>

<template>
  <div class="w-full">
    <div class="bg-white p-8 bg-white border rounded-lg shadow">
      <h2 class="text-xl font-semibold text-primary">Pagamento</h2>

      <div class="mt-4">
        <BaseInput label="Nome" modelValue="" type="text" placeholder="Nome" />

        <BaseInput label="E-mail" modelValue="" type="text" placeholder="E-mail" />

        <BaseInput
          label="Número do cartão"
          modelValue=""
          type="text"
          placeholder="0000 0000 0000 0000"
        />

        <BaseInput label="Nome no cartão" modelValue="" type="text" placeholder="Nome no cartão" />

        <div class="flex gap-4">
          <div class="w-1/2">
            <BaseInput label="Data de expiração" modelValue="" type="text" placeholder="MM/AA" />
          </div>

          <div class="w-1/2">
            <BaseInput label="CVV" modelValue="" type="text" placeholder="CVV" />
          </div>
        </div>
      </div>

      <BaseButton label="Realizar reserva" @click="handleSubmit" />
    </div>
  </div>
</template>
