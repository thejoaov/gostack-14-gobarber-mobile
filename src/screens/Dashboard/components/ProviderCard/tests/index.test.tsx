import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import ProviderCard from '../index'
import { Props } from '../types'

let wrapper: ReactTestRenderer
const initialProps: Props = {
  provider: {
    id: 'ca3d1104-0734-486f-b099-ba7677ad26f7',
    name: 'Hdjd',
    email: 'hsjd@jfjcj.com',
    avatar: null,
    created_at: '2021-01-31T16:24:39.355Z',
    updated_at: '2021-01-31T16:24:39.355Z',
  },
}

describe('ProviderCard test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <ProviderCard {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
