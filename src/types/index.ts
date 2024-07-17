/*
Optei por manter todas as interfaces em um só arquivo pela brevidade do projeto. 
Para projetos maiores é interessante separar as entidades em arquivos específicos.
*/

export interface Hotel {
  id: number
  name: string
  description: string
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
