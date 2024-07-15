import { defineStore } from 'pinia'
import fetchData from '@/services/mock'

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    /** @type {{ name: string, id: number, price: number, rating: number }[]} */
    hotels: [],
    /** @type {null | 'desc' | 'asc'} */
    sortByValue: null,
    /** @type {null | 'asc' | 'desc'} */
    sortByRating: null,
    favorites: [],
    search: {
      location: '',
      numberOfGuests: 1,
      numberOfRooms: 1,
      checkIn: '',
      checkOut: ''
    },
    loading: false
  }),
  getters: {
    getHotels() {
      return this.hotels
    },
    getFavorites() {
      return this.favorites
    },
    getSortedHotels() {
      const hotels = this.hotels.slice()

      if (this.sortByValue) {
        hotels.sort((a, b) => {
          if (this.sortByValue === 'asc') {
            return a.price - b.price
          } else {
            return b.price - a.price
          }
        })
      }

      if (this.sortByRating) {
        hotels.sort((a, b) => {
          if (this.sortByRating === 'asc') {
            return a.rating - b.rating
          } else {
            return b.rating - a.rating
          }
        })
      }

      return hotels
    }
  },
  actions: {
    async fetchHotels() {
      try {
        this.loading = true
        const { hotels } = await fetchData()
        this.hotels = hotels
        this.loading = false
        return true
      } catch {
        return false
      }
    },
    toggleFavorite(hotel) {
      const index = this.favorites.findIndex((h) => h.id === hotel.id)

      if (index === -1) {
        this.favorites.push(hotel)
      } else {
        this.favorites.splice(index, 1)
      }
    },
    setSearch(search) {
      this.search = search
    }
  }
})
