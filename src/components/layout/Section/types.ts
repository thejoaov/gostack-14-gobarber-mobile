import { KeyboardAvoidingViewProps, ViewProps } from 'react-native'
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
  ColorProps,
  BordersProps,
  BorderProps,
} from 'styled-system'

export type SectionProps = {
  children?: React.ReactNode
  center?: boolean
}

export type Props = SectionProps &
  KeyboardAvoidingViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  PositionProps &
  ColorProps &
  BordersProps &
  BorderProps
