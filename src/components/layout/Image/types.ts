import { ImageProps as RNImageProps } from 'react-native'
import {
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

export interface Props {
  as?: React.ElementType
}

export type ImageProps = Props &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  RNImageProps &
  PositionProps
