import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Api } from 'core/services/api'
import { Storage } from 'core/services/storage'
import { UpdateProfileForm } from 'core/services/api/types'
import { ApiConfig } from 'config/ApiConfig'
import { apiStatus } from 'core/constants/status'

import { AuthContextData, AuthState } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    const token = await Storage.getItem('token')
    const user = await Storage.getItem('user')

    if (token && user) {
      ApiConfig.defaults.headers.authorization = `Bearer ${token}`

      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  /**
   * Send a request to api with signIn credentials and
   * sets user in context
   */
  const signIn = useCallback(async ({ password, email }) => {
    try {
      setLoading(true)

      const response = await Api.login(email, password)

      const { token, user } = response.data

      await Storage.setItems([
        ['token', token],
        ['user', JSON.stringify(user)],
      ])

      setData({ token, user })
      ApiConfig.defaults.headers.authorization = `Bearer ${token}`
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Clear user credentials in storage
   */
  const signOut = useCallback(async () => {
    try {
      setLoading(true)

      ApiConfig.defaults.headers.authorization = null
      await Storage.clearUser()

      setData({} as AuthState)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    ApiConfig.interceptors.response.use(
      config => config,
      async error => {
        const { response } = error

        if (response.status === apiStatus.JWT_TOKEN_INVALID) await signOut()

        return Promise.reject(error)
      },
    )
  }, [signOut, data])

  /**
   * Update user
   */
  const updateProfile = useCallback(
    async (profile: UpdateProfileForm) => {
      try {
        setLoading(true)
        const response = await Api.updateProfile(profile)

        await Storage.update([['user', JSON.stringify(response.data)]])
        setData({ ...data, user: response.data })
      } finally {
        setLoading(false)
      }
    },
    [data],
  )

  return (
    <AuthContext.Provider
      value={{ loading, user: data.user, signIn, signOut, updateProfile }}>
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
