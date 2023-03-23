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
import SearchMajorScreen from '../screens/register/\bSearchMajor'
import InfoAgreement from '../screens/register/InfoAgreement'
import SearchUniv from '../screens/register/SearchUniv'
import SelectMajor from '../screens/register/SelectMajor'
import SelectRegion from '../screens/register/SelectRegion'
import UnivInfo from '../screens/register/UnivInfo'
import Userinfo from '../screens/register/UserInfo'
import { COLORS } from '../styles/colors'
import {
  MainTabParamList,
  RegisterStackParamList,
  RootStackParamList,
} from '../types'

type RegisterScreenNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList, 'Register'>,
  BottomTabNavigationProp<MainTabParamList>
>

const STACK = createNativeStackNavigator<RegisterStackParamList>()

export default function RegisterRoutes() {
  const navigate = useNavigation<RegisterScreenNavigationProps>()

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
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '전공 선택',
        }}
        component={SelectMajor}
        name="SelectMajor"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '관심 지역',
        }}
        component={SelectRegion}
        name="SelectRegion"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '회원 정보',
        }}
        component={Userinfo}
        name="UserInfo"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '대학 정보',
        }}
        component={UnivInfo}
        name="UnivInfo"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '학교 검색',
        }}
        component={SearchUniv}
        name="SearchUniv"
      />
      <STACK.Screen
        options={{
          headerLeft: (props) => (
            <Pressable onPress={() => navigate.pop()}>
              <Icon iconName="before_arrow" {...props} stroke={COLORS.GREY4} />
            </Pressable>
          ),
          headerShown: true,
          title: '전공 검색',
        }}
        component={SearchMajorScreen}
        name="SearchMajor"
      />
    </STACK.Navigator>
  )
}
