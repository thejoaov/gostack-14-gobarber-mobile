import React, { useCallback, useEffect, useState, useRef } from 'react'
import { ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'

import { Provider, ProviderDayAvailability } from 'core/services/api/types'
import { Api } from 'core/services/api'
import Device from 'core/helpers/Device'
import FormatDate from 'core/helpers/FormatDate'

import { Button, Container, Section, Text, DatePicker } from 'components'

import HeaderSchedule from '../components/HeaderSchedule'
import ProviderCard from '../components/ProviderCard'
import { Props } from './types'

const Schedule: React.FC<Props> = ({ route }) => {
  const { params } = route
  const { t } = useTranslation('schedule')
  const { colors } = useTheme()
  const flatListRef = useRef<FlatList>(null)

  const [hasSelected, setHasSelected] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<Provider>(
    params.providerList.find(
      item => item.id === params.provider.id,
    ) as Provider,
  )
  const [loading, setLoading] = useState(false)
  const [monthAvailability, setMonthAvailability] = useState<
    ProviderDayAvailability[]
  >()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)

  const loadMonthAvailability = useCallback(async () => {
    try {
      setLoading(true)
      const response = await Api.getProviderDayAvailability(
        selectedProvider.id,
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDay(),
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
  }, [params.providerList, selectedProvider, selectedDate])

  useEffect(() => {
    loadMonthAvailability()
  }, [loadMonthAvailability, params.providerList, selectedProvider])

  const handeDateChange = useCallback((_event, date: Date | undefined) => {
    if (Device.isAndroid()) setShowDatePicker(false)
    if (!!date) setHasSelected(true)
    setSelectedDate(prevState => (!!date ? (date as Date) : prevState))
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
          getItemLayout={(_data, index) => ({
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
        <DatePicker
          title={
            hasSelected
              ? FormatDate.formatString(selectedDate)
              : t('choose_date_title')
          }
          value={selectedDate}
          iosOptions={{
            onChange: handeDateChange,
            mode: 'date',
            display: 'inline',
          }}
          androidOptions={{
            isVisible: showDatePicker,
            ButtonComponent: (): JSX.Element => (
              <Button onPress={handleShowDatePicker} />
            ),
            mode: 'date',
            display: 'calendar',
            onChange: handeDateChange,
          }}
        />

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
