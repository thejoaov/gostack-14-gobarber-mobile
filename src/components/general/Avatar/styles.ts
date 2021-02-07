import styled from 'styled-components/native'
import { OwnProps } from './types'

export const Container = styled.TouchableOpacity<{ size?: number }>`
  margin: 24px;
  background-color: ${({ theme }) => theme.colors.black.shape};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
  justify-content: center;
  align-items: center;
`

export const StyledAvatar = styled.Image<{ size?: number }>`
  /* background-color: ${({ theme }) => theme.colors.black.inputs}; */
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
`
