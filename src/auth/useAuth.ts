import {useContext} from 'react'
import jwtDecode from 'jwt-decode'
import AuthContext from './context'
import authStorage from './storage'

const useAuth = () => {
  const {user, setUser} = useContext(AuthContext)

  const logIn = (authToken: string) => {
    return new Promise(async res => {
      // const users = jwtDecode(authToken)
      await authStorage.storeToken(authToken)
      return new Promise(res => {
        setUser(authToken)
      })
    })
  }

  const logOut = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return {user, logIn, logOut}
}

export default useAuth
