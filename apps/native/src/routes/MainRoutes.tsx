import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BottomNavigation from '../components/bottom-navigation'
import { ROUTE_NAMES } from '../constants'
import Home from '../screens/home'
import Mypage from '../screens/mypage'
import Scrap from '../screens/scarp'
import type { MainTabParamList } from '../types'

const BOTTOM_TAB = createBottomTabNavigator<MainTabParamList>()

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
        initialParams={{ isNewUser: false }}
        name="Home"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        component={Scrap}
        name="Scrap"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'left',
          // headerTitleContainerStyle: { paddingStart: 27 },
          headerTitleStyle: {
            alignSelf: 'flex-start',
            color: '#424242',
            fontFamily: 'Pretendard-Medium',
            fontSize: 24,
            fontWeight: '600',
          },
          title: '마이페이지',
        }}
        component={Mypage}
        name="Mypage"
      />
    </BOTTOM_TAB.Navigator>
  )
}

export default BottomNavigator
