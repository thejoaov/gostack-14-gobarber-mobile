import React from 'react'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Platform, StatusBar } from 'react-native'
import { useAuth } from 'core/hooks/AuthContext'

import SignIn from 'screens/Auth/SignIn'
import SignUp from 'screens/Auth/SignUp'
import Feedback from 'screens/Feedback'
import ForgotPassword from 'screens/Auth/ForgotPassword'
import Home from 'screens/Dashboard/Home'
import Schedule from 'screens/Dashboard/Schedule'
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

const DashboardRoutes: React.FC = () => {
  const theme = useTheme()

  return (
    <DashboardStack.Navigator
      headerMode="none"
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <DashboardStack.Screen name="Home" component={Home} />
      <DashboardStack.Screen name="Schedule" component={Schedule} />
      <AuthStack.Screen name="Feedback" component={Feedback} />
    </DashboardStack.Navigator>
  )
}

const SettingsRoutes: React.FC = () => {
  const theme = useTheme()

  return (
    <SettingsStack.Navigator
      headerMode="none"
      initialRouteName="Profile"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Logout" component={Logout} />
      {/* Provisory, until Toasts are finished */}
      <AuthStack.Screen name="Feedback" component={Feedback} />
    </SettingsStack.Navigator>
  )
}

const AuthRoutes: React.FC = () => {
  const theme = useTheme()

  return (
    <AuthStack.Navigator
      headerMode="none"
      initialRouteName="SignIn"
      screenOptions={{
        cardStyle: { backgroundColor: theme.colors.background },
        cardStyleInterpolator: Platform.select({
          ios: CardStyleInterpolators.forVerticalIOS,
          android: CardStyleInterpolators.forRevealFromBottomAndroid,
        }),
      }}>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <AuthStack.Screen name="Feedback" component={Feedback} />
    </AuthStack.Navigator>
  )
}

const MainRoutes: React.FC = () => {
  const theme = useTheme()

  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="Dashboard"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: { backgroundColor: theme.colors.background },
      }}>
      <MainStack.Screen name="Dashboard" component={DashboardRoutes} />
      <MainStack.Screen name="Settings" component={SettingsRoutes} />
    </MainStack.Navigator>
  )
}

const App: React.FC = () => {
  const { user } = useAuth()
  const theme = useTheme()

  return (
    <AppStack.Navigator headerMode="none">
      {!!user ? (
        <AppStack.Screen
          name="Main"
          component={MainRoutes}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardStyle: { backgroundColor: theme.colors.background },
          }}
        />
      ) : (
        <AppStack.Screen
          name="Auth"
          component={AuthRoutes}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
            cardStyle: { backgroundColor: theme.colors.background },
          }}
        />
      )}
    </AppStack.Navigator>
  )
}

const Routes: React.FC = () => {
  const { colors } = useTheme()

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.black.medium}
        animated
      />
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </>
  )
}

export default Routes
