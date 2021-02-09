import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'
import { Text } from 'components'

import { FlatList } from 'react-native'
import { Provider } from 'core/services/api/types'
import { Api } from 'core/services/api'
import Header from '../components/Header'
import { Props } from './types'

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth()
  const { t } = useTranslation('home')
  const [providers, setProviders] = useState<Provider[]>([])
  const [loading, setLoading] = useState(false)

  const handleNavigate = useCallback(() => {
    navigation.navigate({
      name: 'Settings',
      params: {
        screen: 'Profile',
      },
    } as never)
  }, [navigation])

  const loadProviders = useCallback(async () => {
    try {
      setLoading(true)
      const response = await Api.getProviderList()

      setProviders(response.data)
    } catch (error) {
      // console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProviders()
  }, [loadProviders])

  return (
    <>
      <Header
        greeting={t('greeting')}
        name={user?.name || ''}
        onPressAvatar={handleNavigate}
      />

      <FlatList
        refreshing={loading}
        onRefresh={loadProviders}
        data={providers}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ padding: 24 }}
        ListHeaderComponent={(): JSX.Element => (
          <Text variant="bold" fontSize={24} marginY={12}>
            {t('providers_title')}
          </Text>
        )}
        ListEmptyComponent={(): JSX.Element => (
          <Text variant="bold" fontSize={24} marginY={12}>
            {t('providers_list_empty')}
          </Text>
        )}
        renderItem={({ item }) => <Text>{JSON.stringify(item)}</Text>}
      />
    </>
  )
}

export default Home
