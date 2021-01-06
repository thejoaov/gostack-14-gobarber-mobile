import { RectButtonProperties } from 'react-native-gesture-handler'
import { SpaceProps, WidthProps } from 'styled-system'

type Props = {
  title: string
  textColor?: string
  onPress?(): void
  isLoading?: boolean
}

export type ButtonProps = Omit<RectButtonProperties, 'onPress'> &
  Props &
  WidthProps &
  SpaceProps
