import styled from 'styled-components/native'
import { space, color, flexbox } from 'styled-system'

export const TextContainer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bodyRegular};
  ${space}
  ${color}
  ${flexbox}
`
