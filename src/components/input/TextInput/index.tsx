import { Text } from 'components'
import React, { useState } from 'react'

import {
  Container,
  IconView,
  StyledIcon,
  StyledInput,
  StyledEyeIcon,
  IconEyeView,
  ErrorView,
} from './styles'
import { TextInputProps } from './types'

const TextInput: React.FC<TextInputProps> = ({
  icon,
  secureTextEntry,
  error,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isSecured, setIsSecured] = useState(secureTextEntry)

  return (
    <>
      <Container {...props}>
        {!!icon && (
          <IconView>
            <StyledIcon
              name={icon}
              error={!!error}
              size={18}
              isFocused={isFocused}
            />
          </IconView>
        )}

        <StyledInput
          {...props}
          secureTextEntry={isSecured}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {!!secureTextEntry && (
          <IconEyeView onPress={() => setIsSecured(!isSecured)}>
            <StyledEyeIcon name={isSecured ? 'eye-off' : 'eye'} size={18} />
          </IconEyeView>
        )}
      </Container>
      <ErrorView>
        <Text fontSize={12}>{error}</Text>
      </ErrorView>
    </>
  )
}

TextInput.defaultProps = {
  width: '100%',
  autoCapitalize: 'none',
  keyboardAppearance: 'dark',
}

export default TextInput
