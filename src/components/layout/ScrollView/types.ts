import { ScrollViewProps as NativeScrollViewProps } from 'react-native'
import { SpaceProps, LayoutProps, PositionProps } from 'styled-system'

type Props = {
  children?: React.ReactNode
  center?: boolean
}

export type ScrollViewProps = Props &
  NativeScrollViewProps &
  SpaceProps &
  LayoutProps &
  PositionProps
