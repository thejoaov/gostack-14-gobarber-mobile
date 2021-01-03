import React from 'react'

import { View } from './styles'
import { ContainerProps } from './types'

const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)

Container.defaultProps = {
  flex: 1,
}

export default Container
