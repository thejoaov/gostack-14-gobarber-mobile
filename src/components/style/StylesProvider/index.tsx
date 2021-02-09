import React from 'react'
import { ThemeProvider } from 'styled-components/native'

import defaultTheme from 'core/styles/theme'
import { Props } from './types'

const StylesProvider: React.FC<Props> = ({
  children,
  theme = defaultTheme,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

StylesProvider.defaultProps = {
  children: null,
  theme: defaultTheme,
}

export default StylesProvider
