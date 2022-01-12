export interface IAccountForm {
  name: string
  amount?: string
  accountType: string
}

export interface IAccountResponse {
  _id?: string
  name: string
  amount?: string
  type: {
    name: string
    img: string
  }
}
