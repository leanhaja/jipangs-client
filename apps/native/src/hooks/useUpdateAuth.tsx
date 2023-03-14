/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useRef } from 'react'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { login } from '../redux/reducers/authReducer'
import { Auth } from '../redux/types'
import { getAuthInfo, setAuthInfo } from '../utils/asyncStorage'

export default function useUpdateAuth() {
  const dispatch = useAppDispatch()
  const { auth } = useAppSelector((state) => state)
  const authRef = useRef<Auth | null>(null)
  const didMount = useRef(false)

  useEffect(() => {
    getAuthInfo().then((authInfo) => {
      if (!authInfo) return
      dispatch(login(authInfo))
    })
  }, [dispatch])

  useEffect(() => {
    if (didMount.current) {
      if (authRef.current !== auth) {
        setAuthInfo(auth)
        authRef.current = auth
      }
    }
    didMount.current = true
  }, [auth])
}
