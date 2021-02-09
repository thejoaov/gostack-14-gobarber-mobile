import { ColorValue, ViewProps } from 'react-native'
import { SpaceProps, FlexboxProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'
import theme from 'core/styles/theme'

export type IconProps = {
  name: keyof typeof FeatherGlyphs
  color?: ColorValue
  size?: number
  semantic?: keyof typeof theme.colors.semantic
}

export type Props = IconProps & ViewProps & SpaceProps & FlexboxProps
