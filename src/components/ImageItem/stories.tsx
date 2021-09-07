import { Story, Meta } from '@storybook/react'
import ImageItem, { ImageItemProps } from '.'

export default {
  title: 'Item/ImageItem',
  component: ImageItem
} as Meta

export const Default: Story<ImageItemProps> = (args) => <ImageItem {...args} />

Default.args = {
  src: 'img/img-item1.png'
}
