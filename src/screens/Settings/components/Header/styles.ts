import styled from 'styled-components/native'
import Text from 'components/general/Text'
import { hasNotch } from 'react-native-device-info'
import { StatusBar } from 'react-native'

export const Container = styled.View`
  width: 100%;
  padding-top: ${hasNotch() ? StatusBar.currentHeight : 0}px;
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
