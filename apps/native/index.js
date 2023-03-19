import { ThemeProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { registerRootComponent } from 'expo'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { queryClient } from './src/react-query/query-client'
import { store } from './src/redux/store'
import theme from './src/styles/theme'

import App from './src/App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

if (__DEV__)
  import('./ReactotronConfig.js').then(() =>
    console.log('Reactotron Configured')
  )

const JipangsApp = () => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <App />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  </QueryClientProvider>
)

registerRootComponent(JipangsApp)
