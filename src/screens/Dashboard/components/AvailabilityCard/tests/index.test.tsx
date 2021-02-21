import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import AvailabilityCard from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {
  availability: { available: false, hour: 13, hourFormatted: '13:00' },
}

describe('AvailabilityCard test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <AvailabilityCard {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
