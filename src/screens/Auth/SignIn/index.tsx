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
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'

import logoImg from 'assets/images/logo.png'

const SignIn: React.FC = () => {
  const { t } = useTranslation('sign_in')

  return (
    <>
      <Container as={View} flex={1} paddingX={40} center>
        <Image source={logoImg} />

        <Text mt={64} mx={24} fontSize={24} variant="medium">
          {t('title')}
        </Text>

        <TextInput
          mt={24}
          icon="mail"
          placeholder={t('input_mail_placeholder')}
          keyboardType="email-address"
          autoCompleteType="email"
        />

        <TextInput
          mt={10}
          icon="lock"
          placeholder={t('input_password_placeholder')}
          secureTextEntry
          autoCompleteType="password"
        />

        <Button title={t('login_button')} mt={12} />

        <LinkButton title={t('forgot_password')} mt={24} />
      </Container>

      <FooterButton icon="log-in" title={t('create_account')} />
    </>
  )
}

export default SignIn
