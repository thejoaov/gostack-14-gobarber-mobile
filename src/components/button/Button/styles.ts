import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { space, width } from 'styled-system'

export const Container = styled(RectButton)<{ color?: string }>`
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  ${width};
  ${space};
`
