import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { type ExternalLink } from './bridge'

import { STACK_NAVIGATION, BOTTOM_TAB_NAVIGATION } from 'src/constants'

export type RootStackParamList = {
  [STACK_NAVIGATION.EXTERNAL_LINK]: ExternalLink
  [STACK_NAVIGATION.BOTTOM_TAB_NAVIGATOR]: undefined
}

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>

export type RootBottomTabParamList = {
  [BOTTOM_TAB_NAVIGATION.HOME]: undefined
  [BOTTOM_TAB_NAVIGATION.SCRAP]: undefined
  [BOTTOM_TAB_NAVIGATION.MY_PAGE]: undefined
}

export type BottomTabScreenProps<T extends keyof RootBottomTabParamList> =
  NativeStackScreenProps<RootBottomTabParamList, T>
