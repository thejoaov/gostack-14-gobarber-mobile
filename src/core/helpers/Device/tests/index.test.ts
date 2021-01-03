import { Platform } from 'react-native'

import Device from '../index'

describe('Device test suite', () => {
  it('should define all functions', () => {
    expect(Device.isAndroid).toBeDefined()
    expect(Device.isIos).toBeDefined()
    expect(Device.os).toBeDefined()
    expect(Device.keyboardBehavior).toBeDefined()
  })

  describe('isAndroid', () => {
    Platform.OS = 'android'

    expect(Device.isAndroid()).toBeTruthy()
  })

  describe('isIos', () => {
    Platform.OS = 'ios'

    expect(Device.isIos()).toBeTruthy()
  })

  describe('os', () => {
    Platform.OS = 'android'

    expect(Device.os()).toBe('android')
  })

  describe('keyboardBehavior', () => {
    Platform.OS = 'android'

    expect(Device.keyboardBehavior()).toBe('padding')
  })
})
