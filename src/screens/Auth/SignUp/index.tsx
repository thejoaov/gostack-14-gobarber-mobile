import React from 'react'
import {
  Button,
  Container,
  FooterButton,
  Image,
  ScrollView,
  Text,
  TextInput,
} from 'components'
import { KeyboardAvoidingView, Platform, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'

import logoImg from 'assets/images/logo.png'
import Device from 'core/helpers/Device'
import theme from 'core/styles/theme'

const SignUp: React.FC = () => {
  const { t } = useTranslation('sign_up')
  const navigation = useNavigation()

  return (
    <>
      <Container
        as={KeyboardAvoidingView}
        behavior={Device.keyboardBehavior()}
        enabled>
        <ScrollView center keyboardShouldPersistTaps="handled">
          <Container
            as={View}
            center
            paddingX={40}
            paddingBottom={Platform.select({ android: 100, ios: 40 })}>
            <Image source={logoImg} />

            <View>
              <Text mt={64} mx={24} fontSize={24} variant="medium">
                {t('title')}
              </Text>
            </View>

            <TextInput
              mt={24}
              icon="user"
              placeholder={t('input_name_placeholder')}
              keyboardType="email-address"
              autoCompleteType="email"
            />

            <TextInput
              mt={10}
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

            <Button title={t('create_account_button')} mt={16} />
          </Container>
        </ScrollView>
      </Container>

      <FooterButton
        icon="arrow-left"
        title={t('footer_button')}
        hideOnKeyboard={Device.isAndroid()}
        color={theme.colors.white}
        onPress={() => navigation.navigate('SignIn')}
      />
    </>
  )
}

export default SignUp
