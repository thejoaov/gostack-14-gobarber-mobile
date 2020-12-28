import styled from 'styled-components/native'
import { space, layout, flexbox, position } from 'styled-system'

export const View = styled.SafeAreaView`
  ${space}
  ${layout}
  ${flexbox}
  ${position}
  background-color: ${({ theme }) => theme.colors.background}
`
