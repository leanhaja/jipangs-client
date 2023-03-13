import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ExternalLink from '../screens/external-link'
import Login from '../screens/login'
import LoginWebView from '../screens/login/WebView'
import { RootStackParamList } from '../types'

import Main from './HomeRoutes'
import Register from './RegisterRoutes'

const STACK = createNativeStackNavigator<RootStackParamList>()

function Routes() {
  return (
    <STACK.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#ffffff' },
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <STACK.Screen component={Login} name="Login" />
      <STACK.Screen component={Register} name="Register" />
      <STACK.Screen
        component={Main}
        name="Main"
        options={{ headerTitleAlign: 'center' }}
      />
      <STACK.Screen component={ExternalLink} name="ExternalLink" />
      <STACK.Screen component={LoginWebView} name="LoginWebView" />
    </STACK.Navigator>
  )
}

export default Routes
