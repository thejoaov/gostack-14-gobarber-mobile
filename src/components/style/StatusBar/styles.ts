import { StatusBarProps } from 'react-native'
import styled from 'styled-components/native'

export const StatusBar = styled.StatusBar.attrs<StatusBarProps>(
  ({ theme }) => ({
    backgroundColor: theme.colors.background,
  }),
)``
