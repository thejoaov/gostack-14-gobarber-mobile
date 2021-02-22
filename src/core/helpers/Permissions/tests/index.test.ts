import Device from 'core/helpers/Device'
import { PermissionsAndroid } from 'react-native'
import Permissions from '../index'

describe('Permissions test suite', () => {
  it('should define all functions', () => {
    expect(Permissions.requestCamera).toBeDefined()
  })

  describe('requestCamera', () => {
    it('should return granted camera permission on android', async () => {
      jest.spyOn(Device, 'isAndroid').mockReturnValue(true)
      jest.spyOn(PermissionsAndroid, 'request').mockResolvedValue('granted')

      const permission = await Permissions.requestCamera()

      expect(permission).toBe('granted')
    })

    it('should return null if device is iOS', async () => {
      jest.spyOn(Device, 'isAndroid').mockReturnValue(false)
      const permission = await Permissions.requestCamera()

      expect(permission).toBeNull()
    })
  })
})
