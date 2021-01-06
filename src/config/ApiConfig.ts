import axios from 'axios'

export const ApiConfig = axios.create({
  baseURL: 'http://localhost:3333',
})
