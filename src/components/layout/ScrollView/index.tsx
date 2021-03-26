import React from 'react'

import { StyledScrollView } from './styles'
import { Props } from './types'

const ScrollView = ({ children, ...props }: Props): JSX.Element => (
  <StyledScrollView {...props}>{children}</StyledScrollView>
)

ScrollView.defaultProps = {
  center: true,
}

export default ScrollView
