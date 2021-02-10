import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import Text from 'components/general/Text'
import Device from 'core/helpers/Device'

export const Container = styled.View`
  width: 100%;
  padding-top: ${Device.isIos() ? getStatusBarHeight() : 10}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const NameContainer = styled.View`
  margin: 24px;
`

export const Name = styled(Text)`
  font-size: 20px;
`

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`

export const LogoutButton = styled.TouchableOpacity`
  margin-right: 25px;
`
