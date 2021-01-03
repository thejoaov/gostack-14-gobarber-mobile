import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.black.inputs};
  margin-bottom: ${getBottomSpace()}px;
`
