import React, { useCallback, useRef } from 'react'
import {
  Alert,
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
  LinkButton,
  ScrollView,
  Text,
  TextInput,
} from 'components'
import Device from 'core/helpers/Device'
import { useAuth } from 'core/hooks/AuthContext'

import logoImg from 'assets/images/logo.png'
import { signInDefaultValues } from 'core/constants/signin'
import { Props } from './types'

const SignIn: React.FC<Props> = ({ route, navigation }) => {
  const { t } = useTranslation(['sign_in'])
  const { loading, signIn } = useAuth()
  const { params } = route

  const passwordInputRef = useRef<Input>(null)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('inputs.mail_error_required'))
      .email(t('inputs.mail_error_valid')),
    password: Yup.string()
      .required(t('inputs.password_error_required'))
      .min(6, t('inputs.password_error_min')),
  })

  const submit = useCallback(
    async (values: typeof signInDefaultValues) => {
      try {
        if (!values.email && !values.password) {
          Alert.alert(
            t('alerts.error_signin_title'),
            t('alerts.error_signin_message'),
          )
        }
        await signIn(values)
      } catch (error) {
        navigation.navigate('Feedback', {
          message: t('feedback.error.message'),
          title: t('feedback.error.title'),
          button: {
            onPress: () => navigation.navigate('SignIn'),
          },
          status: 'error',
        })
      }
    },
    [navigation, signIn, t],
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
              initialValues={params || signInDefaultValues}
              validationSchema={validationSchema}
              enableReinitialize
              key={params?.email}
              validateOnBlur={false}
              onSubmit={submit}>
              {({ isValid, errors, values, handleSubmit, setFieldValue }) => (
                <>
                  <TextInput
                    mt={24}
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
                    // onBlur={handleBlur('email')}
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
                    // onBlur={handleBlur('password')}
                    returnKeyType="send"
                    onChangeText={(value: string): void => {
                      setFieldValue('password', value)
                    }}
                    onSubmitEditing={handleSubmit}
                  />
                  <Button
                    enabled={isValid}
                    isLoading={loading}
                    title={t('login_button')}
                    mt={12}
                    onPress={handleSubmit}
                  />
                </>
              )}
            </Formik>
            {/* waiting to be enabled on production */}
            {__DEV__ && (
              <LinkButton
                title={t('forgot_password')}
                mt={24}
                onPress={() => navigation.navigate('ForgotPassword')}
              />
            )}
          </Container>
        </ScrollView>
      </Container>

      <FooterButton
        icon="log-in"
        title={t('footer_button')}
        hideOnKeyboard={Device.isAndroid()}
        onPress={() => navigation.navigate('SignUp')}
      />
    </>
  )
}

export default SignIn
