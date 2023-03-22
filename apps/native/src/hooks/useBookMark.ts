import { useMutation } from '@tanstack/react-query'

import jipangsApi from '../service/jipangs'

export const requestBookMark = async (cardId: number) => {
  const { data } = await jipangsApi.postBookMark(cardId)

  return data.response
}

const useBookMark = () =>
  useMutation((cardId: number) => requestBookMark(cardId))

export default useBookMark
