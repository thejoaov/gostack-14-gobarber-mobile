import { Provider } from 'core/services/api/types'
import { RectButtonProperties } from 'react-native-gesture-handler'

export type ProviderCardProps = {
  provider: Provider & { availability_days: string; availability_hours: string }
}

export type Props = ProviderCardProps & RectButtonProperties
