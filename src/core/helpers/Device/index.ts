import { Platform, PlatformOSType, Dimensions, StatusBar } from 'react-native'
import { hasNotch } from 'react-native-device-info'

const Device = {
  /**
   * Return if device is iOS
   * @platform android
   * @platform ios
   */
  isIos: (): boolean => Platform.OS === 'ios',

  /**
   * Return if device is Android
   * @platform android
   * @platform ios
   */
  isAndroid: (): boolean => Platform.OS === 'android',

  /**
   * Return device OS
   * @platform android
   * @platform ios
   */
  os: (): PlatformOSType => Platform.OS,

  /**
   * Gets keyboard behavior
   * Disabled on Android
   * @platform android - disabled
   * @platform ios - padding
   */
  keyboardBehavior: (): 'padding' | 'height' | 'position' | undefined =>
    Platform.OS === 'ios' ? 'padding' : undefined,

  /**
   * Get window size
   * @platform android
   * @platform ios
   */
  getWindowSize: (): { width: number; height: number } => {
    const { width } = Dimensions.get('window')
    const { height } = Dimensions.get('window')

    return { width, height }
  },

  /**
   * Get iOS status bar height
   * @platform android
   * @platform ios
   */
  getStatusBarHeight: (padding = 0): number =>
    hasNotch()
      ? (Platform.select({
          ios: 20 + padding,
          android: StatusBar.currentHeight as number,
        }) as number)
      : 0,
}

export default Device
