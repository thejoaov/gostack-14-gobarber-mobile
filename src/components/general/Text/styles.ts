import styled from 'styled-components/native'
import { space, color, flexbox, fontSize } from 'styled-system'

export const TextContainer = styled.Text<{ variant?: 'medium' | 'regular' | 'light' | 'bold' }>`
  font-family: ${({ theme, variant }) => theme.fonts[variant || 'regular']};
  ${space}
  ${color}
  ${flexbox}
  ${fontSize}
`
