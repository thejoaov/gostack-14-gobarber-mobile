import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar, StylesProvider } from 'components'

import SignIn from 'screens/Auth/SignIn'

const App: React.FC = () => (
  <StylesProvider>
    <StatusBar barStyle="light-content" />
    <SignIn />
  </StylesProvider>
)

export default App
