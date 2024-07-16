<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useHotelsStore } from '@/stores/hotels'

import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

import type { UserData } from '@/types'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { reserveHotel } = hotelsStore

const handleSubmit = async () => {
  reserveHotel(+router.currentRoute.value.params.id)
  router.push({ name: 'confirmation' })
}

const userData = ref<UserData>({
  name: '',
  email: '',
  cardNumber: '',
  cardName: '',
  expiration: '',
  cvv: ''
})
</script>

<template>
  <div class="w-full">
    <div class="bg-white p-8 bg-white border rounded-lg shadow">
      <h2 class="text-xl font-semibold text-primary">Pagamento</h2>

      <div class="mt-4">
        <BaseInput
          label="Nome"
          modelValue=""
          type="text"
          placeholder="Nome"
          v-model="userData.name"
          @update:model="userData.name = $event"
        />

        <BaseInput
          label="E-mail"
          modelValue=""
          type="text"
          placeholder="E-mail"
          v-model="userData.email"
          @update:model="userData.email = $event"
        />

        <BaseInput
          label="Número do cartão"
          modelValue=""
          type="text"
          maxlength="16"
          placeholder="0000 0000 0000 0000"
          v-model="userData.cardNumber"
          @update:model="userData.cardNumber = $event"
        />

        <BaseInput
          label="Nome no cartão"
          modelValue=""
          type="text"
          placeholder="Nome no cartão"
          v-model="userData.cardName"
          @update:model="userData.cardName = $event"
        />

        <div class="flex gap-4">
          <div class="w-1/2">
            <BaseInput
              label="Data de expiração"
              modelValue=""
              type="text"
              placeholder="MM/AA"
              maxlength="5"
              v-model="userData.expiration"
              @update:model="userData.expiration = $event"
            />
          </div>

          <div class="w-1/2">
            <BaseInput
              label="CVV"
              modelValue=""
              type="text"
              placeholder="CVV"
              maxlength="3"
              v-model="userData.cvv"
              @update:model="userData.cvv = $event"
            />
          </div>
        </div>
      </div>

      <BaseButton label="Realizar reserva" @click="handleSubmit" />
    </div>
  </div>
</template>
