/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { View } from 'react-native'

import { createTestProps } from 'core/utils'
import { Api } from 'core/services/api'

import Schedule from '../index'

let wrapper: ReactTestRenderer
const props: any = createTestProps({
  params: {
    providerList: [
      {
        id: '1',
        name: 'test',
        avatar_url: null,
      },
    ],
    provider: {
      id: '1',
      name: 'test',
      avatar_url: null,
    },
  },
})

describe('Schedule test suite', () => {
  beforeEach(async () => {
    jest
      .spyOn(Api, 'getProviderDayAvailability')
      .mockReturnValue({ data: [] } as any)

    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Schedule {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })
})
