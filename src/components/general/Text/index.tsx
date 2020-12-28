import React from 'react'

import { TextContainer } from './styles'
import { Props } from './types'

const Text: React.FC<Props> = ({ children }) => <TextContainer>{children}</TextContainer>

export default Text
