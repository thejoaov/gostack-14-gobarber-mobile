import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.black.inputs};
`
