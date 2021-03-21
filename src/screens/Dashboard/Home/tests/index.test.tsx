/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { StylesProvider } from 'components'
import { createTestProps, fakeApiReturn } from 'core/utils'
import { Provider } from 'core/services/api/types'

import { Api } from 'core/services/api'
import Home from '../index'

let wrapper: ReactTestRenderer
// let getProviderListSpy: jest.SpyInstance
const fakeData: Provider[] = [
  {
    id: 'abcd-efgh-ijkl-mnop',
    name: 'test',
    email: 'test@test.com',
    avatar: 'image.jpeg',
    created_at: '2021-03-12T21:09:34.286Z',
    updated_at: '2021-03-12T21:10:11.553Z',
    avatar_url: 'https://avatar.url',
  },
]
const props: any = createTestProps({})

describe('Home test suite', () => {
  beforeEach(async () => {
    jest.spyOn(Api, 'getProviderList').mockResolvedValue(
      fakeApiReturn<Provider[]>({ data: fakeData }),
    )
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <Home {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('should navigate to profile when clicking on avatar on header', async () => {
    const testInstance = wrapper.root

    const header = testInstance.findByProps({
      testID: 'header',
    })

    act(() => {
      header.props.onPressAvatar()
    })

    expect(testInstance.props.children.props.navigation.navigate).toBeCalled()
  })

  describe('Provider list', () => {
    it('should load providers', async () => {
      const testInstance = wrapper.root

      const providerCard = testInstance.findAllByProps({
        testID: 'provider-card',
      })[0]

      expect(providerCard).toBeTruthy()
    })

    it('should navigate to selected provider when click on card', () => {
      const testInstance = wrapper.root

      const providerCard = testInstance.findAllByProps({
        testID: 'provider-card',
      })[0]

      act(() => {
        providerCard.props.onPress()
      })

      expect(testInstance.props.children.props.navigation.navigate).toBeCalled()
    })
  })
})
