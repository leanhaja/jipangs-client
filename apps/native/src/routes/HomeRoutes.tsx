import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/home'
import { HomeTabParamList } from '../types'

const TAB = createBottomTabNavigator<HomeTabParamList>()

export default function HomeTabRoutes() {
  return (
    <TAB.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <TAB.Screen component={Home} name="Home" />
      {/* <TAB.Screen component={} name="Scrap" />
      <TAB.Screen component={} name="Mypage" /> */}
    </TAB.Navigator>
  )
}
