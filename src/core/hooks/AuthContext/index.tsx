import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Api } from 'core/services/api'
import { Storage } from 'core/services/storage'
import { Alert } from 'react-native'
import { AuthContextData, AuthState, SignUpData } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({ token: null, user: null })
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    const token = await Storage.getItem('token')
    const user = await Storage.getItem('user')

    if (token && user) {
      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  /**
   * Send a request to api with signUp credentials
   */
  const signUp = useCallback(async (values: SignUpData) => {
    try {
      setLoading(true)
      await Api.signUp(values)
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Send a request to api with signIn credentials and
   * sets user in context
   */
  const signIn = useCallback(async ({ password, email }) => {
    try {
      setLoading(true)

      const response = await Api.login({
        password,
        email,
      })

      const { token, user } = response.data

      await Storage.setItems([
        ['token', token],
        ['user', JSON.stringify(user)],
      ])

      setData({ token, user })
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Clear user credentials in storage
   */
  const signOut = useCallback(async () => {
    setLoading(true)

    await Storage.clearUser()

    setData({} as AuthState)
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ loading, user: data.user, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an auth Provider')
  }

  return context
}
