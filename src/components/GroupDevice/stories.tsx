import { Story, Meta } from '@storybook/react'
import GroupDevice, { GroupDeviceProps } from '.'

export default {
  title: 'Device/GroupDevice',
  component: GroupDevice
} as Meta

export const Default: Story<GroupDeviceProps> = (args) => (
  <GroupDevice {...args} />
)

Default.args = {
  src: 'img/bg-device.jpg'
}
