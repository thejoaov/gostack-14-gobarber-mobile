import { ViewProps } from 'react-native'
import {
  ColorProps,
  FontSizeProps,
  SpaceProps,
  WidthProps,
} from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

export type FooterButtonProps = {
  title: string
  icon?: keyof typeof FeatherGlyphs
  hideOnKeyboard?: boolean
  onPress?(): void
}

export type Props = FooterButtonProps &
  ViewProps &
  WidthProps &
  SpaceProps &
  ColorProps &
  FontSizeProps
