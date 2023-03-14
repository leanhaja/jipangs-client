/* eslint-disable @typescript-eslint/no-floating-promises */
import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { Text } from 'react-native'

import useLoadFonts from './hooks/useLoadFonts'
import { useAppDispatch } from './redux/hooks'
import { login } from './redux/reducers/authReducer'
import { store } from './redux/store'
import Routes from './routes/Routes'
import { setAuthInfo, getAuthInfo } from './utils/asyncStorage'

store.subscribe(() => {
  const { auth } = store.getState()
  ;(async () => {
    await setAuthInfo(auth)
  })()
})

export default function Native() {
  const dispatch = useAppDispatch()
  const [isFontsLoaded] = useLoadFonts()

  useEffect(() => {
    getAuthInfo().then((authInfo) => {
      if (!authInfo) return
      dispatch(login(authInfo))
    })
  }, [dispatch])

  if (!isFontsLoaded) return <Text>폰트 로딩중</Text>

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
