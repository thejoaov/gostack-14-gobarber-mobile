import styled from 'styled-components/native'
import { margin } from 'styled-system'

export const Container = styled.TouchableOpacity<{
  size?: number
  backgroundColor?: string
}>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor || theme.colors.black.shape};
  ${margin};
`

export const StyledAvatar = styled.Image<{ size?: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
`
