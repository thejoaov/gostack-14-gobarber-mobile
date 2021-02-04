import React from 'react'

import { Container, StyledAvatar } from './styles'
import { Props } from './types'

const Avatar: React.FC<Props> = ({ src, size, ...otherProps }) => (
  <Container {...otherProps}>
    <StyledAvatar size={size} source={{ uri: src }} />
  </Container>
)

Avatar.defaultProps = {
  size: 56,
}

export default Avatar
