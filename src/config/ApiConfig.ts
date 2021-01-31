import axios from 'axios'
import { api } from 'core/constants/api'

export const ApiConfig = axios.create({
  baseURL: __DEV__ ? api.dev : api.production,
})
