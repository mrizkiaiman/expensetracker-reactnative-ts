import React from 'react'

export type UserContextType = {
  user: string
  setUser: (arg: any) => void
}

export const AuthContext = React.createContext<UserContextType>({
  user: '',
  setUser: (arg: any) => undefined,
})

export default AuthContext
