import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Text from '../index'
import { TextProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: TextProps = { children: 'test' }

describe('Text test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(
        <StylesProvider>
          <Text {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
