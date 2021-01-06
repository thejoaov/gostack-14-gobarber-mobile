import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps } from 'core/utils'

import Home from '../index'

let wrapper: ReactTestRenderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = createTestProps({})

describe('Home test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Home {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
