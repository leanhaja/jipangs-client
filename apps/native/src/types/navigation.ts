import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { type ExternalLink } from './bridge'

import { ROUTE_NAMES } from 'src/constants'

export type RootStackParamList = {
  [ROUTE_NAMES.EXTERNAL_LINK]: ExternalLink
  [ROUTE_NAMES.MAIN]: undefined
  [ROUTE_NAMES.LOGIN]: undefined
  [ROUTE_NAMES.REGISTER]: undefined
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

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>
