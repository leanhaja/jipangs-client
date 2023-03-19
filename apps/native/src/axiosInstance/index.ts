import axios, { AxiosRequestConfig } from 'axios'

import { baseUrl } from './constants'

export const getJwtHeader = (token: string) => ({
  Authorization: `Bearer ${token}`,
})

const config: AxiosRequestConfig = { baseURL: baseUrl }

export const axiosInstance = axios.create(config)
