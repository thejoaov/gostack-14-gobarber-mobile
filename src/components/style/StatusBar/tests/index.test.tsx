import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import StatusBar from '../index'
import { StatusBarProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: StatusBarProps = {}

describe('StatusBar test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <StatusBar {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
