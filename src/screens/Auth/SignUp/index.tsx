import React, { useCallback, useRef } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput as Input,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import * as Yup from 'yup'

import {
  Button,
  Container,
  FooterButton,
  Image,
  ScrollView,
  Text,
  TextInput,
} from 'components'

import logoImg from 'assets/images/logo.png'
import Device from 'core/helpers/Device'
import theme from 'core/styles/theme'
import { signUpDefaultValues } from 'core/constants/signup'
import { useAuth } from 'core/hooks/AuthContext'
import { Props } from './types'

const SignUp: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation(['sign_up'])
  const emailInputRef = useRef<Input>(null)
  const passwordInputRef = useRef<Input>(null)
  const { signUp, loading } = useAuth()

  const schema = Yup.object().shape({
    name: Yup.string().required(t('inputs.name_error_required')),
    email: Yup.string()
      .required(t('inputs.mail_error_required'))
      .email(t('inputs.mail_error_valid')),
    password: Yup.string()
      .required(t('inputs.password_error_required'))
      .min(6, t('inputs.password_error_min')),
  })

  const submit = useCallback(
    async (values: typeof signUpDefaultValues): Promise<void> => {
      try {
        await signUp(values)
        navigation.navigate('SignUpStatus', { status: 'success' })
      } catch (error) {
        navigation.navigate('SignUpStatus', { status: 'error' })
      }
    },
    [navigation, signUp],
  )

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

            <Formik
              validationSchema={schema}
              onSubmit={submit}
              initialValues={signUpDefaultValues}>
              {({
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                isValid,
                errors,
              }) => (
                <>
                  <TextInput
                    mt={24}
                    icon="user"
                    autoCorrect={false}
                    keyboardAppearance="dark"
                    placeholder={t('inputs.name_placeholder')}
                    autoCompleteType="name"
                    autoCapitalize="words"
                    defaultValue={values.name}
                    error={errors.name}
                    onBlur={handleBlur('name')}
                    returnKeyType="next"
                    isFilled={!!values.name}
                    onChangeText={(value: string): void => {
                      setFieldValue('name', value)
                    }}
                    onSubmitEditing={() => {
                      emailInputRef.current?.focus()
                    }}
                  />

                  <TextInput
                    mt={10}
                    ref={emailInputRef}
                    icon="mail"
                    isFilled={!!values.email}
                    keyboardAppearance="dark"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={t('inputs.mail_placeholder')}
                    keyboardType="email-address"
                    autoCompleteType="email"
                    error={errors.email}
                    defaultValue={values.email}
                    returnKeyType="next"
                    onBlur={handleBlur('email')}
                    onChangeText={(value: string): void => {
                      setFieldValue('email', value)
                    }}
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus()
                    }}
                  />

                  <TextInput
                    mt={10}
                    ref={passwordInputRef}
                    icon="lock"
                    keyboardAppearance="dark"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={t('inputs.password_placeholder')}
                    secureTextEntry
                    autoCompleteType="password"
                    error={errors.password}
                    isFilled={!!values.password}
                    defaultValue={values.password}
                    onBlur={handleBlur('password')}
                    textContentType="newPassword"
                    returnKeyType="send"
                    onChangeText={(value: string): void => {
                      setFieldValue('password', value)
                    }}
                    onSubmitEditing={handleSubmit}
                  />

                  <Button
                    title={t('create_account_button')}
                    mt={16}
                    isLoading={loading}
                    onPress={handleSubmit}
                    enabled={isValid}
                  />
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </Container>

      <FooterButton
        icon="arrow-left"
        title={t('footer_button')}
        hideOnKeyboard={Device.isAndroid()}
        color={theme.colors.white}
        onPress={() => navigation.goBack()}
      />
    </>
  )
}

export default SignUp
