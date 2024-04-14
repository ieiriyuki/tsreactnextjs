import { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'

// meta data object
export default {
  title: 'StyledButton',
  component: StyledButton,
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
