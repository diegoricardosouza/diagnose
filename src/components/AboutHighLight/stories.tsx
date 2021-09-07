import { Story, Meta } from '@storybook/react'
import AboutHighLight, { AboutHighLightProps } from '.'

export default {
  title: 'About/AboutHighLight',
  component: AboutHighLight
} as Meta

export const Default: Story<AboutHighLightProps> = (args) => (
  <div style={{ maxWidth: '108.6rem', margin: '0 auto' }}>
    <AboutHighLight {...args} />
  </div>
)

Default.args = {
  title:
    'Agora com sua <span>versão web</span> ficou ainda mais<br> prático ter <strong>o melhor software de gestão</strong>',
  src: 'img/doctor.png'
}
