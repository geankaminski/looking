import { defineStore } from 'pinia'

import { fetchData, submitReservation } from '@/services/mock'

import type { UserSearch, Hotel } from '@/types'

export const useHotelsStore = defineStore('hotels', {
  state: () => ({
    hotels: [] as Hotel[],
    sortByValue: null as null | 'desc' | 'asc',
    sortByRating: null as null | 'asc' | 'desc',
    favorites: [] as number[],
    search: {
      location: '',
      guests: 1,
      rooms: 1,
      checkIn: '',
      checkOut: ''
    } as UserSearch,
    loading: false,
    hotelId: null as null | number,
    infoModal: null as null | string
  }),
  getters: {
    getSortedHotels(): Hotel[] {
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
    getFavorites(): Hotel[] {
      return this.hotels.filter((hotel) => this.favorites.includes(hotel.id))
    },
    lowestPriceHotelFromFavorites(): Hotel | null {
      const favorites = this.hotels.filter((hotel) => this.favorites.includes(hotel.id))

      if (favorites.length === 0) return null

      return favorites.reduce((lowest, hotel) => {
        if (hotel.price < lowest.price) return hotel
        return lowest
      })
    },
    bestRatingHotelFromFavorites(): Hotel | null {
      const favorites = this.hotels.filter((hotel) => this.favorites.includes(hotel.id))

      if (favorites.length === 0) return null

      return favorites.reduce((best, hotel) => {
        if (hotel.rating > best.rating) return hotel
        return best
      })
    }
  },
  actions: {
    async fetchHotels(): Promise<boolean> {
      try {
        this.loading = true
        const { hotels } = (await fetchData()) as { hotels: Hotel[] }
        this.hotels = hotels
        this.loading = false
        return true
      } catch {
        return false
      }
    },
    getHotelById(id: number): Hotel | undefined {
      return this.hotels.find((hotel) => hotel.id === id)
    },
    async reserveHotel(id: number): Promise<boolean> {
      try {
        this.hotelId = id
        const response: string | null = (await submitReservation(id)) as string | null
        this.infoModal = response
        return true
      } catch {
        return false
      }
    },
    toggleFavorite(id: number): void {
      if (this.favorites.includes(id)) {
        this.favorites = this.favorites.filter((favorite) => favorite !== id)
      } else {
        this.favorites.push(id)
      }
    },
    setSearch(search: UserSearch): void {
      this.search = search
    }
  }
})
