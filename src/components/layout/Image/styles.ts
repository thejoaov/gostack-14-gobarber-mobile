import styled from 'styled-components/native'
import { space, layout, flexbox, position } from 'styled-system'

export const Image = styled.Image`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  background-color: ${({ theme }) => theme.colors.background}
`
