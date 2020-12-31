import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import StylesProvider from '../index'
import { StylesProviderProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: StylesProviderProps = {}

describe('StylesProvider test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(<StylesProvider {...initialProps} />)
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
