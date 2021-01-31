import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import theme from 'core/styles/theme'
import { useAuth } from 'core/hooks/AuthContext'

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import Feedback from 'screens/Auth/Feedback'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import Home from 'screens/Dashboard/Home'
import Schedule from 'screens/Dashboard/Schedule'
import ScheduleStatus from 'screens/Dashboard/ScheduleStatus'
import Profile from 'screens/Settings/Profile'
import Logout from 'screens/Settings/Logout'

import {
  AuthStackParams,
  AppStackParams,
  MainStackParams,
  DashboardStackParams,
  SettingsStackParams,
} from './types'

const AppStack = createStackNavigator<AppStackParams>()
const AuthStack = createStackNavigator<AuthStackParams>()
const MainStack = createStackNavigator<MainStackParams>()
const DashboardStack = createStackNavigator<DashboardStackParams>()
const SettingsStack = createStackNavigator<SettingsStackParams>()

const DashboardRoutes: React.FC = () => (
  <DashboardStack.Navigator
    headerMode="none"
    initialRouteName="Home"
    screenOptions={{ cardStyle: { backgroundColor: theme.colors.background } }}>
    <DashboardStack.Screen name="Home" component={Home} />
    <DashboardStack.Screen name="Schedule" component={Schedule} />
    <DashboardStack.Screen name="ScheduleStatus" component={ScheduleStatus} />
  </DashboardStack.Navigator>
)

const SettingsRoutes: React.FC = () => (
  <SettingsStack.Navigator
    headerMode="none"
    initialRouteName="Profile"
    screenOptions={{ cardStyle: { backgroundColor: theme.colors.background } }}>
    <SettingsStack.Screen name="Profile" component={Profile} />
    <SettingsStack.Screen name="Logout" component={Logout} />
  </SettingsStack.Navigator>
)

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
    <AuthStack.Screen name="Feedback" component={Feedback} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </AuthStack.Navigator>
)

const MainRoutes: React.FC = () => (
  <MainStack.Navigator
    headerMode="none"
    initialRouteName="Dashboard"
    screenOptions={{ cardStyle: { backgroundColor: theme.colors.background } }}>
    <MainStack.Screen name="Dashboard" component={DashboardRoutes} />
    <MainStack.Screen name="Settings" component={SettingsRoutes} />
  </MainStack.Navigator>
)

const App: React.FC = () => {
  const { user } = useAuth()

  return (
    <AppStack.Navigator headerMode="none">
      {!!user ? (
        <AppStack.Screen
          name="Main"
          component={MainRoutes}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      ) : (
        <AppStack.Screen
          name="Auth"
          component={AuthRoutes}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          }}
        />
      )}
    </AppStack.Navigator>
  )
}

const Routes: React.FC = () => (
  <NavigationContainer>
    <App />
  </NavigationContainer>
)

export default Routes
