import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import InfoModal from '../InfoModal.vue'

describe('InfoModal', () => {
  it('renders modal with title and content', async () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true
      },
      slots: {
        header: '<h4 class="test-header">Reserva confirmada!</h4>',
        content:
          '<p class="test-content">Você receberá um email com os detalhes da sua reserva.</p>'
      }
    })

    expect(wrapper.find('.modal-mask').exists()).toBe(true)
    expect(wrapper.find('.test-header').text()).toBe('Reserva confirmada!')
    expect(wrapper.find('.test-content').text()).toBe(
      'Você receberá um email com os detalhes da sua reserva.'
    )
  })

  it('emits close event when close button is clicked', async () => {
    const wrapper = mount(InfoModal, {
      props: {
        isOpen: true
      }
    })

    await wrapper.find('.close-button').trigger('click')
    expect(wrapper.emitted('modal-close')).toBeTruthy()
  })
})
