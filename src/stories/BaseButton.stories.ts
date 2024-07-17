import BaseButton from '@/components/BaseButton.vue'

export default {
  title: 'BaseButton',
  component: BaseButton,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    loading: { control: 'boolean' }
  }
}

const Template = (args: any) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary'
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Loading Button',
  loading: true
}
