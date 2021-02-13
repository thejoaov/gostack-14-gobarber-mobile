import { AxiosPromise } from 'axios'
import { ApiConfig as API } from 'config/ApiConfig'
import {
  LoginResponse,
  SignUpResponse,
  Appointment,
  ProviderMonthAvailability,
  UpdateProfileResponse,
  UpdateAvatarResponse,
  UpdateProfileForm,
  ProviderDayAvailability,
  Provider,
} from './types'

export const Api = {
  /**
   * Send a request to login
   */
  login: (email: string, password: string): AxiosPromise<LoginResponse> =>
    API.post('/sessions', {
      password,
      email,
    }),

  /**
   * Send a request to sign up
   */
  signUp: ({
    name,
    email,
    password,
  }: {
    name: string
    email: string
    password: string
  }): AxiosPromise<SignUpResponse> =>
    API.post('/users', {
      name,
      password,
      email,
    }),

  /**
   * Send a request to forgot password
   */
  forgotPassword: (email: string): AxiosPromise<void> =>
    API.post('/password/forgot', {
      email,
    }),

  /**
   * Send a request to reset password
   */
  resetPassword: ({
    password,
    passwordConfirmation,
    token,
  }: {
    password: string
    passwordConfirmation: string
    token: string
  }): AxiosPromise<void> =>
    API.post('/password/reset', {
      password,
      password_confirmation: passwordConfirmation,
      token,
    }),

  /**
   * Get provider month availability
   */
  getProviderMonthAvailability: (
    user_id: string,
    year: number,
    month: number,
  ): AxiosPromise<ProviderMonthAvailability[]> =>
    API.get(`/providers/${user_id}/month-availability`, {
      params: { year, month },
    }),

  /**
   * Get provider month availability
   */
  getProviderDayAvailability: (
    user_id: string,
    year: number,
    month: number,
    day: number,
  ): AxiosPromise<ProviderDayAvailability[]> =>
    API.get(`/providers/${user_id}/day-availability`, {
      params: {
        year: year.toString(),
        month: month.toString(),
        day: day.toString(),
      },
    }),

  /**
   * List provider appointments
   */
  listProviderAppointments: (
    year: number,
    month: number,
    day: number,
  ): AxiosPromise<Appointment[]> =>
    API.get('/appointments/me', {
      params: {
        year,
        month,
        day,
      },
    }),

  /**
   * Update user profile
   */
  updateProfile: (
    data: UpdateProfileForm,
  ): AxiosPromise<UpdateProfileResponse> => API.put('/profile', data),

  /**
   * Update avatar
   */
  updateAvatar: (data: FormData): AxiosPromise<UpdateAvatarResponse> =>
    API.patch('/users/avatar', { params: { data } }),

  /**
   * Get provider list
   */
  getProviderList: (): AxiosPromise<Provider[]> => API.get('providers'),
}
