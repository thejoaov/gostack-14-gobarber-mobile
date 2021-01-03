import React from 'react'
import {
  Button,
  Container,
  FooterButton,
  Image,
  LinkButton,
  ScrollView,
  Text,
  TextInput,
} from 'components'
import { KeyboardAvoidingView, View } from 'react-native'
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
        enabled>
        <ScrollView center keyboardShouldPersistTaps="handled">
          <Container as={View} center paddingX={40}>
            <Image source={logoImg} />

            <View>
              <Text mt={64} mx={24} fontSize={24} variant="medium">
                {t('title')}
              </Text>
            </View>

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
        </ScrollView>
      </Container>

      <FooterButton
        icon="log-in"
        title={t('create_account')}
        hideOnKeyboard={Device.isAndroid()}
      />
    </>
  )
}

export default SignIn
