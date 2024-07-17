<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useHotelsStore } from '@/stores/hotels'

import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

import { validateEmail } from '@/utils/validation'

import type { UserData } from '@/types'

const hotelsStore = useHotelsStore()

const router = useRouter()

const { reserveHotel } = hotelsStore

const handleSubmit = async () => {
  if (!validatePayment()) return

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

const errors = ref({
  name: '',
  email: '',
  cardNumber: '',
  cardName: '',
  expiration: '',
  cvv: ''
})

const validatePayment = () => {
  errors.value = {
    name: userData.value.name && userData.value.name.length > 3 ? '' : 'Nome inválido',
    email: validateEmail(userData.value.email) ? '' : 'E-mail inválido',
    cardNumber: userData.value.cardNumber ? '' : 'Campo obrigatório',
    cardName: userData.value.cardName ? '' : 'Campo obrigatório',
    expiration: userData.value.expiration ? '' : 'Campo obrigatório',
    cvv: userData.value.cvv ? '' : 'Campo obrigatório'
  }

  return !Object.values(errors.value).some((error) => error)
}
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
          :error="errors.name"
          placeholder="Nome"
          v-model="userData.name"
          @update:model="userData.name = $event"
        />

        <BaseInput
          label="E-mail"
          modelValue=""
          type="text"
          :error="errors.email"
          placeholder="E-mail"
          v-model="userData.email"
          @update:model="userData.email = $event"
        />

        <BaseInput
          label="Número do cartão"
          modelValue=""
          type="text"
          :error="errors.cardNumber"
          maxlength="16"
          placeholder="0000 0000 0000 0000"
          v-model="userData.cardNumber"
          @update:model="userData.cardNumber = $event"
        />

        <BaseInput
          label="Nome no cartão"
          modelValue=""
          type="text"
          :error="errors.cardName"
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
              :error="errors.expiration"
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
              :error="errors.cvv"
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
