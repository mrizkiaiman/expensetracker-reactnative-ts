import React, { createContext } from 'react'

export interface IUserInformation {
  userId: string
  name: string
  email: string
}

export type UserInformationContextType = {
  state: IUserInformation
  updateContext: (state: IUserInformation) => void
}

export const UserInformationContext = createContext<UserInformationContextType>({
  state: { name: '', email: '', userId: '' },
  updateContext: (state: IUserInformation) => undefined,
})
