import React from 'react'
import { Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useTheme } from 'styled-components/native'

import Text from '../../general/Text'

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
      <>
        <Text fontSize={25} mb={10}>
          {title}
        </Text>
        <DateTimePicker
          textColor={colors.white}
          locale="pt-br"
          value={value}
          {...otherProps}
          {...iosOptions}
        />
      </>
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
