import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import HeaderSchedule from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = { title: 'iai' }

describe('Settings HeaderSchedule test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <HeaderSchedule {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
