import React from 'react'

import { Container } from './styles'
import { InputProps } from './types'

const TextInput: React.FC<InputProps> = ({ ...props }) => (
  <Container {...props} />
)

TextInput.defaultProps = {
  width: '100%',
}

export default TextInput
