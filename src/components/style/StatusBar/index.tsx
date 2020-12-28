import React from 'react'

import { StatusBar as StyledStatusBar } from './styles'
import { StyleStatusBarProps } from './types'

const StatusBar: React.FC<StyleStatusBarProps> = ({ ...props }) => <StyledStatusBar {...props} />

export default StatusBar
