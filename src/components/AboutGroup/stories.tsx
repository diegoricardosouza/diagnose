import { Story, Meta } from '@storybook/react'
import AboutGroup from '.'

export default {
  title: 'About/AboutGroup',
  component: AboutGroup
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '108.6rem', margin: '0 auto' }}>
    <AboutGroup {...args} />
  </div>
)
