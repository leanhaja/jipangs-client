import { useInfiniteQuery } from '@tanstack/react-query'

import { queryKeys } from '../react-query/constants'
import jipangsApi from '../service/jipangs'

const getScrapCard = async (keyword: string, page = 0, size = 20) => {
  const { data } = await jipangsApi.getSearchedCards(keyword, page, size)

  return data.response
}

const useSearchingCards = (keyword: string, size = 20) => {
  const {
    data: result,
    fetchNextPage: fetchNextResult,
    hasNextPage: hasNextResult,
    isSuccess,
  } = useInfiniteQuery(
    [queryKeys.searchingResultCard, keyword],
    ({ pageParam = 0 }: { pageParam?: number }) =>
      getScrapCard(keyword, pageParam, size),
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
