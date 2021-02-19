import React from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useTheme } from 'styled-components/native'

import Text from '../../general/Text'
import Section from '../../layout/Section'
import Container from '../../layout/Container'

import { Props } from './types'

const DatePicker = ({
  title,
  value = new Date(),
  iosOptions,
  androidOptions,
  androidOptions: { ButtonComponent, isVisible = true },
  ...otherProps
}: Props): JSX.Element => {
  const { colors } = useTheme()

  return Platform.select({
    ios: (
      <Container marginY={10}>
        <Section
          backgroundColor={colors.black.shape}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          center
          padding={2}>
          <Text fontSize={25}>{title}</Text>
        </Section>
        <Section
          padding={10}
          backgroundColor={colors.black.medium}
          borderBottomLeftRadius={10}
          borderBottomRightRadius={10}>
          <DateTimePicker
            textColor={colors.white}
            locale="pt-br"
            value={value}
            {...otherProps}
            {...iosOptions}
          />
        </Section>
      </Container>
    ),
    android: (
      <>
        <ButtonComponent />
        {isVisible && (
          <DateTimePicker value={value} {...otherProps} {...androidOptions} />
        )}
      </>
    ),
  }) as JSX.Element
}

export default DatePicker
