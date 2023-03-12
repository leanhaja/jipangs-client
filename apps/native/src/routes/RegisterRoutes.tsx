import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SelectMajor from '../screens/register/SelectMajor'
import SelectRegion from '../screens/register/SelectRegion'
import UnivInfo from '../screens/register/UnivInfo'
import Userinfo from '../screens/register/UserInfo'

import { RegisterStackParamList } from 'src/types'

const STACK = createNativeStackNavigator<RegisterStackParamList>()

export default function RegisterRoutes() {
  return (
    <STACK.Navigator
      initialRouteName="SelectMajor"
      screenOptions={{ headerShown: false }}
    >
      <STACK.Screen component={SelectMajor} name="SelectMajor" />
      <STACK.Screen component={SelectRegion} name="SelectRegion" />
      <STACK.Screen component={Userinfo} name="UserInfo" />
      <STACK.Screen component={UnivInfo} name="UnivInfo" />
    </STACK.Navigator>
  )
}
