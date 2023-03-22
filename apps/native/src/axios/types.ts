export interface ApiError {
  message: string
  status: number
}

export interface Sort {
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
  sort: Sort | null
}

export interface PageableResponse<T> {
  error: ApiError | null
  response: Response<T> | null
  success: boolean
}

export interface NonPageableResponse<T> {
  error: ApiError | null
  response: T | null
  success: boolean
}
