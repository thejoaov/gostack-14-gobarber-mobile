import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import FooterButton from '../index'
import { FooterButtonProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: FooterButtonProps = { title: 'test' }

describe('FooterButton test suite', () => {
  beforeEach(async () => {
    await act(async () => {
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
