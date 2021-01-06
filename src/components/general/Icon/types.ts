import { ColorValue, ViewProps } from 'react-native'
import { SpaceProps, FlexboxProps } from 'styled-system'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'
import theme from 'core/styles/theme'

type Props = {
  name: keyof typeof FeatherGlyphs
  color?: ColorValue
  size?: number
  semantic?: keyof typeof theme.colors.semantic
}

export type IconProps = Props & ViewProps & SpaceProps & FlexboxProps
