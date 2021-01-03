import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import theme from 'core/styles/theme'

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import SignUpSuccess from 'screens/Auth/SignUpSuccess'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import Home from 'screens/Dashboard/Home'
import Schedule from 'screens/Dashboard/Schedule'
import ScheduleSuccess from 'screens/Dashboard/SheduleSuccess'
import Profile from 'screens/Settings/Profile'
import Logout from 'screens/Settings/Logout'

const AppStack = createStackNavigator()
const AuthStack = createStackNavigator()
const MainStack = createStackNavigator()

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    headerMode="none"
    initialRouteName="SignIn"
    screenOptions={{
      cardStyle: { backgroundColor: theme.colors.background },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AuthStack.Screen name="SignIn" component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
    <AuthStack.Screen name="SignUpSuccess" component={SignUpSuccess} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </AuthStack.Navigator>
)

const MainRoutes: React.FC = () => (
  <MainStack.Navigator
    headerMode="none"
    initialRouteName="Home"
    screenOptions={{ cardStyle: { backgroundColor: theme.colors.background } }}>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Schedule" component={Schedule} />
    <MainStack.Screen name="ScheduleSuccess" component={ScheduleSuccess} />
    <MainStack.Screen name="Profile" component={Profile} />
    <MainStack.Screen name="Logout" component={Logout} />
  </MainStack.Navigator>
)

const App: React.FC = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen
      name="Auth"
      component={AuthRoutes}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
      }}
    />
    <AppStack.Screen
      name="Main"
      component={MainRoutes}
      options={{ cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
    />
  </AppStack.Navigator>
)

const Routes: React.FC = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)

export default Routes
