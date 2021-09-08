import { Story, Meta } from '@storybook/react'
import AgendaText, { AgendaTextProps } from '.'

export default {
  title: 'Agenda/AgendaText',
  component: AgendaText
} as Meta

export const Default: Story<AgendaTextProps> = (args) => (
  <AgendaText {...args} />
)

Default.args = {
  title: 'Quer conhecer<br> <span>todos os recursos?</span>',
  content:
    '<p><strong>Agende agora mesmo<br> uma demonstração</strong> do<br> <span>Diagnose Pró</span> com um<br> dos nossos consultores.</p>'
}
