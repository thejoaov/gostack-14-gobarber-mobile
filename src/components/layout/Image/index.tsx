import React from 'react'

import { Image as StyledImage } from './styles'
import { ImageProps } from './types'

const Image: React.FC<ImageProps> = ({ ...props }) => <StyledImage {...props} />

export default Image
