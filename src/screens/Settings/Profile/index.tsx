import React, { useCallback, useRef } from 'react'
import { Button, Container, ScrollView, TextInput } from 'components'
import {
  KeyboardAvoidingView,
  Platform,
  TextInput as Input,
} from 'react-native'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { profileInitialValues } from 'core/constants/profile'
import { useAuth } from 'core/hooks/AuthContext'

import { UpdateProfileForm } from 'core/services/api/types'
import Device from 'core/helpers/Device'
import Header from '../components/Header'
import { Props } from './types'

import AvatarView from '../components/AvatarView'

const Profile: React.FC<Props> = ({ navigation }) => {
  const emailInputRef = useRef<Input>(null)
  const oldPasswordInputRef = useRef<Input>(null)
  const passwordInputRef = useRef<Input>(null)
  const passwordConfirmationInputRef = useRef<Input>(null)

  const { t } = useTranslation('profile')
  const { user, updateProfile, loading } = useAuth()

  const schema = Yup.object().shape({
    name: Yup.string().required(t('inputs.name_error_required')),
    email: Yup.string()
      .email(t('inputs.mail_error_valid'))
      .required(t('inputs.mail_error_required')),
    old_password: Yup.string().min(6, t('inputs.old_password_error_min')),
    password: Yup.string().when('old_password', {
      is: true,
      then: Yup.string()
        .required(t('inputs.password_error_required'))
        .min(6, t('inputs.password_error_min')),
      otherwise: Yup.string(),
    }),
    password_confirmation: Yup.string()
      .when('password', {
        is: true,
        then: Yup.string()
          .required(t('inputs.password_confirmation_error_required'))
          .min(6, t('inputs.password_confirmation_error_min')),
        otherwise: Yup.string(),
      })
      .oneOf(
        [Yup.ref('password'), null],
        t('inputs.password_confirmation_error_incorrect'),
      ),
  })

  const submitForm = useCallback(
    async (data: UpdateProfileForm) => {
      try {
        await updateProfile(data)
        navigation.navigate('Feedback', {
          status: 'success',
          message: t('feedback.success.message'),
          title: t('feedback.success.title'),
          button: { title: t('feedback.success.button') },
        })
      } catch (error) {
        navigation.navigate('Feedback', {
          status: 'error',
          message: t('feedback.error.message'),
          title: t('feedback.error.title'),
          button: { title: t('feedback.error.button') },
        })
      }
    },
    [navigation, t, updateProfile],
  )

  return (
    <>
      <Header title={t('header_title')} />
      <Container
        as={KeyboardAvoidingView}
        behavior={Device.keyboardBehavior()}
        enabled>
        <ScrollView center keyboardShouldPersistTaps="handled">
          <Container
            paddingX={40}
            center
            paddingBottom={Platform.select({ android: 110, ios: 40 })}>
            <Formik
              validationSchema={schema}
              validateOnMount
              initialValues={{
                ...profileInitialValues,
                name: user?.name,
                email: user?.email,
              }}
              onSubmit={submitForm}>
              {({
                handleBlur,
                handleSubmit,
                setFieldValue,
                values,
                isValid,
                errors,
                setValues,
              }) => (
                <>
                  <AvatarView src={user?.avatar_url as string} />
                  <TextInput
                    mt={32}
                    icon="user"
                    autoCorrect={false}
                    keyboardAppearance="dark"
                    placeholder={t('inputs.name_placeholder')}
                    autoCompleteType="name"
                    autoCapitalize="words"
                    value={values.name}
                    error={!!errors.name}
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
                    error={!!errors.email}
                    value={values.email}
                    returnKeyType="next"
                    onBlur={handleBlur('email')}
                    onChangeText={(value: string): void => {
                      setFieldValue('email', value)
                    }}
                    onSubmitEditing={() => {
                      oldPasswordInputRef.current?.focus()
                    }}
                  />

                  <TextInput
                    mt={32}
                    ref={oldPasswordInputRef}
                    icon="lock"
                    keyboardAppearance="dark"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={t('inputs.old_password_placeholder')}
                    secureTextEntry
                    error={!!errors.old_password}
                    isFilled={!!values.old_password}
                    defaultValue={values.old_password}
                    onBlur={handleBlur('old_password')}
                    returnKeyType="next"
                    onChangeText={(value: string): void => {
                      setFieldValue('old_password', value)
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
                    error={!!errors.password}
                    isFilled={!!values.password}
                    defaultValue={values.password}
                    onBlur={handleBlur('password')}
                    textContentType="newPassword"
                    returnKeyType="next"
                    onChangeText={(value: string): void => {
                      setFieldValue('password', value)
                    }}
                    onSubmitEditing={() => {
                      passwordConfirmationInputRef.current?.focus()
                    }}
                  />
                  <TextInput
                    mt={10}
                    ref={passwordConfirmationInputRef}
                    icon="lock"
                    keyboardAppearance="dark"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder={t('inputs.password_confirmation_placeholder')}
                    secureTextEntry
                    autoCompleteType="password"
                    error={!!errors.password_confirmation}
                    isFilled={!!values.password_confirmation}
                    defaultValue={values.password_confirmation}
                    onBlur={handleBlur('password_confirmation')}
                    textContentType="newPassword"
                    returnKeyType="send"
                    onChangeText={(value: string): void => {
                      setFieldValue('password_confirmation', value)
                    }}
                    onSubmitEditing={handleSubmit}
                  />

                  <Button
                    title={t('submit_button')}
                    mt={16}
                    isLoading={loading}
                    onPress={() => {
                      submitForm(values)
                      setValues({
                        name: values.name,
                        email: values.email,
                        password: undefined,
                        password_confirmation: undefined,
                        old_password: undefined,
                      })
                    }}
                    enabled={isValid}
                  />
                </>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </Container>
    </>
  )
}

export default Profile
