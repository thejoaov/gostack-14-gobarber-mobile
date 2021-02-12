import axios from 'axios'
import { api } from 'core/constants/api'
import { apiStatus } from 'core/constants/status'
import { Storage } from 'core/services/storage'

export const ApiConfig = axios.create({
  baseURL: __DEV__ ? api.dev : api.production,
})
