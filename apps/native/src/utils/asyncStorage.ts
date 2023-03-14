import AsyncStorage from '@react-native-async-storage/async-storage'

import { Auth } from '../redux/types'

export const setAuthInfo = async (value: Auth) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

export const getAuthInfo = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? (JSON.parse(jsonValue) as Auth) : null
  } catch (e) {
    return null
  }
}
