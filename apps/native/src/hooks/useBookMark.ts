import { useMutation } from '@tanstack/react-query'

import { axiosInstance, getJwtHeader } from '../axiosInstance'

import useAuth from './useAuth'

export interface Card {
  category: string
  deadLine: string
  id: number
  img: string
  link: string
  major: string
  scrap: boolean
  scrapCnt: number
  source: string
  title: string
  typeName: string
}

export interface RequestBookMarkResponse {
  error: {
    message: string
    status: number
  } | null
  response: Card | null
  success: boolean
}

export const requestBookMark = async (token: string, cardId: number) => {
  const { data } = await axiosInstance.post<RequestBookMarkResponse>(
    `/api/v1/scrap-management/scrap`,
    { cardId },
    { headers: getJwtHeader(token) }
  )

  return data.response
}

const useBookMark = () => {
  const { jwtToken } = useAuth()

  return useMutation((cardId: number) => requestBookMark(jwtToken, cardId))
}

export default useBookMark
