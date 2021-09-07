import { Story, Meta } from '@storybook/react'
import ItemDevice, { ItemDeviceProps } from '.'

export default {
  title: 'ItemDevice',
  component: ItemDevice
} as Meta

export const Default: Story<ItemDeviceProps> = (args) => (
  <ItemDevice {...args} />
)

Default.args = {
  src: 'img/icons/icon-linux.png'
}
