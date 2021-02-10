import { KeyboardAvoidingViewProps, ViewProps } from 'react-native'
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  ColorProps,
} from 'styled-system'

export type ContainerProps = {
  children?: React.ReactNode
  as?: React.ElementType
  center?: boolean
}

export type Props = ContainerProps &
  KeyboardAvoidingViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  PositionProps &
  ColorProps
