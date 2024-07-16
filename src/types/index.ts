export interface Hotel {
  id: number
  name: string
  description: string
  location: string
  rating: number
  price: number
}

export interface UserSearch {
  location: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
}

export interface Hotels {
  hotels: Hotel[]
}
