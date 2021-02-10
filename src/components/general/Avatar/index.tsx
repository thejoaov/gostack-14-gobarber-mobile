import React from 'react'
import Icon from '../Icon'
import { Container, StyledAvatar } from './styles'
import { Props } from './types'

const Avatar: React.FC<Props> = ({ src, size, ...otherProps }) => (
  <Container size={size} {...otherProps}>
    {!!src.uri ? (
      <StyledAvatar size={size} source={src} />
    ) : (
      <Icon name="user" size={(size as number) * 0.7} />
    )}
  </Container>
)

Avatar.defaultProps = {
  size: 56,
}

export default Avatar
