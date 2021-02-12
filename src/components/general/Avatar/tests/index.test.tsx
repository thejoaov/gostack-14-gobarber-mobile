import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Avatar from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = { src: { uri: 'test' } }

describe('Avatar test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(
        <StylesProvider>
          <Avatar {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
