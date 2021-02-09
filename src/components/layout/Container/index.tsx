import React from 'react'

import { View } from './styles'
import { Props } from './types'

const Container: React.FC<Props> = ({ children, ...props }) => (
  <View {...props}>{children}</View>
)

Container.defaultProps = {
  flex: 1,
}

export default Container
