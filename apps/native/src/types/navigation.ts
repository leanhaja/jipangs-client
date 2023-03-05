import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { type ExternalLink } from './bridge'

import { ROUTE_NAMES } from 'src/constants'

export type RootStackParamList = {
  [ROUTE_NAMES.EXTERNAL_LINK]: ExternalLink
  [ROUTE_NAMES.HOME]: undefined
}

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>
