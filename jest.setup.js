import React from 'react'
import 'react-native'
import { View } from 'react-native'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

const entries = jest.fn()
const append = jest.fn()

jest.useFakeTimers()

global.FormData = () => ({ entries, append })

jest.mock('@react-native-community/datetimepicker', () =>
  jest.fn().mockImplementation(props => <View {...props} />),
)

jest.mock('react-native-image-picker', () => {
  return {
    showImagePicker: jest.fn().mockResolvedValue({}),
  }
})

jest.mock('styled-components', () => {
  const original = jest.requireActual('styled-components')

  return {
    ...original,
    useTheme: () => ({
      colors: {
        primary: '#ff9000',
        background: '#312E38',
        white: '#F4EDE8',
        black: {
          black: '#000000',
          inputs: '#232129',
          medium: '#28262E',
          shape: '#3E3B47',
        },
        gray: {
          gray: '#999591',
          grayHard: '#666360',
        },
        semantic: {
          success: '#00a99d',
          warning: '#ff9000',
          error: '#c53030',
          info: '#3172b7',
        },
      },
      fonts: {
        bold: 'RobotoSlab-Bold',
        medium: 'RobotoSlab-Medium',
        regular: 'RobotoSlab-Regular',
        light: 'RobotoSlab-Light',
      },
    }),
  }
})

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)

jest.mock('@react-navigation/native')

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}))

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View')

  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  }
})

jest.mock('react-native-reanimated', () => {})

jest.mock('@react-native-community/masked-view', () => {})

jest.mock('react-native-device-info', () => ({
  hasNotch: jest.fn().mockReturnValue(true),
}))

jest.mock('date-fns', () => ({
  format: jest.fn().mockImplementation(value => value),
}))
