import React, { useCallback } from 'react'
import { Container, Button, Header } from 'components'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'
import { Props } from './types'

const Home: React.FC<Props> = ({ navigation }) => {
  const { signOut, user } = useAuth()
  const { t } = useTranslation('home')

  const handleNavigate = useCallback(() => {
    navigation.navigate({
      name: 'Settings',
      params: {
        screen: 'Profile',
      },
    } as never)
  }, [navigation])

  return (
    <>
      <Header
        greeting={t('greeting')}
        name={user?.name || ''}
        onPressAvatar={handleNavigate}
      />
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
