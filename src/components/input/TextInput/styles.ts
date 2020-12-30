import styled from 'styled-components/native'
import { layout, space, margin } from 'styled-system'

export const Container = styled.TextInput<{ mh?: number | string }>`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;

  height: 50px;

  ${space};
  ${layout};
`
