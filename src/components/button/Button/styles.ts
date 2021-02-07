import { shade } from 'polished'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { space, width } from 'styled-system'
import { Props } from './types'

export const Container = styled(RectButton)<Props>`
  background-color: ${({ theme, color, enabled, isLoading }) =>
    enabled && !isLoading
      ? color || theme.colors.primary
      : shade(0.4, color || theme.colors.primary)};
  height: 60px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${width};
  ${space};
`
