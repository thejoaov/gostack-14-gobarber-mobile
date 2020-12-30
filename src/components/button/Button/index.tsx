import React from 'react'

import { Text } from 'components'

import theme from 'core/styles/theme'

import { Container } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({ textColor, title, ...props }) => (
  <Container {...props}>
    <Text color={textColor} variant="medium">
      {title}
    </Text>
  </Container>
)

Button.defaultProps = {
  textColor: theme.colors.background,
  width: '100%',
}

export default Button
