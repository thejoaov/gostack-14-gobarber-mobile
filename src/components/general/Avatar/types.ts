import { ImageSourcePropType, TouchableOpacityProps } from 'react-native'

export type OwnProps = {
  src: ImageSourcePropType & { uri?: string }
  size?: number
}

export type Props = OwnProps & TouchableOpacityProps
