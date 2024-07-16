// BaseButton.stories.ts
import BaseButton from '@/components/BaseButton.vue'

export default {
  title: 'Example/BaseButton',
  component: BaseButton,
  argTypes: {
    color: { control: 'color' }
  }
}

const Template = (args: any) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Primary Button'
}

export const Colored = Template.bind({})
Colored.args = {
  label: 'Secondary Button',
  color: 'secondary'
}
