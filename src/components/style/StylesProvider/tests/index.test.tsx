import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import StylesProvider from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {}

describe('StylesProvider test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<StylesProvider {...initialProps} />)
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
