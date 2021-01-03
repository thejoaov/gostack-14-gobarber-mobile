import styled from 'styled-components/native'
import { layout, space } from 'styled-system'
import Icon from 'react-native-vector-icons/Feather'
import FeatherGlyphs from 'react-native-vector-icons/glyphmaps/Feather.json'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${space};
  ${layout};
`

export const StyledIcon = styled(Icon)<{ isFocused: boolean }>`
  color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.primary : theme.colors.gray.grayHard};
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
