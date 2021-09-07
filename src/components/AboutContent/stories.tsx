import { Story, Meta } from '@storybook/react'
import AboutContent, { AboutContentProps } from '.'

export default {
  title: 'About/AboutContent',
  component: AboutContent
} as Meta

export const Default: Story<AboutContentProps> = (args) => (
  <AboutContent {...args} />
)

Default.args = {
  title:
    'O <span>Diagnose Pró</span> já atende mais de <strong>2 mil</strong><br> <strong>consultórios e clínicas</strong> por todo Brasil!',
  content:
    '<p>Só quem tem <span>mais de 20 anos de experiência</span> em<br> desenvolvimento de softwares médicos pode lançar <span>o sistema</span><br> <span>web mais completo para Gestão de Clínicas e Consultórios.</span></p>'
}
