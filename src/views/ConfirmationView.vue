<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

import PageTitle from '@/components/PageTitle.vue'
</script>

<template>
  <section>
    <div class="p-12 pt-8 md:p-4">
      <PageTitle title="Waiting for confirmation" :showBackArrow="false" />

      <div class="container mx-auto px-4 mt-12">
        <div class="flex flex-col justify-between items-center">
          <p class="text-3xl font-semibold text-primary md:text-3xl text-center">
            Your reservation is being processed
          </p>

          <div class="flex items-center justify-center mt-16">
            <FontAwesomeIcon :icon="faHourglass" class="text-8xl text-green" />
          </div>

          <div class="text-center mt-16">
            <p class="text-sm text-gray md:text-base">
              You will soon be notified with confirmation of your reservation.
            </p>

            <p class="text-sm text-gray md:text-base">
              You can wait here or go back to the
              <span class="text-link"> <router-link to="/">home</router-link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
