import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Text } from 'components'

import theme from 'core/styles/theme'

import { Container } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  textColor,
  title,
  isLoading,
  ...props
}) => (
  <Container {...props}>
    {!!isLoading ? (
      <ActivityIndicator size={18} color="black" />
    ) : (
      <Text color={textColor} variant="medium">
        {title}
      </Text>
    )}
  </Container>
)

Button.defaultProps = {
  textColor: theme.colors.background,
  width: '100%',
  enabled: true,
  isLoading: false,
}

export default Button
