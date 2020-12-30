import { TouchableOpacityProps } from 'react-native'
import { ColorProps, SpaceProps, WidthProps } from 'styled-system'

type Props = {
  title: string
  textColor?: string
}

export type LinkButtonProps = Props & TouchableOpacityProps & WidthProps & SpaceProps & ColorProps
