import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps } from 'core/utils'
import ContextProvider from 'core/hooks'

import Profile from '../index'

let wrapper: ReactTestRenderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = createTestProps({})

xdescribe('Profile test suite', () => {
  afterEach(() => {
    jest.clearAllTimers()
  })

  beforeEach(() => {
    act(() => {
      wrapper = create(
        <StylesProvider>
          <ContextProvider>
            <Profile {...props} />
          </ContextProvider>
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
