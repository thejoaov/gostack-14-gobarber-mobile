import React from 'react'

import { Text } from 'components'

import { Container } from './styles'
import { LinkButtonProps } from './types'

const LinkButton: React.FC<LinkButtonProps> = ({ color, title, ...props }) => (
  <Container {...props}>
    <Text color={color}>{title}</Text>
  </Container>
)

LinkButton.defaultProps = {
  width: '100%',
}

export default LinkButton
