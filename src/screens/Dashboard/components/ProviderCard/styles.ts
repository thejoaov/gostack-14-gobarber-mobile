import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const ProviderCardContainer = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.black.shape};
  /* height: 112px; */
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 20px 16px;
  flex-direction: row;
  align-items: center;
`
