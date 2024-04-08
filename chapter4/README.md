# Component Development

## Atomic Design

### Presentational component

見た目を実装する, デザインを実装する, 挙動は実装しない, propsのみに依存する

```typescript
import './styles.css'

type ButtonProps = {
    label: string
    text: string
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
    const { label, text, disabled, onClick } = props
    return (
        <div className="button-container">
            <span>{label}</span>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}
```

### Container component

ビジネスロジックのみを担う, Hookを持たせる, 副作用を実行する

```typescript
import { useState, useCallback } from 'react'
import { Button } from './button'

const usePopup = () => {
    const cb = useCallback((text: string) => {
        propmt(text)
    }, [])
    return cb
}

type CountButtonProps = {
    label: string
    maximum: number
}

export const CountButton = (props: CountButtonProps) => {
    const { label, maximum } = props
    const displayPopup = usePopup()
    const [count, setCount] = useState(0)
    const onClick = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)
        if (newCount >= maximum) {
            displayPopup(`You've clicked ${newCount} times`)
        }
    }, [count, maximum])

    const disabled = count >= maximum
    const text = disabled
        ? 'Can\'t click any more'
        : `You've clicked ${count} times`

    return (
        <Button disabled={disabled} onClick={onClick} label={label} text={text} />
    )
}
```
