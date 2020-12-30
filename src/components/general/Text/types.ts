import { TextProps } from 'react-native'
import { SpaceProps, ColorProps, FlexboxProps, FontSizeProps } from 'styled-system'

export interface StyledeTextProps {
  children: React.ReactNode
  isBold?: boolean
  variant?: 'light' | 'bold' | 'medium' | 'regular'
  mh?: number
}

export type Props = StyledeTextProps &
  SpaceProps &
  ColorProps &
  FlexboxProps &
  TextProps &
  FontSizeProps
