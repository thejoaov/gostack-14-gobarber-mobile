import { ProviderDayAvailability } from 'core/services/api/types'
import { RectButtonProperties } from 'react-native-gesture-handler'
import { MarginProps } from 'styled-system'

export type AvailabilityCardProps = {
  availability: ProviderDayAvailability & { hourFormatted: string }
  selected?: boolean
}

export type Props = AvailabilityCardProps & MarginProps & RectButtonProperties
