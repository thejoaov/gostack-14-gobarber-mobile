import React from 'react'
import { Container, Text, Button, Header } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'
import { Props } from './types'

const Home: React.FC<Props> = () => {
  const { signOut } = useAuth()
  const { t } = useTranslation('home')

  const handleLogout = () => {
    signOut()
  }

  return (
    <>
      <Header greeting="Bem vindo," name="Cabeça de Cuia" />
      <Container center>
        <Text>{t('provisory_title')}</Text>
        <Button onPress={handleLogout} title={t('provisory_logout_button')} />
      </Container>
    </>
  )
}

export default Home
