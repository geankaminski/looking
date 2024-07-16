// BaseButton.stories.ts
import BaseButton from '@/components/BaseButton.vue'

export default {
  title: 'Example/BaseButton',
  component: BaseButton,
  argTypes: {
    color: { control: 'color' }
  }
}

const Template = (args) => ({
  components: { BaseButton },
  setup() {
    return { args }
  },
  template: '<BaseButton v-bind="args" />'
})

// Exporta a história padrão com o Template criado
export const Default = Template.bind({})
Default.args = {
  label: 'Button'
}

// Exporta uma variante com cor diferente
export const Colored = Template.bind({})
Colored.args = {
  label: 'Colored Button',
  color: 'secondary' // Cor opcional para o botão
}
