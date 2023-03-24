/* eslint-disable @typescript-eslint/no-floating-promises */
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Text } from 'react-native'

import useLoadFonts from './hooks/useLoadFonts'
import useUpdateAuth from './hooks/useUpdateAuth'
import Routes from './routes/Routes'

SplashScreen.preventAutoHideAsync()

export default function Native() {
  const [isFontsLoaded] = useLoadFonts()
  useUpdateAuth()

  useEffect(() => {
    if (!isFontsLoaded) return

    const hideSplash = async () => {
      await SplashScreen.hideAsync()
    }

    hideSplash()
  }, [isFontsLoaded])

  if (!isFontsLoaded) {
    return <Text>폰트 로딩중</Text>
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
