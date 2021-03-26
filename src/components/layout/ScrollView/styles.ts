import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { space, layout, position } from 'styled-system'

export const StyledScrollView = styled(ScrollView).attrs<{ center?: boolean }>(
  ({ center }) => ({
    contentContainerStyle: { flex: center ? 1 : 0 },
  }),
)`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;

  ${space}
  ${layout}
  ${position}
`
