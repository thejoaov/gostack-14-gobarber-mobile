import { shade } from 'polished'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { space, width } from 'styled-system'
import { Props } from './types'

export const Container = styled(RectButton)<Props>`
  background-color: ${({ theme, color, enabled, isLoading }) => {
    if (isLoading) return shade(0.2, theme.colors.primary)
    if (enabled) {
      if (color) return color
      return theme.colors.primary
    }
    return theme.colors.gray.gray
  }};
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${width};
  ${space};
`
