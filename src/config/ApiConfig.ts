import axios from 'axios'

export const ApiConfig = axios.create({
  baseURL: __DEV__
    ? 'http://localhost:3333'
    : 'https://gobarber-11-server.herokuapp.com/',
})
