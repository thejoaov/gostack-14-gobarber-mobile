import React from 'react'
import { useTheme } from 'styled-components/native'

import { Container, AvailabilityHour } from './styles'
import { Props } from './types'

const AvailabilityCard = ({
  availability,
  selected,
  ...otherProps
}: Props): JSX.Element => {
  const { colors } = useTheme()

  return (
    <Container
      enabled={availability.available}
      selected={selected}
      {...otherProps}>
      <AvailabilityHour selected={selected}>
        {availability.hourFormatted}
      </AvailabilityHour>
    </Container>
  )
}

export default AvailabilityCard
