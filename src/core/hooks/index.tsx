import React from 'react'
import { AuthProvider } from './AuthContext'

const ContextProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)

export default ContextProvider
