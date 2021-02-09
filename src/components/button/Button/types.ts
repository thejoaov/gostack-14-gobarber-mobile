import { RectButtonProperties } from 'react-native-gesture-handler'
import { SpaceProps, WidthProps } from 'styled-system'

export type ButtonProps = {
  title?: string
  color?: string
  textColor?: string
  onPress?(): void
  isLoading?: boolean
}

export type Props = Omit<RectButtonProperties, 'onPress'> &
  ButtonProps &
  WidthProps &
  SpaceProps
