import { ViewProps } from 'react-native'
import { SpaceProps, LayoutProps, FlexboxProps, PositionProps } from 'styled-system'

export interface Props {
  children?: React.ReactNode
  as?: React.ElementType
}

export type ContainerProps = Props &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  ViewProps &
  PositionProps
