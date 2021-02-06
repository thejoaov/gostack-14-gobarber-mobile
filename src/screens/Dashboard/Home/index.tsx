import React, { useCallback } from 'react'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'

import Header from '../components/Header'
import { Props } from './types'

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth()
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
    </>
  )
}

export default Home
