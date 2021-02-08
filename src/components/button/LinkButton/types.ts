import { TouchableOpacityProps } from 'react-native'
import {
  ColorProps,
  FontSizeProps,
  SpaceProps,
  WidthProps,
} from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

export type LinkButtonProps = {
  title: string
  textColor?: string
  icon?: keyof typeof FeatherGlyphs
}

export type Props = LinkButtonProps &
  TouchableOpacityProps &
  WidthProps &
  SpaceProps &
  ColorProps &
  FontSizeProps
