import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchResult from '@/views/SearchResult.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import ConfirmationView from '@/views/ConfirmationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: SearchResult
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView
    },
    {
      path: '/checkout/:id',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationView
    }
  ]
})

export default router
