import { useInfiniteQuery } from '@tanstack/react-query'

import { axiosInstance, getJwtHeader } from '../axiosInstance'
import { PageableCardResponse } from '../axiosInstance/types'
import { queryKeys } from '../react-query/constants'
import { Card } from '../types'

import useAuth from './useAuth'

export type GetPopularCardResponse = PageableCardResponse<Card[]>

const getScrapCard = async (
  token: string,
  type: '대외활동' | '봉사활동',
  page?: number
) => {
  const queryParams = page ? `?page=${page}&size=10` : '?page=0&size=10'

  const { data } = await axiosInstance.get<GetPopularCardResponse>(
    `/api/v1/card-management/card/${type}/popular${queryParams}`,
    { headers: getJwtHeader(token) }
  )

  return data.response
}

const usePopularActivities = (type: '대외활동' | '봉사활동') => {
  const { jwtToken } = useAuth()
  const {
    data: popularCard,
    fetchNextPage: fetchNextPopularCard,
    hasNextPage: hasNextPopularCard,
    isSuccess,
    refetch,
  } = useInfiniteQuery(
    [queryKeys.scrapCard, type],
    ({ pageParam = 0 }: { pageParam?: number }) =>
      getScrapCard(jwtToken, type, pageParam),
    {
      enabled: !!type,
      getNextPageParam: (lastPage) => {
        if (!lastPage) return null
        if (lastPage.last) return null

        const nextPage = lastPage.pageable.pageNumber + 1
        return nextPage
      },
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  )

  return {
    fetchNextPopularCard,
    hasNextPopularCard,
    isSuccess,
    popularCard,
    refetch,
  }
}

export default usePopularActivities
