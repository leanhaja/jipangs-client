import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InfoAgreement from '../screens/register/InfoAgreement'
import SelectMajor from '../screens/register/SelectMajor'
import SelectRegion from '../screens/register/SelectRegion'
import UnivInfo from '../screens/register/UnivInfo'
import Userinfo from '../screens/register/UserInfo'

import { RegisterStackParamList } from 'src/types'

const STACK = createNativeStackNavigator<RegisterStackParamList>()

export default function RegisterRoutes() {
  return (
    <STACK.Navigator
      screenOptions={{
        animation: 'none',
        contentStyle: { backgroundColor: '#ffffff' },
        headerShown: true,
      }}
      initialRouteName="InfoAgreement"
    >
      <STACK.Screen
        component={InfoAgreement}
        name="InfoAgreement"
        options={{ headerShown: false }}
      />
      <STACK.Screen
        component={SelectMajor}
        name="SelectMajor"
        options={{ title: '전공 선택' }}
      />
      <STACK.Screen
        component={SelectRegion}
        name="SelectRegion"
        options={{ title: '관심 지역' }}
      />
      <STACK.Screen
        component={Userinfo}
        name="UserInfo"
        options={{ title: '회원 정보' }}
      />
      <STACK.Screen
        component={UnivInfo}
        name="UnivInfo"
        options={{ title: '대학 정보' }}
      />
    </STACK.Navigator>
  )
}
