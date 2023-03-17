import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { type ExternalLink } from './bridge'

import { ROUTE_NAMES } from 'src/constants'

export type RootStackParamList = {
  [ROUTE_NAMES.EXTERNAL_LINK]: ExternalLink
  [ROUTE_NAMES.MAIN]: NavigatorScreenParams<HomeTabParamList>
  [ROUTE_NAMES.LOGIN]: undefined
  [ROUTE_NAMES.REGISTER]: undefined
  [ROUTE_NAMES.LOGIN_WEBVIEW]: undefined
  [ROUTE_NAMES.SETTING]: NavigatorScreenParams<SettingStackParamList>
}

export type RegisterStackParamList = {
  [ROUTE_NAMES.SELECT_MAJOR]: undefined
  [ROUTE_NAMES.SELECT_REGION]: undefined
  [ROUTE_NAMES.USER_INFO]: undefined
  [ROUTE_NAMES.UNIV_INFO]: undefined
}

export type HomeTabParamList = {
  [ROUTE_NAMES.HOME]: undefined
  [ROUTE_NAMES.SCRAP]: undefined
  [ROUTE_NAMES.MYPAGE]: undefined
}

export type SettingStackParamList = {
  [ROUTE_NAMES.MY_INFO]: undefined
  [ROUTE_NAMES.LOGIN_INFO]: undefined
  [ROUTE_NAMES.ALARM_SETTING]: undefined
  [ROUTE_NAMES.INFO_AGREEMENT_SETTING]: undefined
  [ROUTE_NAMES.TERM_OF_USE]: undefined
  [ROUTE_NAMES.PRIVACY_POLICY]: undefined
  [ROUTE_NAMES.INQUIRY]: undefined
  [ROUTE_NAMES.ANNOUNCEMENT]: undefined
}

export type RegisterStackProps<T extends keyof RegisterStackParamList> =
  NativeStackScreenProps<RegisterStackParamList, T>

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type SettingStackProps<T extends keyof SettingStackParamList> =
  NativeStackScreenProps<SettingStackParamList, T>

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  BottomTabScreenProps<HomeTabParamList, T>
