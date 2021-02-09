import styled from 'styled-components/native'
import { layout, space } from 'styled-system'
import Icon from '../../general/Icon'
import { TextInputProps } from './types'

export const Container = styled.View<{
  isFocused?: boolean
  error?: boolean
}>`
  background-color: ${({ theme }) => theme.colors.black.inputs};
  border-radius: 10px;
  height: 60px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 2px;
  border-color: ${({ theme, isFocused, error }) =>
    // eslint-disable-next-line no-nested-ternary
    isFocused
      ? !!error
        ? theme.colors.semantic.error
        : theme.colors.primary
      : theme.colors.black.inputs};

  ${space};
  ${layout};
`

export const StyledIcon = styled(Icon)<TextInputProps>`
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

export const StyledEyeIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.gray.grayHard};
`

export const IconEyeView = styled.TouchableOpacity`
  margin: 0 18px 0 18px;
  justify-content: center;
`
