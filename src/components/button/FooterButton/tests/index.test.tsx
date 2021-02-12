import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import FooterButton from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = { title: 'test' }

describe('FooterButton test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(
        <StylesProvider>
          <FooterButton {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
