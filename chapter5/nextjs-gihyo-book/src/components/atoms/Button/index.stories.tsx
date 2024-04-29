import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './index'
import { Description } from '@mui/icons-material'

export default {
  title: 'Atoms/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      defaultValue: 'primary',
      description: 'ボタンのバリアント',
      table: {
        type: { summary: 'primary' | 'secondary' },
        defaultValue: { summary: 'primary' },
      },
    },
  },
  children: {
    control: { type: 'text' },
    defaultValue: 'Button',
    description: 'ボタンのテキスト',
    table: {
      type: { summary: 'string' },
    },
  },
  disabled: {
    control: { type: 'boolean' },
    defaultValue: false,
    description: 'ボタンの無効化',
    table: {
      type: { summary: 'boolean' },
    },
  },
  width: {
    control: { type: 'number' },
    description: 'ボタンの幅',
    table: {
      type: { summary: 'number' },
    },
  },
  height: {
    control: { type: 'number' },
    description: 'ボタンの高さ',
    table: {
      type: { summary: 'number' },
    },
  },
  onClick: {
    description: 'クリック時のイベント',
    table: {
      type: { summary: 'function' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', children: 'Secondary Button' }

export const Disabled = Template.bind({})
Disabled.args = { children: 'Disabled Button', disabled: true }
