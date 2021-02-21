import { RectButton } from 'react-native-gesture-handler'
import { Text } from 'components'
import { shade } from 'polished'
import styled, { css } from 'styled-components/native'

export const Container = styled(RectButton)<{ selected?: boolean }>`
  width: 55px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-top: 6px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.black.shape};
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.2;
    `}
`

export const AvailabilityHour = styled(Text)<{ selected?: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.black.black : theme.colors.white};
`
