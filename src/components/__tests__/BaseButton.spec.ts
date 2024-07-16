import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import BaseButton from '../BaseButton.vue'

describe('BaseButton', () => {
  it('renders properly with default color', () => {
    const wrapper = mount(BaseButton, { props: { label: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.classes()).toContain('bg-primary')
  })

  it('renders properly with custom color', () => {
    const wrapper = mount(BaseButton, { props: { label: 'Hello Vitest', color: 'secondary' } })
    expect(wrapper.text()).toContain('Hello Vitest')
    expect(wrapper.classes()).toContain('bg-secondary')
  })

  it('renders with default color when color prop is not provided', () => {
    const wrapper = mount(BaseButton, { props: { label: 'Hello Vitest' } })
    expect(wrapper.classes()).toContain('bg-primary')
  })
})
