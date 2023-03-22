import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login, logout } from '../redux/reducers/authReducer'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const { token: jwtToken } = useAppSelector((state) => state.auth)

  const setToken = useCallback(
    ({ hasInfo, token }: { hasInfo: boolean; token: string }) => {
      dispatch(login({ hasInfo, token }))
    },
    [dispatch]
  )

  const clearToken = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return {
    clearToken,
    jwtToken,
    setToken,
  }
}

export default useAuth
