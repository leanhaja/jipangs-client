import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useAppSelector } from '../redux/hooks'
import ExternalLink from '../screens/external-link'
import Login from '../screens/login'
import LoginWebView from '../screens/login/WebView'
import { RootStackParamList } from '../types'

import Main from './MainRoutes'
import Register from './RegisterRoutes'
import Setting from './SettingRoutes'

const STACK = createNativeStackNavigator<RootStackParamList>()

function Routes() {
  const { hasInfo, token } = useAppSelector((state) => state.auth)

  const screenWhenUserLoggedIn = hasInfo ? (
    <>
      <STACK.Screen
        component={Main}
        name="Main"
        options={{ headerTitleAlign: 'center' }}
      />
      <STACK.Screen component={Setting} name="Setting" />
      <STACK.Screen component={ExternalLink} name="ExternalLink" />
    </>
  ) : (
    <STACK.Screen component={Register} name="Register" />
  )

  return (
    <STACK.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#ffffff' },
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      {token ? (
        screenWhenUserLoggedIn
      ) : (
        <>
          <STACK.Screen component={LoginWebView} name="LoginWebView" />
          <STACK.Screen component={Login} name="Login" />
        </>
      )}
    </STACK.Navigator>
  )
}

export default Routes
