import { Story, Meta } from '@storybook/react'
import ItemBenefits, { ItemBenefitsProps } from '.'

export default {
  title: 'Benefits/ItemBenefits',
  component: ItemBenefits
} as Meta

export const Default: Story<ItemBenefitsProps> = (args) => (
  <ItemBenefits {...args} />
)

Default.args = {
  title: 'Prontuário personalizado',
  src: 'img/vantagens/prontuario.svg'
}
