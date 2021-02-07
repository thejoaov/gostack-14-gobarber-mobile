import styled from 'styled-components/native'
import { margin } from 'styled-system'

export const Container = styled.TouchableOpacity<{ size?: number }>`
  background-color: ${({ theme }) => theme.colors.black.shape};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
  justify-content: center;
  align-items: center;

  ${margin};
`

export const StyledAvatar = styled.Image<{ size?: number }>`
  /* background-color: ${({ theme }) => theme.colors.black.inputs}; */
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
`
