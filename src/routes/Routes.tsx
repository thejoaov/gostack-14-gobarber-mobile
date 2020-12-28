import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import SignUpSuccess from 'screens/Auth/SignUpSuccess'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import theme from 'core/styles/theme'

const Auth = createStackNavigator()

export const AuthRouter: React.FC = () => (
  <Auth.Navigator
    headerMode="none"
    initialRouteName="SignIn"
    screenOptions={{
      cardStyle: { backgroundColor: theme.colors.background },
    }}>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="SignUpSuccess" component={SignUpSuccess} />
    <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
  </Auth.Navigator>
)
