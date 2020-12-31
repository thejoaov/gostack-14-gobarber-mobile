import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import LinkButton from '../index'
import { LinkButtonProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: LinkButtonProps = { title: 'test' }

describe('LinkButton test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <LinkButton {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
