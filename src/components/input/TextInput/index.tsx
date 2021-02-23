import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react'
import { TextInput as RnTextInput } from 'react-native'
import { useTheme } from 'styled-components/native'

import {
  Container,
  IconView,
  StyledIcon,
  StyledInput,
  StyledEyeIcon,
  IconEyeView,
} from './styles'
import { InputRef, Props } from './types'

const TextInput: React.ForwardRefRenderFunction<InputRef, Props> = (
  { icon, secureTextEntry, error, isFilled, ...props },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isSecured, setIsSecured] = useState(secureTextEntry)
  const { colors } = useTheme()

  const inputElementRef = useRef<RnTextInput>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus()
    },
  }))

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return (
    <>
      <Container {...props} isFocused={isFocused} error={!!error}>
        {!!icon && (
          <IconView>
            <StyledIcon
              name={icon}
              error={!!error}
              size={18}
              isFocused={isFocused}
              isFilled={!!isFilled}
              color={colors.gray.grayHard}
            />
          </IconView>
        )}

        <StyledInput
          {...props}
          ref={inputElementRef}
          secureTextEntry={isSecured}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />

        {!!secureTextEntry && (
          <IconEyeView onPress={() => setIsSecured(!isSecured)}>
            <StyledEyeIcon
              name={isSecured ? 'eye-off' : 'eye'}
              size={18}
              color={colors.gray.grayHard}
            />
          </IconEyeView>
        )}
      </Container>
    </>
  )
}

export default forwardRef(TextInput)
