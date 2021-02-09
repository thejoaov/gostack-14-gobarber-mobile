import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import ScrollView from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {}

describe('ScrollView test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <ScrollView {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
