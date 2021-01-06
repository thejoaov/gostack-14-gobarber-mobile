export type SignInCredentials = {
  email: string
  password: string
}

export type SignUpData = {
  name: string
  email: string
  password: string
}

export type AuthContextData = {
  loading: boolean
  user: Record<string, unknown> | null
  signUp(data: SignUpData): Promise<void>
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export type AuthState = {
  token: string | null
  user: Record<string, unknown> | null
}
