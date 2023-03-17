import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginInfo from '../screens/login-info'
import Myinfo from '../screens/myinfo'

import { SettingStackParamList } from 'src/types'

const STACK = createNativeStackNavigator<SettingStackParamList>()

export default function SettingRoutes() {
  return (
    <STACK.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <STACK.Screen component={Myinfo} name="MyInfo" />
      <STACK.Screen component={LoginInfo} name="LoginInfo" />
      {/* <STACK.Screen name="AlarmSetting" />
      <STACK.Screen name="Announcement" />
      <STACK.Screen name="InfoAgreementSetting" />
      <STACK.Screen name="Inquiry" />
      <STACK.Screen name="PrivacyPolicy" />
      <STACK.Screen name="TermOfUse" /> */}
    </STACK.Navigator>
  )
}
