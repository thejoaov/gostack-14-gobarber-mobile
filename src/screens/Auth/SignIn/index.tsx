import React from 'react'
import { Container, Image, Text } from 'components'

import logoImg from 'assets/images/logo.png'
import theme from 'core/styles/theme'

const SignIn: React.FC = () => (
  <Container flex={1} alignItems="center" justifyContent="center">
    <Image source={logoImg} />

    <Text fontSize={24} mt={64} color={theme.colors.white} variant="medium">
      Faça seu login
    </Text>
  </Container>
)

export default SignIn
