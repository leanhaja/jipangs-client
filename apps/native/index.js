import { ThemeProvider } from '@emotion/react'
import { registerRootComponent } from 'expo'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import theme from './src/styles/theme'

import App from './src/App'

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

const JipangsApp = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <App />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  </Provider>
)

registerRootComponent(JipangsApp)
