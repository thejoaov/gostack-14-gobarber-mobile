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
import { AuthContextData, AuthState, UpdateProfile } from './types'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)
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

      await Storage.clearUser()

      setData({} as AuthState)
    } finally {
      setLoading(false)
    }
  }, [])

  /**
   * Update user
   */
  const updateProfile = useCallback(
    async (profile: UpdateProfileForm) => {
      try {
        setLoading(true)
        const response = await Api.updateProfile(profile)

        // console.warn(response)
        // await Storage.update([['user', JSON.stringify(newUser)]])
        // setData({ ...data, user: newUser })
      } finally {
        setLoading(false)
      }
    },
    [data.token],
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
