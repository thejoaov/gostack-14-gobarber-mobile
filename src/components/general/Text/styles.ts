import styled, { css } from 'styled-components/native'
import { space, color, flexbox, fontSize } from 'styled-system'

export const TextContainer = styled.Text<{
  variant?: 'medium' | 'regular' | 'light' | 'bold'
  mh?: number
}>`
  ${({ mh }) =>
    !!mh &&
    css`
      margin-horizontal: ${mh}px;
    `}

  font-family: ${({ theme, variant }) => theme.fonts[variant || 'regular']};

  ${space}
  ${color}
  ${flexbox}
  ${fontSize}
`
