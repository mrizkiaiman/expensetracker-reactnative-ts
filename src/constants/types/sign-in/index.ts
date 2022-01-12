export interface ISignInForm {
  email: string
  password: string
}
export interface ISignUpForm {
  email: string
  password: string
  name: string
}
export interface ISignInResponse {
  token: string
  user: User
}

export interface ISignUpResponse {
  token: string
  userId: string
  email: string
  name: string
}

export interface User {
  id: string
  name: string
  email: string
}
