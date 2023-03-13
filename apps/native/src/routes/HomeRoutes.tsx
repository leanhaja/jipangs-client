import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, StyleSheet } from 'react-native'

import BookmarkIcon from '../components/icon/assets/bookmark.svg'
import HomeIcon from '../components/icon/assets/home.svg'
import UserIcon from '../components/icon/assets/user.svg'
import Home from '../screens/home'
import { COLORS } from '../styles/colors'
import { HomeTabParamList } from '../types'

const TAB = createBottomTabNavigator<HomeTabParamList>()

// TODO: 라벨 스타일 파일 분리 필요
const styles = StyleSheet.create({
  label: { fontFamily: 'Pretendard-Medium', fontSize: 10 },
})

export default function HomeTabRoutes() {
  return (
    <TAB.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon fill={focused ? COLORS.BLACK : COLORS.GREY3} />
            case 'Mypage':
              return <UserIcon fill={focused ? COLORS.BLACK : COLORS.GREY3} />
            case 'Scrap':
              return (
                <BookmarkIcon fill={focused ? COLORS.BLACK : COLORS.GREY3} />
              )
            default:
              return <HomeIcon fill={focused ? COLORS.BLACK : COLORS.GREY3} />
          }
        },
        tabBarLabel: () => {
          switch (route.name) {
            case 'Home':
              return <Text style={styles.label}>홈</Text>
            case 'Mypage':
              return <Text style={styles.label}>마이페이지</Text>
            case 'Scrap':
              return <Text style={styles.label}>스크랩</Text>
            default:
              return <Text style={styles.label}>홈</Text>
          }
        },
        tabBarLabelStyle: { fontSize: 10, marginTop: 10 },
      })}
      initialRouteName="Home"
    >
      <TAB.Screen component={Home} name="Home" />
      {
        // TODO: 스크린 컴포넌트 삽입 필요
        /* <TAB.Screen component={} name="Scrap" />
      <TAB.Screen component={} name="Mypage" /> */
      }
    </TAB.Navigator>
  )
}
