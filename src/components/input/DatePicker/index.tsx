import React from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useTheme } from 'styled-components/native'

import Text from '../../general/Text'

import { Props } from './types'
import Section from '../../layout/Section'

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
      <Section
        justifyContent="center"
        alignItems="center"
        borderRadius={10}
        backgroundColor={colors.black.medium}
        padding={10}>
        <Text fontSize={25} mb={10}>
          {title}
        </Text>
        <DateTimePicker
          textColor={colors.white}
          locale="pt-br"
          value={value}
          shouldRasterizeIOS
          {...otherProps}
          {...iosOptions}
        />
      </Section>
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
