import React from 'react'
import { Container, Button, Header } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'
import { Props } from './types'

const Home: React.FC<Props> = () => {
  const { signOut, user } = useAuth()
  const { t } = useTranslation('home')

  return (
    <>
      <Header greeting={t('greeting')} name={user?.name || ''} />
      <Container center marginX={30}>
        <Button
          margin={20}
          onPress={() => signOut()}
          title={t('provisory_logout_button')}
        />
      </Container>
    </>
  )
}

export default Home
