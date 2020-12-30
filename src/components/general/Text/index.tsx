import React from 'react'

import { TextContainer } from './styles'
import { Props } from './types'

const Text: React.FC<Props> = ({ children, ...props }) => (
  <TextContainer {...props}>{children}</TextContainer>
)

Text.defaultProps = {
  variant: 'regular',
}

export default Text
