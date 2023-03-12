import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ExternalLink from '../screens/external-link'
import Login from '../screens/login'
import { RootStackParamList } from '../types'

import Main from './HomeRoutes'
import Register from './RegisterRoutes'

const STACK = createNativeStackNavigator<RootStackParamList>()

function Routes() {
  return (
    <STACK.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <STACK.Screen component={Login} name="Login" />
      <STACK.Screen component={Register} name="Register" />
      <STACK.Screen
        component={Main}
        name="Main"
        options={{ headerTitleAlign: 'center' }}
      />
      <STACK.Screen component={ExternalLink} name="ExternalLink" />
    </STACK.Navigator>
  )
}

export default Routes
