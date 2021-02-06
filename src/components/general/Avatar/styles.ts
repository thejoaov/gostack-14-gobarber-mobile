import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  margin: 24px;
`

export const StyledAvatar = styled.Image<{ size?: number }>`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 28px;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => Number(size) / 2}px;
`
