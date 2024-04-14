import { useState } from 'react'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'
import MDXDocument from './StyledButton.mdx'

// meta data object
export default {
  title: 'StyledButton',
  component: StyledButton,
  argTypes: {
    // variant for props via storybook
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'transparent'],
    },
    //
    children: {
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>

const incrementAction = action('increment')

export const Primay = (props) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction()
    setCount((c) => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}

export const Success: Story<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}

export const Transparent: Story<StyledButtonProps> = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}

const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton {...args} />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}
