import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Text from 'components/general/Text'

export const Container = styled.View`
  width: 100%;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${({ theme }) => theme.colors.black.medium};
  flex-direction: row;
`

export const NameContainer = styled.View`
  margin: 24px;
  flex: 1;
`

export const Greeting = styled(Text)`
  font-size: 20px;
`

export const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`
