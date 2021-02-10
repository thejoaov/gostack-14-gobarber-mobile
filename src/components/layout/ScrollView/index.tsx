import React from 'react'

import { View } from './styles'
import { Props } from './types'

const ScrollView: React.FC<Props> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)

ScrollView.defaultProps = {
  center: true,
}

export default ScrollView
