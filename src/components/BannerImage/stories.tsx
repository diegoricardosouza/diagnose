import { Story, Meta } from '@storybook/react'
import BannerImage, { BannerImageProps } from '.'

export default {
  title: 'BannerImage',
  component: BannerImage
} as Meta

export const Default: Story<BannerImageProps> = (args) => (
  <BannerImage {...args} />
)

Default.args = {
  src: 'img/img-banner.png'
}
