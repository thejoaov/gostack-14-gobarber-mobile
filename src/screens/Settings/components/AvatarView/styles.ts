import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { flexbox, layout, padding, position, space } from 'styled-system'

export const AvatarContainer = styled.View`
  align-items: center;

  ${space};
  ${layout};
  ${flexbox};
  ${position};
  ${padding}
`

export const AvatarButton = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 5px;
  bottom: 5px;
`
