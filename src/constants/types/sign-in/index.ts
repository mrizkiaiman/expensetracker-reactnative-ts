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

export interface User {
  id: string
  name: string
  email: string
}
