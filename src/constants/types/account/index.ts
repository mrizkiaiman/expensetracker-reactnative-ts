export interface IAccountForm {
  name: string
  amount?: string
  accountType: string
}

export interface IAccountResponse {
  _id?: string
  name: string
  amount?: number
  type: {
    name: string
    img: string
  }
}
