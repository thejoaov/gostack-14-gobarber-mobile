import { RectButtonProperties } from 'react-native-gesture-handler'
import { SpaceProps, WidthProps } from 'styled-system'

export type Props = {
  title?: string
  color?: string
  textColor?: string
  onPress?(): void
  isLoading?: boolean
}

export type ButtonProps = Omit<RectButtonProperties, 'onPress'> &
  Props &
  WidthProps &
  SpaceProps
