import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import HeaderHome from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = { greeting: 'test' }

describe('HeaderHome test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <HeaderHome {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
