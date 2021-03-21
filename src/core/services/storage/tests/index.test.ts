import AsyncStorage from '@react-native-async-storage/async-storage'
import { Storage } from '../index'

describe('Storage service test suite', () => {
  beforeEach(() => {
    jest.spyOn(AsyncStorage, 'getItem')
    jest.spyOn(AsyncStorage, 'multiSet')
    jest.spyOn(AsyncStorage, 'removeItem')
    jest.spyOn(AsyncStorage, 'multiRemove')
  })

  describe('clearUser', () => {
    it('should remove user information and token', async () => {
      await Storage.clearUser()

      expect(AsyncStorage.multiRemove).toBeCalledWith(['user', 'token'])
    })
  })

  describe('remove', () => {
    it('given a key, should remove that entry from async storage', async () => {
      await Storage.remove('test')

      expect(AsyncStorage.removeItem).toBeCalledWith('test')
    })
  })

  describe('getItem', () => {
    it('given a key, should retrieve that entry from async storage', async () => {
      const testKey = 'testKey'
      const testData = 'testData'

      await AsyncStorage.setItem(testKey, testData)

      const test = await Storage.getItem(testKey)

      expect(test).toBe(testData)
    })
  })

  describe('setItems', () => {
    it('given an array of items, should set that entries in async storage', async () => {
      const testKey1 = 'testKey1'
      const testData1 = 'testData1'
      const testKey2 = 'testKey2'
      const testData2 = 'testData2'

      await Storage.setItems([
        [testKey1, testData1],
        [testKey2, testData2],
      ])

      const test1 = await AsyncStorage.getItem(testKey1)
      const test2 = await AsyncStorage.getItem(testKey2)

      expect(test1).toBe(testData1)
      expect(test2).toBe(testData2)
    })
  })

  describe('update', () => {
    it('should update items', async () => {
      await Storage.setItems([['test', JSON.stringify({ user: '1' })]])

      await Storage.update([['test', JSON.stringify({ user: '2' })]])

      const result = await Storage.getItem('test')

      expect(result).toBe(JSON.stringify({ user: '2' }))
    })
  })
})
