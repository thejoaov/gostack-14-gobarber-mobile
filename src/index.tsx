import 'i18n'
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, StylesProvider } from 'components'

import Routes from 'routes'

const App: React.FC = () => (
  <StylesProvider>
    <StatusBar barStyle="light-content" />
    <Routes />
  </StylesProvider>
)

export default App
