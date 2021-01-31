import React, { useCallback, useRef, useState } from 'react'
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  View,
  TextInput as Input,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { useTheme } from 'styled-components'
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

import logoImg from 'assets/images/logo.png'
import Device from 'core/helpers/Device'
import { Api } from 'core/services/api'
import { useAuth } from 'core/hooks/AuthContext'
import { signInDefaultValues } from 'core/constants/signin'
import { Props } from './types'

const ForgotPassword: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation(['forgot_password'])
  const theme = useTheme()
  const [loading, setLoading] = useState(false)

  const passwordInputRef = useRef<Input>(null)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('inputs.mail_error_required'))
      .email(t('inputs.mail_error_valid')),
  })

  const submit = useCallback(
    async (values: typeof signInDefaultValues) => {
      try {
        setLoading(true)
        if (!values.email && !values.password) {
          Alert.alert(
            t('alerts.error_signin_title'),
            t('alerts.error_signin_message'),
          )
        }

        await Api.forgotPassword(values.email)
        navigation.navigate('Feedback', {
          title: t('feedback.success.title'),
          message: t('feedback.success.message'),
          status: 'success',
          button: { onPress: () => navigation.navigate('SignIn') },
        })
      } catch (error) {
        navigation.navigate('Feedback', {
          title: t('feedback.error.title'),
          message: t('feedback.error.message'),
          status: 'error',
          button: { title: t('feedback.error.button') },
        })
      } finally {
        setLoading(false)
      }
    },
    [t, navigation],
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
              initialValues={signInDefaultValues}
              validationSchema={validationSchema}
              onSubmit={submit}>
              {({
                isValid,
                errors,
                values,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
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
                    onBlur={handleBlur('email')}
                    onChangeText={(value: string): void => {
                      setFieldValue('email', value)
                    }}
                    onSubmitEditing={() => {
                      passwordInputRef.current?.focus()
                    }}
                  />

                  <Button
                    isLoading={loading}
                    title={t('forgot_button')}
                    mt={12}
                    onPress={handleSubmit}
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
        onPress={() => navigation.navigate('SignIn')}
      />
    </>
  )
}

export default ForgotPassword
