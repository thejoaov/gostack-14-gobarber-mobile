import { TouchableOpacityProps } from 'react-native'
import { SpaceProps, WidthProps } from 'styled-system'

type Props = {
  title: string
  textColor?: string
}

export type ButtonProps = Props & TouchableOpacityProps & WidthProps & SpaceProps
