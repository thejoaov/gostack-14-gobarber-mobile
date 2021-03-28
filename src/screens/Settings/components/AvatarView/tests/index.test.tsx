import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
// import { Alert } from 'react-native'
import Device from 'core/helpers/Device'
import { StylesProvider } from 'components'
import { findByTestID, mockAuthContext, mockPlatform } from 'core/utils'
import * as AuthContext from 'core/hooks/AuthContext'
import Picker from 'core/helpers/Picker'

import AvatarView from '../index'
import { AvatarViewProps } from '../types'

let wrapper: ReactTestRenderer
const initialProps: AvatarViewProps = { src: 'src' }

let DeviceSpy: jest.SpyInstance
let PickerSpy: jest.SpyInstance
// let AlertSpy: jest.SpyInstance
// let AuthSpy: jest.SpyInstance

describe('AvatarView test suite', () => {
  beforeEach(async () => {
    // AlertSpy = jest.spyOn(Alert, 'alert')
    DeviceSpy = jest.spyOn(Device, 'getWindowSize')
    PickerSpy = jest.spyOn(Picker, 'image')
    jest.spyOn(AuthContext, 'useAuth').mockReturnValue(mockAuthContext())

    mockPlatform('android')
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <AvatarView {...initialProps} />
        </StylesProvider>,
      )
    })
  })

  it('should render', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('should return a 186 width avatar on android, if device has screen more than 558 width', async () => {
    DeviceSpy.mockReturnValue({ width: 1080, height: 1920 })
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <AvatarView {...initialProps} />
        </StylesProvider>,
      )
    })
    const avatarAndroid = findByTestID(wrapper, 'avatar-android')

    expect(avatarAndroid.props.size).toBe(186)
  })

  it('should return a proportional width avatar on android, if device has screen less than 558 width', async () => {
    DeviceSpy.mockReturnValue({ width: 90, height: 120 })
    await act(async () => {
      wrapper = create(
        <StylesProvider>
          <AvatarView {...initialProps} />
        </StylesProvider>,
      )
    })
    const avatarAndroid = findByTestID(wrapper, 'avatar-android')

    expect(avatarAndroid.props.size).toBe(30)
  })

  it('should stop loading if Picker returns didCancel', async () => {
    PickerSpy.mockResolvedValue({ didCancel: true })

    await act(async () => {
      const avatarButton = findByTestID(wrapper, 'avatar-button')

      await avatarButton.props.onPress()

      setTimeout(() => {
        const avatarLoading = findByTestID(wrapper, 'avatar-loading')

        expect(avatarLoading).toBeFalsy()
      }, 500)
    })
  })
})
