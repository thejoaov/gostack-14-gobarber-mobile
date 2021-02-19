import styled from 'styled-components/native'
import {
  space,
  color,
  flexbox,
  fontSize,
  textAlign,
  layout,
  border,
} from 'styled-system'
import { TextProps } from './types'

export const TextContainer = styled.Text<TextProps>`
  font-family: ${({ theme, variant }) => theme.fonts[variant || 'regular']};

  ${space};
  ${color};
  ${flexbox};
  ${fontSize};
  ${textAlign};
  ${layout};
  ${border};
`
