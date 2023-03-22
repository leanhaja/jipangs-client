import { AxiosError } from 'axios'
import { useEffect } from 'react'

import { useAppDispatch } from '../redux/hooks'
import { logout } from '../redux/reducers/authReducer'
import jipangsApi from '../service/jipangs'

const useUser = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const requestTestQuery = async () => {
      try {
        await jipangsApi.getActivities({
          activityType: '대외활동',
          cardType: 'new',
        })
      } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 401) {
          dispatch(logout())
        }
      }
    }

    requestTestQuery().catch((e: unknown) => {
      const errorMessage =
        e instanceof Error ? e.message : '알 수 없는 에러가 발생했습니다.'

      throw new Error(errorMessage)
    })
  }, [dispatch])
}

export default useUser
