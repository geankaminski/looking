import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BaseCounter from '../BaseCounter.vue'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

describe('BaseCounter', () => {
  it('renders properly with initial number', async () => {
    const label = 'Counter Test'
    const number = 5
    const wrapper = mount(BaseCounter, { props: { label, number } })

    expect(wrapper.find('label').text()).toContain(label)
    expect(wrapper.find('p').text()).toContain(number.toString())

    expect(
      wrapper.findComponent({ name: 'FontAwesomeIcon', props: { icon: faMinus } })
    ).toBeTruthy()
    expect(wrapper.findComponent({ name: 'FontAwesomeIcon', props: { icon: faPlus } })).toBeTruthy()
  })

  it('increment event emitted when increment button is clicked', async () => {
    const wrapper = mount(BaseCounter, { props: { label: 'Increment Test', number: 1 } })
    await wrapper.find('[aria-label="Increment Increment Test"]').trigger('click')
    expect(wrapper.emitted('increment')).toBeTruthy()
  })

  it('decrement event emitted when decrement button is clicked', async () => {
    const wrapper = mount(BaseCounter, { props: { label: 'Decrement Test', number: 2 } })
    await wrapper.find('[aria-label="Decrement Decrement Test"]').trigger('click')
    expect(wrapper.emitted('decrement')).toBeTruthy()
  })

  it('does not decrement when number is 0', async () => {
    const wrapper = mount(BaseCounter, { props: { label: 'Zero Test', number: 0 } })
    await wrapper.find('[aria-label="Decrement Zero Test"]').trigger('click')
    expect(wrapper.emitted('decrement')).toBeFalsy()
  })
})
