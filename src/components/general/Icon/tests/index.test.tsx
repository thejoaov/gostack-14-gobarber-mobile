import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Icon from '../index'
import { IconProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: IconProps = { name: 'thumbs-up' }

describe('Icon test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Icon {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
