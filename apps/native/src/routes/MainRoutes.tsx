import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'

import BottomNavigation from '../components/bottom-navigation'
import { ROUTE_NAMES } from '../constants'
import Home from '../screens/home'
import Scrap from '../screens/scarp'
import type { MainTabParamList } from '../types'

const BOTTOM_TAB = createBottomTabNavigator<MainTabParamList>()

function MyPage() {
  return (
    <View>
      <Text>마이페이지</Text>
    </View>
  )
}

function BottomNavigator() {
  return (
    <BOTTOM_TAB.Navigator
      tabBar={(bottomTabBarProps) => (
        <BottomNavigation
          buttons={[
            {
              iconName: 'home' as const,
              route: ROUTE_NAMES.HOME,
            },
            {
              iconName: 'bookmark_navigation' as const,
              route: ROUTE_NAMES.SCRAP,
            },
            {
              iconName: 'user' as const,
              route: ROUTE_NAMES.MYPAGE,
            },
          ]}
          {...bottomTabBarProps}
        />
      )}
      initialRouteName="Home"
    >
      <BOTTOM_TAB.Screen
        component={Home}
        name="Home"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        component={Scrap}
        name="Scrap"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        component={MyPage}
        name="Mypage"
        options={{ headerShown: false }}
      />
    </BOTTOM_TAB.Navigator>
  )
}

export default BottomNavigator
