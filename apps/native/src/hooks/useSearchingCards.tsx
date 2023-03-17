import { useInfiniteQuery } from '@tanstack/react-query'

import { axiosInstance, getJwtHeader } from '../axiosInstance'
import { queryKeys } from '../react-query/constants'

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

export interface GetScrapCardResponse {
  error: {
    message: string
    status: number
  } | null
  response: {
    content: Card[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    pageable: {
      offset: number
      pageNumber: number
      pageSize: number
      paged: boolean
      sort: {
        empty: boolean
        sorted: boolean
        unsorted: boolean
      }
      unpaged: boolean
    }
    size: number
    sort: {
      empty: boolean
      sorted: boolean
      unsorted: boolean
    }
  } | null
  success: boolean
}

const getScrapCard = async (token: string, keyword: string, page?: number) => {
  const queryParams = page ? `?page=${page}&size=10` : '?page=0&size=10'

  const { data } = await axiosInstance.get<GetScrapCardResponse>(
    `/api/v1/card-management/card/keyword/${keyword}${queryParams}`,
    { headers: getJwtHeader(token) }
  )

  return data.response
}

const useSearchingCards = (keyword: string) => {
  const { jwtToken } = useAuth()
  const {
    data: result,
    fetchNextPage: fetchNextResult,
    hasNextPage: hasNextResult,
    isSuccess,
  } = useInfiniteQuery(
    [queryKeys.searchingResultCard, keyword],
    ({ pageParam = 0 }: { pageParam?: number }) =>
      getScrapCard(jwtToken, keyword, pageParam),
    {
      enabled: !!keyword,
      getNextPageParam: (lastPage) => {
        if (!lastPage) return null
        if (lastPage.last) return null

        const nextPage = lastPage.pageable.pageNumber + 1
        return nextPage
      },
    }
  )

  return {
    fetchNextResult,
    hasNextResult,
    isSuccess,
    result,
  }
}

export default useSearchingCards