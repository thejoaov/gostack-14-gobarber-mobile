import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type AppStackParams = {
  Auth: undefined
  Main: undefined
}

export type AppNavProps<T extends keyof AppStackParams> = {
  navigation: StackNavigationProp<AppStackParams, T>
  route: RouteProp<AppStackParams, T>
}

export type AuthStackParams = {
  ForgotPassword: undefined
  SignIn: { email: string; password: string } | undefined
  SignUp: undefined
  Feedback: {
    title: string
    status: 'success' | 'error'
    message: string
    button?: Partial<{
      title: string
      onPress(): void
    }>
  }
}

export type AuthNavProps<T extends keyof AuthStackParams> = {
  navigation: StackNavigationProp<AuthStackParams & AppStackParams, T>
  route: RouteProp<AuthStackParams & AppStackParams, T>
}

export type MainStackParams = {
  Dashboard: undefined
  Settings: undefined
}

export type MainNavProps<T extends keyof MainStackParams> = {
  navigation: StackNavigationProp<MainStackParams & AppStackParams, T>
  route: RouteProp<MainStackParams & AppStackParams, T>
}

export type DashboardStackParams = {
  Home: undefined
  Schedule: undefined
  ScheduleStatus: { status: 'success' | 'error' }
}

export type DashboardNavProps<T extends keyof DashboardStackParams> = {
  navigation: StackNavigationProp<DashboardStackParams & AppStackParams, T>
  route: RouteProp<DashboardStackParams & AppStackParams, T>
}

export type SettingsStackParams = {
  Profile: undefined
  Logout: undefined
  Feedback: {
    title: string
    status: 'success' | 'error'
    message: string
    button?: Partial<{
      title: string
      onPress(): void
    }>
  }
}

export type SettingsNavProps<T extends keyof SettingsStackParams> = {
  navigation: StackNavigationProp<SettingsStackParams & AppStackParams, T>
  route: RouteProp<SettingsStackParams & AppStackParams, T>
}
