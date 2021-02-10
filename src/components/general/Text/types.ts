import { TextProps as NativeTextProps } from 'react-native'
import {
  SpaceProps,
  ColorProps,
  FlexboxProps,
  FontSizeProps,
  TextAlignProps,
} from 'styled-system'

export type TextProps = {
  children: React.ReactNode
  isBold?: boolean
  variant?: 'light' | 'bold' | 'medium' | 'regular'
}

export type Props = TextProps &
  NativeTextProps &
  SpaceProps &
  ColorProps &
  FlexboxProps &
  FontSizeProps &
  TextAlignProps
