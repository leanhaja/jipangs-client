import { useMutation } from '@tanstack/react-query'

import jipangs from '../../../service/jipangs'
import { UserInfo } from '../../../types/axios'

export default function useMutateUserInfo() {
  const mutation = useMutation({
    mutationFn: (data: UserInfo) => jipangs.postUserInfo(data),
  })

  return mutation
}
