import React from 'react'

import { Container, AvailabilityHour } from './styles'
import { Props } from './types'

const AvailabilityCard = ({
  availability,
  selected,
  ...otherProps
}: Props): JSX.Element => (
  <Container
    enabled={availability.available}
    selected={selected}
    {...otherProps}>
    <AvailabilityHour selected={selected}>
      {availability.hourFormatted}
    </AvailabilityHour>
  </Container>
)

export default AvailabilityCard
