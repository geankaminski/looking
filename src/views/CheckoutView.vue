<script setup lang="ts">
import ReservationDetails from '@/components/ReservationDetails.vue'
</script>

<template>
  <section>
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <h1 class="text-2xl font-semibold text-primary">Checkout</h1>
      </div>
      <ReservationDetails />
    </div>
  </section>
</template>
