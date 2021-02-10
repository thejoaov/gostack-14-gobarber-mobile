import AsyncStorage from '@react-native-async-storage/async-storage'

export const Storage = {
  /**
   * Set items to AsyncStorage
   */
  setItems: (items: string[][]): Promise<void> => AsyncStorage.multiSet(items),

  /**
   * Get item from AsyncStorage
   */
  getItem: (item: string): Promise<string | null> => AsyncStorage.getItem(item),

  /**
   * Remove item from AsyncStorage
   */
  remove: (item: string): Promise<void> => AsyncStorage.removeItem(item),

  /**
   * Remove user info
   */
  clearUser: (): Promise<void> => AsyncStorage.multiRemove([`user`, `token`]),

  /** Update AsyncStorage values */
  update: (items: string[][]): Promise<void> => AsyncStorage.multiMerge(items),
}
