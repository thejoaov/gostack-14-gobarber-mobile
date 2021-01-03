import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

import { Text } from 'components'
import {
  Container,
  IconView,
  StyledIcon,
  StyledInput,
  StyledEyeIcon,
  IconEyeView,
  ErrorView,
} from './styles'
import { InputRef, TextInputProps } from './types'

const TextInput: React.ForwardRefRenderFunction<InputRef, TextInputProps> = (
  { icon, secureTextEntry, error, ...props },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isSecured, setIsSecured] = useState(secureTextEntry)
  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

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
          ref={inputElementRef}
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

export default forwardRef(TextInput)
