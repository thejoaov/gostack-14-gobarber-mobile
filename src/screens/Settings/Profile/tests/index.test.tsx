import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps } from 'core/utils'
import Profile from '../index'

let wrapper: ReactTestRenderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = createTestProps({})

describe('Profile test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Profile {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
