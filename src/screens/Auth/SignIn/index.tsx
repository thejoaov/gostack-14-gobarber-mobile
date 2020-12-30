import React from 'react'
import { Button, Container, FooterButton, Image, LinkButton, Text, TextInput } from 'components'

import logoImg from 'assets/images/logo.png'
import { KeyboardAvoidingView } from 'react-native'
import Device from 'core/helpers/Device'

const SignIn: React.FC = () => (
  <>
    <Container
      as={KeyboardAvoidingView}
      behavior={Device.keyboardBehavior()}
      flex={1}
      paddingX={40}
      center>
      <Image source={logoImg} />

      <Text mt={64} mx={24} fontSize={24} variant="medium">
        Faça seu login
      </Text>

      <TextInput mt={24} />

      <TextInput mt={10} />

      <Button title="Entrar" mt={12} />

      <LinkButton title="Esqueci minha senha" mt={24} />
    </Container>

    <FooterButton title="Criar uma conta" />
  </>
)

export default SignIn
