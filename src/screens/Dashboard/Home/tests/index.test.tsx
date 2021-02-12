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

xdescribe('Home test suite', () => {
  beforeEach(() => {
    jest.spyOn(Api, 'getProviderList').mockReturnValue({ data: [] } as any)
    act(() => {
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
