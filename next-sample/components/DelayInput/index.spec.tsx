import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    handleChange = jest.fn()
    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode.innerHTML).toEqual('入力したテキスト: ')
  })

  it('should display [入力中] immediately after onChange event occurs', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode.innerHTML).toEqual('入力中')
  })

  it('should display input text 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })
    await act(() => {
      jest.runAllTimers()
    })
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode.innerHTML).toEqual(`入力したテキスト: ${inputText}`)
  })

  it('should call onChange 1 second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })
    await act(() => {
      jest.runAllTimers()
    })
    expect(handleChange).toHaveBeenCalled()
  })
})
