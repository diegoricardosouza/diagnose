import { Story, Meta } from '@storybook/react'
import ItemGroup, { ItemGroupProps } from '.'
import items from './mock'

export default {
  title: 'Item/ItemGroup',
  component: ItemGroup,
  parameters: {
    backgrounds: {
      default: 'diagnose-dark'
    }
  }
} as Meta

export const Default: Story<ItemGroupProps> = (args) => <ItemGroup {...args} />

Default.args = {
  title: 'AGENDAMENTO',
  items
}
