import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import Routes from './Routes'

export default function Native() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <Routes />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
