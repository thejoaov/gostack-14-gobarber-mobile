import 'i18n'
import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, StylesProvider } from 'components'

import Routes from 'routes'
import ContextProvider from 'core/hooks'

const App: React.FC = () => (
  <StylesProvider>
    <ContextProvider>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ContextProvider>
  </StylesProvider>
)

export default App
