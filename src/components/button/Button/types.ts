import { RectButtonProperties } from 'react-native-gesture-handler'
import { SpaceProps, WidthProps } from 'styled-system'

type Props = {
  title: string
  textColor?: string
}

export type ButtonProps = Props & RectButtonProperties & WidthProps & SpaceProps
