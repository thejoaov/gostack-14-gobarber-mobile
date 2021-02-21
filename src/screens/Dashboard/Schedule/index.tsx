import React, { useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { ActivityIndicator, FlatList, ScrollView } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'
import { Provider, ProviderDayAvailability } from 'core/services/api/types'
import { Api } from 'core/services/api'
import Device from 'core/helpers/Device'
import DateTime from 'core/helpers/DateTime'
import { Button, Container, Section, Text, DatePicker } from 'components'

import HeaderSchedule from '../components/HeaderSchedule'
import ProviderCard from '../components/ProviderCard'
import { Props } from './types'
import AvailabilityCard from '../components/AvailabilityCard'

const Schedule: React.FC<Props> = ({ route, navigation }) => {
  const { params } = route
  const { t } = useTranslation('schedule')
  const { colors } = useTheme()

  const providerListRef = useRef<FlatList>(null)
  const scheduleRef = useRef<ScrollView>(null)

  // const [hasSelected, setHasSelected] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<Provider>(
    params.providerList.find(
      item => item.id === params.provider.id,
    ) as Provider,
  )
  const [loading, setLoading] = useState(false)
  const [sumbitting, setSubmitting] = useState(false)
  const [hasSelected, setHasSelected] = useState(false)
  const [availability, setAvailability] = useState<ProviderDayAvailability[]>(
    [],
  )
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedHour, setSelectedHour] = useState(0)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const loadAvailability = useCallback(async () => {
    try {
      if (!sumbitting) setLoading(true)
      const response = await Api.getProviderDayAvailability(
        selectedProvider.id,
        selectedDate.getFullYear(),
        selectedDate.getMonth() + 1,
        selectedDate.getDate(),
      )

      setAvailability(response.data)
    } catch (error) {
      // console.log(error)
    } finally {
      setLoading(false)
    }
  }, [selectedDate, selectedProvider.id, sumbitting])

  const morningAvailability = useMemo(
    () =>
      availability
        .filter(item => item.hour < 12)
        .map(item => ({
          ...item,
          hourFormatted: DateTime.formatHour(item.hour, 'ptBR_short'),
        })),
    [availability],
  )

  const afternoonAvailability = useMemo(
    () =>
      availability
        .filter(item => item.hour >= 12)
        .map(item => ({
          ...item,
          hourFormatted: DateTime.formatHour(item.hour, 'ptBR_short'),
        })),
    [availability],
  )

  useEffect(() => {
    loadAvailability()
    setSelectedHour(0)
  }, [loadAvailability, params.providerList, selectedProvider, sumbitting])

  useEffect(() => {
    if (!!hasSelected) scheduleRef.current?.scrollToEnd()
  }, [hasSelected, selectedDate])

  useEffect(() => {
    providerListRef.current?.scrollToIndex({
      animated: true,
      index: params.providerList.indexOf(selectedProvider),
    })
  }, [params.providerList, selectedProvider, selectedDate])

  const handleDateChange = (_: Event, date: Date | undefined): void => {
    if (Device.isAndroid()) setShowDatePicker(false)
    if (!!date) setHasSelected(true)
    setSelectedDate(prevState => (!!date ? (date as Date) : prevState))
  }

  const handleShowDatePicker = (): void => {
    setShowDatePicker(prevState => !prevState)
  }

  const handleSelectHour = ({ hour }: { hour: number }) => {
    setSelectedHour(hour)
  }

  const handleSubmit = (): void => {
    setSubmitting(true)
    Api.createAppointment(
      selectedProvider.id,
      new Date(selectedDate.setUTCHours(selectedHour)),
    )
      .then(() => {
        navigation.navigate('Feedback', {
          status: 'success',
          title: t('feedback.success.title'),
          message: t('feedback.success.message', {
            date: DateTime.formatDate(
              new Date(selectedDate.setUTCHours(selectedHour)),
              'ptBR_long',
            ),
            providerName: selectedProvider.name,
          }),
        })
      })
      .catch(() => {
        navigation.navigate('Feedback', {
          status: 'error',
          title: t('feedback.error.title'),
          message: t('feedback.error.message'),
          button: {
            title: t('feedback.error.button_title'),
          },
        })
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <>
      <HeaderSchedule title={t('header_title')} />
      <Section mt={32} mb="8px">
        <FlatList
          ref={providerListRef}
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

      <ScrollView
        ref={scheduleRef}
        bounces={false}
        endFillColor={colors.black.shape}
        centerContent>
        <Container flex={1} pt={24} paddingX={24}>
          <DatePicker
            title={t('choose_date_title')}
            value={selectedDate}
            iosOptions={{
              onChange: handleDateChange,
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
              onChange: handleDateChange,
            }}
          />

          {loading ? (
            <Section flex={1}>
              <ActivityIndicator size={60} color={colors.primary} />
            </Section>
          ) : (
            <>
              <Section paddingY="40px" flex={1}>
                <Text fontSize={25} variant="medium">
                  {t('choose_hour_title')}
                </Text>
                <Text fontSize={14} color={colors.gray.gray} mt="22px">
                  {t('availability_morning_title')}
                </Text>
                <Section flexWrap="wrap" flexDirection="row" mt="6px">
                  {morningAvailability.map(item => (
                    <AvailabilityCard
                      availability={item}
                      selected={selectedHour === item.hour}
                      onPress={(): void => handleSelectHour(item)}
                    />
                  ))}
                </Section>

                <Text fontSize={14} color={colors.gray.gray} mt="22px">
                  {t('availability_afternoon_title')}
                </Text>
                <Section flexWrap="wrap" flexDirection="row" mt="6px">
                  {afternoonAvailability.map(item => (
                    <AvailabilityCard
                      selected={selectedHour === item.hour}
                      availability={item}
                      onPress={(): void => handleSelectHour(item)}
                    />
                  ))}
                </Section>
              </Section>
            </>
          )}
        </Container>
      </ScrollView>
      <Section pl={24} pb={24} pr={24}>
        <Button
          enabled={!!selectedHour}
          title={t('submit_schedule_button')}
          onPress={handleSubmit}
          isLoading={sumbitting}
        />
      </Section>
    </>
  )
}

export default Schedule
