import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Pressable } from 'react-native'

import Icon from '../components/icon'
import LoginInfo from '../screens/login-info'
import Myinfo from '../screens/myinfo'
import SetAgreementScreen from '../screens/set-agreement'
import { COLORS } from '../styles/colors'

import {
  MainTabParamList,
  RootStackParamList,
  SettingStackParamList,
} from 'src/types'

type SettingScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Setting'>,
  BottomTabNavigationProp<MainTabParamList>
>

const STACK = createNativeStackNavigator<SettingStackParamList>()

export default function SettingRoutes() {
  const navigate = useNavigation<SettingScreenNavigationProp>()

  return (
    <STACK.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable
              onPress={() => navigate.replace('Main', { screen: 'Mypage' })}
            >
              <Icon
                iconName="before_arrow"
                {...props}
                stroke={COLORS.BACK_BUTTON}
              />
            </Pressable>
          ),

          title: '내 정보',
        }}
        component={Myinfo}
        name="MyInfo"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable
              onPress={() => navigate.replace('Main', { screen: 'Mypage' })}
            >
              <Icon
                iconName="before_arrow"
                {...props}
                stroke={COLORS.BACK_BUTTON}
              />
            </Pressable>
          ),
          title: '로그인 정보',
        }}
        component={LoginInfo}
        name="LoginInfo"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable
              onPress={() => navigate.replace('Main', { screen: 'Mypage' })}
            >
              <Icon
                iconName="before_arrow"
                {...props}
                stroke={COLORS.BACK_BUTTON}
              />
            </Pressable>
          ),
          title: '정보 동의 설정',
        }}
        component={SetAgreementScreen}
        name="InfoAgreementSetting"
      />
      {/* <STACK.Screen name="AlarmSetting" />
      <STACK.Screen name="Announcement" />
      <STACK.Screen name="Inquiry" />
      <STACK.Screen name="PrivacyPolicy" />
      <STACK.Screen name="TermOfUse" /> */}
    </STACK.Navigator>
  )
}
