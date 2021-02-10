import React from 'react'

import { View } from './styles'
import { Props } from './types'

const Section: React.FC<Props> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)

Section.defaultProps = {
  backgroundColor: 'transparent',
}

export default Section
