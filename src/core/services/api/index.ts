import { AxiosPromise } from 'axios'
import { ApiConfig } from 'config/ApiConfig'

export const Api = {
  /**
   * Send a request to login
   */
  login: ({
    email,
    password,
  }: {
    email: string
    password: string
  }): AxiosPromise<any> =>
    ApiConfig.post('sessions', {
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
  }): AxiosPromise<any> =>
    ApiConfig.post('users', {
      name,
      password,
      email,
    }),
}
