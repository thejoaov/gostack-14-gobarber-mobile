import { ViewProps } from 'react-native'
import { ColorProps, SpaceProps, WidthProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

type Props = {
  title: string
  icon?: keyof typeof FeatherGlyphs
}

export type FooterButtonProps = Props &
  ViewProps &
  WidthProps &
  SpaceProps &
  ColorProps
