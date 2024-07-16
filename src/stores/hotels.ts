import { defineStore } from 'pinia'
import { fetchData, submitReservation } from '@/services/mock'

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
    loading: false,
    hotelId: null,
    infoModal: null
  }),
  getters: {
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
    },
    getFavorites() {
      return this.hotels.filter((hotel) => this.favorites.includes(hotel.id))
    },
    lowestPriceHotelFromFavorites() {
      const favorites = this.hotels.filter((hotel) => this.favorites.includes(hotel.id))

      if (favorites.length === 0) return null

      return favorites.reduce((lowest, hotel) => {
        if (hotel.price < lowest.price) return hotel
        return lowest
      })
    },
    bestRatingHotelFromFavorites() {
      const favorites = this.hotels.filter((hotel) => this.favorites.includes(hotel.id))

      if (favorites.length === 0) return null

      return favorites.reduce((best, hotel) => {
        if (hotel.rating > best.rating) return hotel
        return best
      })
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
    getHotelById(id) {
      return this.hotels.find((hotel) => hotel.id === id)
    },
    async reserveHotel(id) {
      try {
        this.hotelId = id
        const response = await submitReservation(id)
        this.infoModal = response
      } catch {
        return false
      }
    },
    toggleFavorite(id) {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter((favorite) => favorite !== id)
      } else {
        this.favorites.push(id)
      }
    },
    setSearch(search) {
      this.search = search
    }
  }
})
