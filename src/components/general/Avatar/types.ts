import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { MarginProps } from 'styled-system'

export type AvatarProps = {
  src: ImageSourcePropType & { uri?: string }
  size?: number
}

export type Props = AvatarProps & TouchableOpacityProps & MarginProps
