import 'i18n'
import 'react-native-gesture-handler'
import React from 'react'
import { StylesProvider } from 'components'

import Routes from 'routes'
import ContextProvider from 'core/hooks'

const App: React.FC = () => (
  <StylesProvider>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </StylesProvider>
)

export default App
