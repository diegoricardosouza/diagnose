import { Story, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'diagnose-gray'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '108.6rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
