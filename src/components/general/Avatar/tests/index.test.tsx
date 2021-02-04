import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Avatar from '../index'
import { OwnProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: OwnProps = { src: 'test' }

describe('Avatar test suite', () => {
  beforeEach(async () => {
    await act(async () => {
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
