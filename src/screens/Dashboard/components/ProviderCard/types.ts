import { Provider } from 'core/services/api/types'
import { RectButtonProperties } from 'react-native-gesture-handler'

export type ProviderCardProps = {
  provider: Provider
  variant?: 'regular' | 'thin'
  selected?: boolean
}

export type Props = ProviderCardProps & RectButtonProperties
