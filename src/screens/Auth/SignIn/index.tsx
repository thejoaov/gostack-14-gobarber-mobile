import React from 'react'
import {
  Button,
  Container,
  FooterButton,
  Image,
  LinkButton,
  Text,
  TextInput,
} from 'components'
import { KeyboardAvoidingView } from 'react-native'
import { useTranslation } from 'react-i18next'

import logoImg from 'assets/images/logo.png'
import Device from 'core/helpers/Device'

const SignIn: React.FC = () => {
  const { t } = useTranslation('sign_in')

  return (
    <>
      <Container
        as={KeyboardAvoidingView}
        behavior={Device.keyboardBehavior()}
        flex={1}
        paddingX={40}
        center>
        <Image source={logoImg} />

        <Text mt={64} mx={24} fontSize={24} variant="medium">
          {t('title')}
        </Text>

        <TextInput mt={24} />

        <TextInput mt={10} />

        <Button title={t('login_button')} mt={12} />

        <LinkButton title={t('forgot_password')} mt={24} />
      </Container>

      <FooterButton title={t('create_account')} />
    </>
  )
}

export default SignIn
