import styled from 'styled-components/native'
import { layout, space } from 'styled-system'
import Icon from 'react-native-vector-icons/Feather'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;
  height: 50px;

  justify-content: center;
  flex-direction: row;

  ${space};
  ${layout};
`

export const StyledIcon = styled(Icon).attrs(({ theme }) => ({
  color: theme.colors.gray.grayHard,
}))``

export const IconView = styled.View`
  margin: 0 18px 0 18px;
  justify-content: center;
`

export const StyledInput = styled.TextInput.attrs<{
  placeholderTextColor?: string
}>(({ theme }) => ({
  placeholderTextColor: theme.colors.gray.grayHard,
}))`
  height: 50px;
  color: ${({ theme }) => theme.colors.gray.grayHard};

  flex: 1;
`
