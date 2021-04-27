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
export const ProviderCardContainerThin = styled(RectButton)<{
  selected?: boolean
}>`
  flex-direction: row;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.black.shape};
  height: 50px;
  border-radius: 10px;
  padding: 12px;
  margin-left: 16px;
  margin-right: 12px;
  align-items: center;
  width: 160px;
`
