import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

import { storeToken, removeToken, getToken } from '@utils/auth'

export const useAuth = () => {
  const logIn = (authToken: string) => {
    const decodedToken = jwtDecode(authToken)
    storeToken(authToken)
  }

  const logOut = () => {
    removeToken()
  }

  return { logIn, logOut }
}
