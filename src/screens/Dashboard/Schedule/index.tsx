import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Button, Container, Section, Text } from 'components'
import DateTimePicker from '@react-native-community/datetimepicker'
import { ActivityIndicator, FlatList, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Provider, ProviderMonthAvailability } from 'core/services/api/types'
import { Api } from 'core/services/api'
import { useTheme } from 'styled-components/native'

import { ScrollView } from 'react-native-gesture-handler'
import HeaderSchedule from '../components/HeaderSchedule'
import ProviderCard from '../components/ProviderCard'
import { Props } from './types'

const Schedule: React.FC<Props> = ({ route, navigation }) => {
  const { params } = route
  const { t } = useTranslation('schedule')
  const { colors } = useTheme()
  const flatListRef = useRef<FlatList>(null)

  const [selectedProvider, setSelectedProvider] = useState<Provider>(
    params.providerList.find(
      item => item.id === params.provider.id,
    ) as Provider,
  )
  const [loading, setLoading] = useState(false)
  const [monthAvailability, setMonthAvailability] = useState<
    ProviderMonthAvailability[]
  >()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const loadMonthAvailability = useCallback(async () => {
    try {
      setLoading(true)
      const response = await Api.getProviderMonthAvailability(
        selectedProvider.id,
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
      )

      setMonthAvailability(response.data)
    } catch (error) {
      // console.log(error)
    } finally {
      setLoading(false)
    }
  }, [selectedDate, selectedProvider.id])

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: params.providerList.indexOf(selectedProvider),
    })
  }, [params.providerList, selectedProvider])

  useEffect(() => {
    loadMonthAvailability()
  }, [loadMonthAvailability, params.providerList, selectedProvider])

  const handeDateChange = useCallback((_event: Event, date?: Date) => {
    setSelectedDate(date as Date)
  }, [])

  const handleShowDatePicker = useCallback(() => {
    setShowDatePicker(prevState => !prevState)
  }, [])

  return (
    <>
      <HeaderSchedule title={t('header_title')} />
      <Section marginY={32}>
        <FlatList
          ref={flatListRef}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={params.providerList}
          getItemLayout={(data, index) => ({
            length: 50,
            offset: 175 * index,
            index,
          })}
          renderItem={({ item }) => (
            <ProviderCard
              provider={item}
              variant="thin"
              selected={selectedProvider?.id === item.id}
              onPress={(): void => setSelectedProvider(item)}
            />
          )}
        />
      </Section>

      <Container as={ScrollView} paddingX={24}>
        {Platform.select({
          ios: (
            <DateTimePicker
              textColor={colors.white}
              mode="date"
              display="inline"
              value={selectedDate}
              onChange={handeDateChange}
              locale="pt-br"
            />
          ),
          android: (
            <>
              <Button
                title={t('datepicker_button_android')}
                onPress={handleShowDatePicker}
              />
              {showDatePicker && (
                <DateTimePicker
                  mode="date"
                  display="calendar"
                  value={selectedDate}
                  // locale="pt-br"
                />
              )}
            </>
          ),
        })}

        {loading ? (
          <Section flex={1}>
            <ActivityIndicator size={120} color={colors.primary} />
          </Section>
        ) : (
          <Section>
            <Text>{JSON.stringify(monthAvailability)}</Text>
          </Section>
        )}
      </Container>
    </>
  )
}

export default Schedule
