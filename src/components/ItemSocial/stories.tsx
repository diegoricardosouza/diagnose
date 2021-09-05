import { Story, Meta } from '@storybook/react'
import ItemSocial, { ItemSocialProps } from '.'

export default {
  title: 'ItemSocial',
  component: ItemSocial,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'diagnose-gray'
    }
  }
} as Meta

export const Default: Story<ItemSocialProps> = (args) => (
  <ItemSocial {...args} />
)

Default.args = {
  title: '@diagnose.pro',
  src: 'img/icons/instagram.svg'
}
