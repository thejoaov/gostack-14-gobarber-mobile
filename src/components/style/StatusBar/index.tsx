import React from 'react'

import { StatusBar as StyledStatusBar } from './styles'
import { Props } from './types'

const StatusBar: React.FC<Props> = ({ ...props }) => (
  <StyledStatusBar {...props} />
)

export default StatusBar
