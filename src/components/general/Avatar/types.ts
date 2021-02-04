import { TouchableOpacityProps } from 'react-native'

export type OwnProps = {
  src: string
  size?: number
}

export type Props = OwnProps & TouchableOpacityProps
