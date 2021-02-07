import { Platform, PlatformOSType, Dimensions } from 'react-native'

const Device = {
  /**
   * Return if device is iOS
   */
  isIos: (): boolean => Platform.OS === 'ios',

  /**
   * Return if device is Android
   */
  isAndroid: (): boolean => Platform.OS === 'android',

  /**
   * Return device OS
   */
  os: (): PlatformOSType => Platform.OS,

  /**
   * Gets keyboard behavior
   * Disabled on Android
   */
  keyboardBehavior: (): 'padding' | 'height' | 'position' | undefined =>
    Platform.OS === 'ios' ? 'padding' : undefined,

  getWindowSize: (): { width: number; height: number } => {
    const { width } = Dimensions.get('window')
    const { height } = Dimensions.get('window')

    return { width, height }
  },
}

export default Device
