import { Story, Meta } from '@storybook/react'
import BannerGroup, { BannerGroupProps } from '.'

export default {
  title: 'Banner/BannerGroup',
  component: BannerGroup
} as Meta

export const Default: Story<BannerGroupProps> = (args) => (
  <BannerGroup {...args} />
)

Default.args = {
  src: 'img/bg-banner.png'
}
