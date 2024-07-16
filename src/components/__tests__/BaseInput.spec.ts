import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseInput from '../BaseInput.vue'

describe('BaseInput', () => {
  it('renders input with initial props', async () => {
    const label = 'Username'
    const modelValue = 'john_doe'
    const type = 'text'
    const placeholder = 'Enter your username'
    const min = 3

    const wrapper = mount(BaseInput, {
      props: { label, modelValue, type, placeholder, min }
    })

    expect(wrapper.find('label').text()).toContain(label)

    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe(type)
    expect(input.attributes('id')).toBe(label)
    expect(input.attributes('placeholder')).toBe(placeholder)
    expect(input.attributes('min')).toBe(min.toString())

    expect(input.element.value).toBe(modelValue)
  })

  it('emits update:model event when input value changes', async () => {
    const wrapper = mount(BaseInput, {
      props: { label: 'Email', modelValue: '', type: 'email', placeholder: 'Enter your email' }
    })

    const input = wrapper.find('input')
    await input.setValue('test@example.com')

    expect(wrapper.emitted('update:model')).toBeTruthy()

    const emittedEvent = wrapper.emitted('update:model')
    if (emittedEvent) {
      expect(emittedEvent[0][0]).toBe('test@example.com')
    }
  })
})
