import { ScrollViewProps as NativeScrollViewProps } from 'react-native'
import { SpaceProps, LayoutProps, PositionProps } from 'styled-system'

export type ScrollViewProps = {
  children?: React.ReactNode
  center?: boolean
}

export type Props = ScrollViewProps &
  NativeScrollViewProps &
  SpaceProps &
  LayoutProps &
  PositionProps
