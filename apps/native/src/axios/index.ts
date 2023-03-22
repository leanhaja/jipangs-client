/* eslint-disable no-param-reassign */
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import { BASE_URL } from '../../config'
import { store } from '../redux/store'

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 4000,
})

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { token } = store.getState().auth
    if (config.headers) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error)
)
