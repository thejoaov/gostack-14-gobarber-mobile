import styled from 'styled-components/native'
import Text from 'components/general/Text'
import Device from 'core/helpers/Device'

export const Container = styled.View`
  width: 100%;
  padding-top: ${Device.getStatusBarHeight(10)}px;
  background-color: ${({ theme }) => theme.colors.black.medium};
  flex-direction: row;
  justify-content: space-between;
`

export const Name = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
`
