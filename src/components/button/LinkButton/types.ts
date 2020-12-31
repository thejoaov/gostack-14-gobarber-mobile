import { TouchableOpacityProps } from 'react-native'
import { ColorProps, SpaceProps, WidthProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

type Props = {
  title: string
  textColor?: string
  icon?: keyof typeof FeatherGlyphs
}

export type LinkButtonProps = Props &
  TouchableOpacityProps &
  WidthProps &
  SpaceProps &
  ColorProps
