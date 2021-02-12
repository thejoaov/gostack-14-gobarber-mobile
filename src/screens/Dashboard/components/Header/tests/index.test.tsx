import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import Header from '../index'
import { HeaderProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: HeaderProps = { greeting: 'test' }

describe('Header test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Header {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
