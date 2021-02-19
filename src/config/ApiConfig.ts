import axios from 'axios'
import { api } from 'core/constants/api'
import { apiStatus } from 'core/constants/status'
import { Storage } from 'core/services/storage'

export const ApiConfig = axios.create({
  baseURL: __DEV__ ? api.dev : api.production,
})

ApiConfig.interceptors.response.use(
  response => response,
  async error => {
    const { response } = error

    if (
      response.status === apiStatus.JWT_TOKEN_INVALID ||
      response.status === apiStatus.JWT_TOKEN_MISSING
    )
      await Storage.clearUser()

    return Promise.reject(error)
  },
)
