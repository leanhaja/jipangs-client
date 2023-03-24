import { useInfiniteQuery } from '@tanstack/react-query'

import { queryKeys } from '../react-query/constants'
import jipangsApi from '../service/jipangs'

const getScrapCard = async (
  activityType: '대외활동' | '봉사활동',
  cardType: 'new' | 'popular',
  page?: number,
  size?: number
) => {
  const { data } = await jipangsApi.getActivities({
    activityType,
    cardType,
    page,
    size,
  })

  return data.response
}

const useLatestActivities = (
  activityType: '대외활동' | '봉사활동',
  cardType: 'new' | 'popular',
  size = 20
) => {
  const {
    data: cardsResponse,
    fetchNextPage: fetchNextCards,
    hasNextPage: hasNextCards,
    isSuccess,
    refetch,
  } = useInfiniteQuery(
    [queryKeys.latestCard, activityType, cardType, size],
    ({ pageParam = 0 }: { pageParam?: number }) =>
      getScrapCard(activityType, cardType, pageParam, size),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage || lastPage.last) return null

        const nextPage = lastPage.pageable.pageNumber + 1
        return nextPage
      },
    }
  )

  return {
    cardsResponse,
    fetchNextCards,
    hasNextCards,
    isSuccess,
    refetch,
  }
}

export default useLatestActivities
