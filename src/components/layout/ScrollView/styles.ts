import styled from 'styled-components/native'
import { space, layout, position } from 'styled-system'

export const View = styled.ScrollView.attrs<{ center?: boolean }>(
  ({ center }) => ({
    contentContainerStyle: { flex: center ? 1 : 0 },
  }),
)`
  background-color: ${({ theme }) => theme.colors.background};

  ${space};
  ${layout};
  ${position};
`
