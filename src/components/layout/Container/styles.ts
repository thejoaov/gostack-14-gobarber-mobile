import styled, { css } from 'styled-components/native'
import { space, layout, flexbox, position } from 'styled-system'

export const View = styled.SafeAreaView<{ center?: boolean }>`
  ${({ center }) =>
    !!center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  background-color: ${({ theme }) => theme.colors.background}

  ${space}
  ${layout}
  ${flexbox}
  ${position}
`
