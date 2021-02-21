import {
  AndroidNativeProps,
  BaseProps,
  IOSNativeProps,
} from '@react-native-community/datetimepicker'

export type AndroidDatePickerProps = {
  ButtonComponent: React.ElementType
  isVisible?: boolean
}

export type DatePickerProps = {
  title: string
  value: Date
  iosOptions?: Omit<IOSNativeProps, 'value'> & Omit<BaseProps, 'value'>
  androidOptions: Omit<AndroidNativeProps, 'value'> &
    Omit<BaseProps, 'value'> &
    AndroidDatePickerProps
}

export type Props = DatePickerProps
