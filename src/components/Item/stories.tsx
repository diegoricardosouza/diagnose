import { Story, Meta } from '@storybook/react'
import Item, { ItemProps } from '.'

export default {
  title: 'Item/Item',
  component: Item,
  parameters: {
    backgrounds: {
      default: 'diagnose-dark'
    }
  }
} as Meta

export const Default: Story<ItemProps> = (args) => <Item {...args} />

Default.args = {
  title: 'Configuração por médico'
}
