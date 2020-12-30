import React from 'react'
import { Container, Image, Text } from 'components'

import logoImg from 'assets/images/logo.png'

const SignIn: React.FC = () => (
  <Container flex={1} center>
    <Image source={logoImg} />

    <Text mt={64} mh={24} fontSize={24} variant="medium">
      Faça seu login
    </Text>
  </Container>
)

export default SignIn
