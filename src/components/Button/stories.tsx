import { Story, Meta } from '@storybook/react'
import {
  KeyboardArrowDown,
  KeyboardArrowRight
} from '@styled-icons/material-outlined'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Saiba mais'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Saiba mais',
  icon: <KeyboardArrowDown />
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Saiba mais',
  icon: <KeyboardArrowRight />,
  as: 'a',
  href: '/link'
}
