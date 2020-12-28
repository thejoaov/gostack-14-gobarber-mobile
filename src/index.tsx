import { Container } from 'components'
import React from 'react'
import { Text, StatusBar } from 'react-native'

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Container>
      <Text>App</Text>
    </Container>
  </>
)

export default App
