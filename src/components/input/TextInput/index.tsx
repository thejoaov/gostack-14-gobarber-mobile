import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from 'react'

import {
  Container,
  IconView,
  StyledIcon,
  StyledInput,
  StyledEyeIcon,
  IconEyeView,
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
      <Container {...props} isFocused={isFocused} error={!!error}>
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
    </>
  )
}

export default forwardRef(TextInput)
