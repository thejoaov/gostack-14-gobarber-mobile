import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'
import { MarginProps } from 'styled-system'

export type OwnProps = {
  src: ImageSourcePropType & { uri?: string }
  size?: number
}

export type Props = OwnProps & TouchableOpacityProps & MarginProps
