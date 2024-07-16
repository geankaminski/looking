import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import PageTitle from '../PageTitle.vue'

describe('PageTitle', () => {
  it('renders title correctly', () => {
    const props = {
      title: 'Test Title',
      showBackArrow: false,
      link: undefined
    }

    const wrapper = mount(PageTitle, {
      props
    })

    expect(wrapper.find('h1').text()).toBe('Test Title')
  })

  it('renders back arrow icon when showBackArrow is true', () => {
    const props = {
      title: 'Test Title',
      showBackArrow: true,
      link: '/back'
    }

    const wrapper = mount(PageTitle, {
      props
    })

    const iconComponent = wrapper.findComponent(FontAwesomeIcon)
    expect(iconComponent.exists()).toBe(true)
    expect(iconComponent.props('icon')).toBe(faArrowLeft)
  })
})
