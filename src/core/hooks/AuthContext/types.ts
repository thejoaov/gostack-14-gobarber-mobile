export type SignInCredentials = {
  email: string
  password: string
}

export type User = {
  id: string
  name: string
  avatar_url: string | null
  email: string
}

export type AuthContextData = {
  loading: boolean
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export type AuthState = {
  token: string
  user: User
}
