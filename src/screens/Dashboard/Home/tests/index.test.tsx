/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps } from 'core/utils'

import { Api } from 'core/services/api'
import Home from '../index'

let wrapper: ReactTestRenderer
// let getProviderListSpy: jest.SpyInstance

const props: any = createTestProps({})

describe('Home test suite', () => {
  beforeEach(async () => {
    jest.spyOn(Api, 'getProviderList').mockReturnValue([] as any)
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Home {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', () => {
    expect(wrapper).toBeTruthy()
  })
})
