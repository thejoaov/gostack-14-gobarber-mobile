import React from 'react'

import { View } from './styles'
import { ScrollViewProps } from './types'

const ScrollView: React.FC<ScrollViewProps> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)

ScrollView.defaultProps = {
  center: true,
}

export default ScrollView
