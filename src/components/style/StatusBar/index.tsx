import React from 'react'

import { StatusBar as StyledStatusBar } from './styles'
import { StatusBarProps } from './types'

const StatusBar: React.FC<StatusBarProps> = ({ ...props }) => (
  <StyledStatusBar {...props} />
)

export default StatusBar
