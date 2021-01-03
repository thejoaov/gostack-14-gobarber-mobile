import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react'

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
  { icon, secureTextEntry, error, isFilled, ...props },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [filed, setFilled] = useState(isFilled)
  const [isSecured, setIsSecured] = useState(secureTextEntry)

  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    },
  }))

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    if (!!isFilled) {
      setFilled(true)
    }
    setIsFocused(false)
  }, [isFilled])

  return (
    <>
      <Container {...props} isFocused={isFocused} isFilled={filed}>
        {!!icon && (
          <IconView>
            <StyledIcon
              name={icon}
              error={!!error}
              size={18}
              isFocused={isFocused}
              isFilled={!!isFilled}
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
