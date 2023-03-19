import AsyncStorage from '@react-native-async-storage/async-storage'

import { Auth } from '../redux/types'

export const setAuthInfo = async (value: Auth) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw new Error('토큰을 async-storage에 저장하던 중 에러가 발생했습니다.', {
      cause: e,
    })
  }
}

export const getAuthInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? (JSON.parse(jsonValue) as Auth) : null
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
    throw new Error(
      '토큰을 async-storage에서 불러오던 중 에러가 발생했습니다.',
      {
        cause: e,
      }
    )
  }
}
