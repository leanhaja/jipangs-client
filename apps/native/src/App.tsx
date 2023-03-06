import { ThemeProvider } from '@emotion/react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import useLoadFonts from './hooks/useLoadFonts'
import Routes from './Routes'
import theme from './styles/theme'

export default function Native() {
  const [isFontsLoaded] = useLoadFonts()

  if (!isFontsLoaded) return <Text>폰트 로딩중</Text>

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Routes />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  )
}
