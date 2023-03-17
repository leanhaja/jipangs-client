import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { type ExternalLink } from './bridge'

import { ROUTE_NAMES } from 'src/constants'

export type RootStackParamList = {
  [ROUTE_NAMES.EXTERNAL_LINK]: ExternalLink
  [ROUTE_NAMES.MAIN]: undefined
  [ROUTE_NAMES.LOGIN]: undefined
  [ROUTE_NAMES.REGISTER]: undefined
  [ROUTE_NAMES.LOGIN_WEBVIEW]: undefined
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

export type MypageStackParamList = {
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

export type MypageStackProps<T extends keyof MypageStackParamList> =
  NativeStackScreenProps<MypageStackParamList, T>
