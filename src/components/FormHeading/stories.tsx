import { Story, Meta } from '@storybook/react'
import FormHeading, { FormHeadingProps } from '.'

export default {
  title: 'Form/FormHeading',
  component: FormHeading
} as Meta

export const Default: Story<FormHeadingProps> = (args) => (
  <FormHeading {...args} />
)

Default.args = {
  title: 'Quer mais informações?',
  subtitle: 'Nossos consultores entram<br> em contato com você.'
}
