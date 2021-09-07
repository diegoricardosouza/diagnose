import { Story, Meta } from '@storybook/react'
import ButtonForm, { ButtonFormProps } from '.'

export default {
  title: 'Form/ButtonForm',
  component: ButtonForm
} as Meta

export const Default: Story<ButtonFormProps> = (args) => (
  <ButtonForm {...args} />
)

Default.args = {
  children: 'Enviar',
  type: 'submit'
}
