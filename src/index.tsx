import { StatusBar, StylesProvider } from 'components'
import React from 'react'

import SignIn from 'screens/Auth/SignIn'

const App: React.FC = () => (
  <StylesProvider>
    <StatusBar barStyle="light-content" />
    <SignIn />
  </StylesProvider>
)

export default App
