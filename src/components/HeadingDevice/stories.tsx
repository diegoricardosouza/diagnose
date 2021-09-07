import { Story, Meta } from '@storybook/react'
import HeadingDevice, { HeadingDeviceProps } from '.'

export default {
  title: 'Device/HeadingDevice',
  component: HeadingDevice,
  parameters: {
    backgrounds: {
      default: 'diagnose-dark'
    }
  }
} as Meta

export const Default: Story<HeadingDeviceProps> = (args) => (
  <HeadingDevice {...args} />
)

Default.args = {
  title: 'SISTEMA 100% WEB',
  subtitle: 'compatível com todos os dispositivo'
}
