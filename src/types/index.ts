export interface Hotel {
  id: number
  name: string
  description: string
  location: string
  rating: number
  price: number
  image: string
}

export interface UserSearch {
  location: string
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
}

export interface UserData {
  name: string
  email: string
  cardNumber: string
  cardName: string
  cvv: string
  expiration: string
}

export interface Hotels {
  hotels: Hotel[]
}

export interface Notification {
  message: string
  status: 'success' | 'error'
  id: number
}
