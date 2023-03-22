import { useInfiniteQuery } from '@tanstack/react-query'

import { queryKeys } from '../react-query/constants'
import jipangsApi from '../service/jipangs'

const getScrapCard = async (
  activityType: '대외활동' | '봉사활동',
  page?: number,
  size?: number
) => {
  const { data } = await jipangsApi.getUserScarp({ activityType, page, size })

  return data.response
}

const useScrap = (activityType: '대외활동' | '봉사활동', size = 20) => {
  const {
    data: scarp,
    fetchNextPage: fetchNextScrap,
    hasNextPage: hasNextScrap,
    isSuccess,
    refetch,
    remove,
  } = useInfiniteQuery(
    [queryKeys.scrapCard, activityType, size],
    ({ pageParam = 0 }: { pageParam?: number }) =>
      getScrapCard(activityType, pageParam, size),

    {
      getNextPageParam: (lastPage) => {
        if (!lastPage) return null
        if (lastPage.last) return null

        const nextPage = lastPage.pageable.pageNumber + 1
        return nextPage
      },
    }
  )

  return {
    fetchNextScrap,
    hasNextScrap,
    isSuccess,
    refetch,
    remove,
    scarp,
  }
}

export default useScrap
