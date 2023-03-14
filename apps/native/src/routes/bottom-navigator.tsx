import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'

import BottomNavigation from '../components/bottom-navigation'
import { BUTTONS } from '../constants'
import Home from '../screens/home'
import Scrap from '../screens/scarp'
import type { RootBottomTabParamList } from '../types'

const BOTTOM_TAB = createBottomTabNavigator<RootBottomTabParamList>()

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
        <BottomNavigation buttons={BUTTONS} {...bottomTabBarProps} />
      )}
      initialRouteName="스크랩"
    >
      <BOTTOM_TAB.Screen
        component={Home}
        name="홈"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        component={Scrap}
        name="스크랩"
        options={{ headerShown: false }}
      />
      <BOTTOM_TAB.Screen
        component={MyPage}
        name="마이페이지"
        options={{ headerShown: false }}
      />
    </BOTTOM_TAB.Navigator>
  )
}

export default BottomNavigator
