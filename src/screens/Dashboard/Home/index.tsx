import React, { useCallback, useEffect, useState } from 'react'
import { useAuth } from 'core/hooks/AuthContext'
import { useTranslation } from 'react-i18next'
import { Section, Text } from 'components'
import { useTheme } from 'styled-components'

import { FlatList } from 'react-native'
import { Provider } from 'core/services/api/types'
import { Api } from 'core/services/api'
import Header from '../components/HeaderHome'
import { Props } from './types'
import Skeleton from '../components/ProviderCard/skeleton'
import ProviderCard from '../components/ProviderCard'

const Home: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth()
  const { t } = useTranslation('home')
  const { colors } = useTheme()
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
        testID="header"
        greeting={t('greeting')}
        name={user?.name || ''}
        onPressAvatar={handleNavigate}
      />

      {loading ? (
        <Skeleton />
      ) : (
        <FlatList
          refreshing={loading}
          onRefresh={loadProviders}
          data={providers}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ paddingHorizontal: 24 }}
          ListHeaderComponent={(): JSX.Element =>
            (!!providers.length && (
              <Text variant="bold" fontSize={25} mt={32} mb={24}>
                {t('providers_title')}
              </Text>
            )) as JSX.Element
          }
          ListEmptyComponent={(): JSX.Element => (
            <Section center>
              <Text fontSize={18} color={colors.gray.gray} mt={32}>
                {t('providers_list_empty')}
              </Text>
            </Section>
          )}
          renderItem={({ item }) => (
            <ProviderCard
              testID="provider-card"
              provider={item}
              onPress={(): void =>
                navigation.navigate('Schedule', {
                  provider: item,
                  providerList: providers,
                })
              }
            />
          )}
        />
      )}
    </>
  )
}

export default Home
