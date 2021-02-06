import React, { useCallback, useRef, useState } from 'react'
import { Avatar, Button, Container, ScrollView, TextInput } from 'components'
import { TextInput as Input } from 'react-native'
import { Formik } from 'formik'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

import { profileInitialValues } from 'core/constants/profile'
import { useAuth } from 'core/hooks/AuthContext'

import { UpdateProfileForm } from 'core/services/api/types'
import Header from '../components/Header'
import { Props } from './types'

const Profile: React.FC<Props> = () => {
  const emailInputRef = useRef<Input>(null)
  const oldPasswordInputRef = useRef<Input>(null)
  const passwordInputRef = useRef<Input>(null)
  const passwordConfirmationInputRef = useRef<Input>(null)

  const [loading, setLoading] = useState(false)

  const { t } = useTranslation('profile')
  const { user, updateProfile } = useAuth()

  const schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(t('inputs.mail_error_valid')),
    old_password: Yup.string().min(6, t('inputs.old_password_error_min')),
    password: Yup.string().when('old_password', {
      is: true,
      then: Yup.string()
        .required(t('inputs.password_error_required'))
        .min(6, t('inputs.password_error_min')),
      otherwise: Yup.string(),
    }),
    password_confirmation: Yup.string()
      .when('old_password', {
        is: true,
        then: Yup.string()
          .required(t('inputs.password_confirmation_error_required'))
          .min(6, t('inputs.password_confirmation_error_min')),
        otherwise: Yup.string(),
      })
      .oneOf(
        [Yup.ref('password')],
        t('inputs.password_confirmation_error_incorrect'),
      ),
  })

  const submitForm = useCallback(
    async (data: UpdateProfileForm) => {
      try {
        setLoading(true)
        await updateProfile(data)
        // console.warn(data)
      } catch (error) {
        // console.log(error)
      } finally {
        setLoading(false)
      }
    },
    [updateProfile],
  )

  return (
    <>
      <Header title={t('header_title')} />
      <ScrollView
        paddingX={40}
        paddingBottom={32}
        center
        keyboardShouldPersistTaps="handled">
        <Formik
          validationSchema={schema}
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
          }) => (
            <Container center width="100%">
              <Avatar
                size={186}
                src={{ uri: user?.avatar_url as string }}
                disabled
              />

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
                // onBlur={handleBlur('name')}
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
                // onBlur={handleBlur('email')}
                onChangeText={(value: string): void => {
                  setFieldValue('email', value)
                }}
                onSubmitEditing={() => {
                  oldPasswordInputRef.current?.focus()
                }}
              />

              <TextInput
                mt={10}
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
                onBlur={handleBlur('password')}
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
                onPress={handleSubmit}
                enabled={isValid}
              />
            </Container>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default Profile
