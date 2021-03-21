import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps, findByTestID } from 'core/utils'

import Feedback from '../index'

let wrapper: ReactTestRenderer
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props: any = createTestProps({ params: { status: 'success' } })

describe('Feedback test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Feedback {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('should navigate back when requested', () => {
    const rootComponent = wrapper.root.props.children
    const button = findByTestID(wrapper, 'ok-button')

    act(() => {
      button.props.onPress()
    })

    expect(rootComponent.props.navigation.goBack).toBeCalled()
  })
})
