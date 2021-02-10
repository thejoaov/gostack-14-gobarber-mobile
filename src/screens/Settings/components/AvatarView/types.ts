import { ViewProps } from 'react-native'
import {
  FlexboxProps,
  LayoutProps,
  PaddingProps,
  PositionProps,
  SpaceProps,
} from 'styled-system'

export type AvatarViewProps = {
  src: string
}

export type Props = AvatarViewProps &
  ViewProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PaddingProps &
  PositionProps
