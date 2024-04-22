import { render, screen, RenderResult } from '@testing-library/react'
import { DelayInput } from './index'
import { before } from 'node:test'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    handleChange = jest.fn()
    renderResult = render(<DelayInput onChange={handleChange} />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('should display empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode.innerHTML).toEqual('入力したテキスト: ')
  })
})
