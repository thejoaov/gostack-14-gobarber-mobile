import React from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import theme from 'core/styles/theme'
import { AuthRouter } from './Routes'

const Router = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <Router.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
      <Router.Screen name="Auth" component={AuthRouter} />
    </Router.Navigator>
  </NavigationContainer>
)

export default Routes
