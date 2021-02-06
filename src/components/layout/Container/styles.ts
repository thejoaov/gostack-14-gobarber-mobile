import styled, { css } from 'styled-components/native'
import { space, layout, flexbox, position, padding } from 'styled-system'

export const View = styled.View<{ center?: boolean }>`
  ${({ center }) =>
    !!center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  background-color: ${({ theme }) => theme.colors.background};

  ${space};
  ${layout};
  ${flexbox};
  ${position};
  ${padding};
`
