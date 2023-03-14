import { ThemeProvider } from '@emotion/react'
import { NavigationContainer } from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'
import { Text } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import useLoadFonts from './hooks/useLoadFonts'
import { queryClient } from './react-query/query-client'
import StackNavigator from './routes/stack-navigator'
import theme from './styles/theme'

export default function Native() {
  const [isFontsLoaded] = useLoadFonts()

  if (!isFontsLoaded) return <Text>폰트 로딩중</Text>

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <StackNavigator />
            </SafeAreaView>
          </SafeAreaProvider>
        </ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
