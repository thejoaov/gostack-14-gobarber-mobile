import React, { useCallback } from 'react'
import { Container, Text, Icon, Button, Avatar } from 'components'
import { useTheme } from 'styled-components'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'

import { Props } from './types'

const Logout: React.FC<Props> = ({ route, navigation }) => {
  const { t } = useTranslation('logout')
  const { colors } = useTheme()
  const { user, signOut } = useAuth()

  const handleGoBack = useCallback((): void => {
    navigation.goBack()
  }, [navigation])

  const handleLogout = useCallback((): void => {
    signOut()
  }, [signOut])

  return (
    <Container center padding={40}>
      <Container center flex={1}>
        <Avatar src={{ uri: user?.avatar_url as string }} size={200} />
      </Container>
      <Text mt={40} textAlign="center" fontSize={30}>
        {t('title')}
      </Text>

      <Text mt={16} textAlign="center" color={colors.gray.gray} fontSize={16}>
        {t('message', { name: user?.name })}
      </Text>

      <Container
        center
        flexDirection="row"
        justifyContent="space-between"
        marginX={30}>
        <Button title={t('button_back')} onPress={handleGoBack} width="50%" />
        <Button
          ml={10}
          title={t('button_logout')}
          onPress={handleLogout}
          width="50%"
          color={colors.semantic.info}
        />
      </Container>
    </Container>
  )
}

export default Logout
