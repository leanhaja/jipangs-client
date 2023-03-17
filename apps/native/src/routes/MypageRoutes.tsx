import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Myinfo from '../screens/myinfo'

import { MypageStackParamList } from 'src/types'

const STACK = createNativeStackNavigator<MypageStackParamList>()

export default function MypageRoutes() {
  return (
    <STACK.Navigator>
      <STACK.Screen component={Myinfo} name="MyInfo" />
      {/* <STACK.Screen name="AlarmSetting" />
      <STACK.Screen name="Announcement" />
      <STACK.Screen name="InfoAgreementSetting" />
      <STACK.Screen name="Inquiry" />
      <STACK.Screen name="LoginInfo" />
      <STACK.Screen name="PrivacyPolicy" />
      <STACK.Screen name="TermOfUse" /> */}
    </STACK.Navigator>
  )
}
