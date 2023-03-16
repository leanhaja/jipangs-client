import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {
  login as setToken,
  logout as clearToken,
} from '../redux/reducers/authReducer'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const { token: jwtToken } = useAppSelector((state) => state.auth)

  const login = useCallback(
    ({ hasInfo, token }: { hasInfo: boolean; token: string }) => {
      dispatch(setToken({ hasInfo, token }))
    },
    [dispatch]
  )

  const logout = useCallback(() => {
    dispatch(clearToken())
  }, [dispatch])

  return {
    jwtToken,
    login,
    logout,
  }
}

export default useAuth
