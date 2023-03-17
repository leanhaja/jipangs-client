export interface ApiError {
  message: string
  status: number
}

export interface CardSort {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export interface PageInfo {
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

export interface Response<T> {
  content: T
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: PageInfo
  size: number
  sort: CardSort | null
}

export interface PageableCardResponse<T> {
  error: ApiError | null
  response: Response<T> | null
  success: boolean
}
