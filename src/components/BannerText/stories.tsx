import { Story, Meta } from '@storybook/react'
import BannerText, { BannerTextProps } from '.'

export default {
  title: 'Banner/BannerText',
  component: BannerText,
  parameters: {
    backgrounds: {
      default: 'diagnose-gray'
    }
  }
} as Meta

export const Default: Story<BannerTextProps> = (args) => (
  <BannerText {...args} />
)

Default.args = {
  title: 'Diagnose Pró',
  text: '<p>O <span>Sistema Web</span> mais<br> completo para <strong>Gestão de</strong><br> <strong>clínicas e consultórios!</strong></p>'
}
