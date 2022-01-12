import * as SecureStore from 'expo-secure-store'
import jwtDecode from 'jwt-decode'

const KEY = 'token'

export const storeToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync(KEY, token)
  } catch (error) {
    console.log('Error storing the auth token', error)
  }
}

export const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(KEY)
  } catch (error) {
    console.log('Error getting the auth token', error)
  }
}

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(KEY)
  } catch (error) {
    console.log('Error removing the auth token', error)
  }
}

export const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode(token) : null
}
