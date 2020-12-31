import { TextProps as NativeTextProps } from 'react-native'
import {
  SpaceProps,
  ColorProps,
  FlexboxProps,
  FontSizeProps,
} from 'styled-system'

type Props = {
  children: React.ReactNode
  isBold?: boolean
  variant?: 'light' | 'bold' | 'medium' | 'regular'
}

export type TextProps = Props &
  NativeTextProps &
  SpaceProps &
  ColorProps &
  FlexboxProps &
  FontSizeProps
