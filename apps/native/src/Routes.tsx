import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ExternalLink from './screens/external-link'
import Home from './screens/home'
import { RootStackParamList } from './types'

const STACK = createNativeStackNavigator<RootStackParamList>()

function Routes() {
  return (
    <STACK.Navigator>
      <STACK.Screen
        component={Home}
        name="Home"
        options={{ headerShown: false, headerTitleAlign: 'center' }}
      />
      <STACK.Screen
        component={ExternalLink}
        name="ExternalLink"
        options={{ headerShown: false }}
      />
    </STACK.Navigator>
  )
}

export default Routes
