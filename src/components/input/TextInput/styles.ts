import styled from 'styled-components/native'
import { layout, space } from 'styled-system'
import Icon from 'react-native-vector-icons/Feather'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

export const OuterContainer = styled.View``

export const Container = styled.View<{
  isFocused?: boolean
  isFilled?: boolean
}>`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-width: 2px;
  border-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.black.inputs};

  ${space};
  ${layout};
`

export const ErrorView = styled.View`
  align-self: flex-start;
  height: 14px;
`

export const StyledIcon = styled(Icon)<{
  isFocused: boolean
  error: boolean
  isFilled: boolean
}>`
  color: ${({ theme, isFocused, isFilled, error }) =>
    (!!error && theme.colors.semantic.error) ||
    (isFocused || isFilled
      ? theme.colors.primary
      : theme.colors.gray.grayHard)};
`

export const IconView = styled.View`
  margin: 0 18px 0 18px;
  justify-content: center;
`

export const StyledInput = styled.TextInput.attrs<{
  placeholderTextColor?: string
}>(({ theme }) => ({
  placeholderTextColor: theme.colors.gray.grayHard,
}))`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  flex: 1;
`

export const StyledEyeIcon = styled(Icon)<{
  name: keyof typeof FeatherGlyphs
}>`
  color: ${({ theme }) => theme.colors.gray.grayHard};
`

export const IconEyeView = styled.TouchableOpacity`
  margin: 0 18px 0 18px;
  justify-content: center;
`
