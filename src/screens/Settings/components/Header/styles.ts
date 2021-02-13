import styled from 'styled-components/native'
import Device from 'core/helpers/Device'

export const Container = styled.View`
  width: 100%;
  padding-top: ${Device.getStatusBarHeight(10)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BackButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 25px;
`

export const LogoutButton = styled.TouchableOpacity`
  margin-right: 25px;
`
