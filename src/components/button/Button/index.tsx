import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Text } from 'components'

import theme from 'core/styles/theme'

import { Container } from './styles'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  textColor,
  enabled,
  title,
  isLoading,
  ...otherProps
}) => (
  <Container enabled={enabled} isLoading={isLoading} {...otherProps}>
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
  title: 'OK',
  color: theme.colors.primary,
  textColor: theme.colors.background,
  width: '100%',
  enabled: true,
  isLoading: false,
}

export default Button
