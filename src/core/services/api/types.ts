export type LoginResponse = {
  user: {
    id: string
    name: string
    email: string
    avatar: string | null
    created_at: string
    updated_at: string
    avatar_url: string | null
  }
  token: string
}

export type SignUpResponse = {
  name: string
  email: string
  id: string
  created_at: string
  updated_at: string
  avatar_url: string | null
}

export type ShowProfileResponse = {
  id: string
  name: string
  email: string
  avatar: string | null
  created_at: string
  updated_at: string
  avatar_url: string | null
}

export type UpdateProfileForm = Partial<{
  name: string
  email: string
  old_password: string
  password: string
  password_confirmation: string
}>

export type UpdateProfileResponse = ShowProfileResponse

export type UpdateAvatarResponse = ShowProfileResponse

export type ProviderDayAvailability = {
  hour: number
  available: boolean
}

export type ProviderMonthAvailability = {
  day: number
  available: boolean
}

export type Provider = {
  id: string
  name: string
  email: string
  avatar: string | null
  created_at: string
  updated_at: string
  avatar_url: string | null
}

export type Appointment = {
  id: string
  provider_id: string
  user_id: string
  date: string
  created_at: string
  updated_at: string
  user: {
    id: string
    name: string
    email: string
    avatar: null | string
    created_at: string
    updated_at: string
    avatar_url: null | string
  }
}
