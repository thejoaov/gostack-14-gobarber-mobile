import React from 'react'
import { Container, Text, Button } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { signOut } = useAuth()
  const { t } = useTranslation('home')

  const handleLogout = () => {
    signOut()
  }

  return (
    <Container center>
      <Text>{t('provisory_title')}</Text>
      <Button onPress={handleLogout} title={t('provisory_logout_button')} />
    </Container>
  )
}

export default Home
