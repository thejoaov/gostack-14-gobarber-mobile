import { KeyboardAvoidingViewProps, ViewProps } from 'react-native'
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

type Props = {
  children?: React.ReactNode
  as?: React.ElementType
  center?: boolean
}

export type ContainerProps = Props &
  KeyboardAvoidingViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  PositionProps
