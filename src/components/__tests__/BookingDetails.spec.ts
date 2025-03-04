import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BookingDetails from '../BookingDetails.vue'

describe('BookingDetails', () => {
  const mockHotel = {
    name: 'Test Hotel',
    price: 100,
    id: 1,
    description: 'Test Description',
    rating: 5,
    image: 'test.jpg'
  }

  const mockSearch = {
    location: 'Test Location',
    checkIn: '2024-07-01',
    checkOut: '2024-07-05',
    guests: 2,
    rooms: 1
  }

  it('renders order details correctly', () => {
    const wrapper = mount(BookingDetails, {
      props: {
        hotel: mockHotel,
        search: mockSearch
      }
    })

    expect(wrapper.exists()).toBe(true)

    const hotelName = wrapper.find('.text-lg')
    expect(hotelName.text()).toContain('Test Hotel - Test Location')

    const dateInfo = wrapper.find('.date-info')
    expect(dateInfo.text()).toContain('01/07/2024 - 05/07/2024 | 4 days')

    const guestsInfo = wrapper.find('.guests-info')
    expect(guestsInfo.text()).toContain('2 guests and 1 room')
  })
})
