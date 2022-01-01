export interface ITransactionRow {
  _id: string
  user?: string
  budget?: string
  category: {
    name: string
    img: string
  }
  account?: string
  measurement?: string
  experience?: string
  amount: number
  description?: string
  type?: {
    img: string
    _id: string
    name: string
  }
  dt_created: string
  dt_updated: string
}

export interface ITransactionForm {
  user: string
  category?: string
  categoryForDisplay?: string
  type?: string
  account: string
  accountForDisplay?: string
  measurement?: string
  experience?: string
  amount: number
  description: string
}
