import BaseInput from '@/components/BaseInput.vue'

export default {
  title: 'BaseInput',
  component: BaseInput,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
    placeholder: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    error: { control: 'text' },
    disabled: { control: 'boolean' },
    maxlength: { control: 'number' }
  }
}

const Template = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args }
  },
  template: '<BaseInput v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Primary Input',
  placeholder: 'Enter your text here'
}

export const Date = Template.bind({})
Date.args = {
  label: 'Date Input',
  type: 'date'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error Input',
  placeholder: 'Enter your text here',
  error: 'Error message'
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Enter your text here',
  disabled: true
}
