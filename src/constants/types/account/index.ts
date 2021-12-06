export interface IAccountForm {
  name: string
  amount?: string
  accountType: string
}

export interface IAccountRow {
  name: string
  amount?: string
  type: {
    name: string
    img: string
  }
}
