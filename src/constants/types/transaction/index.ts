export interface ITransactionRow {
  user?: string
  budget?: string
  category?: {
    name: string
    img: string
  }
  account?: string
  measurement?: string
  experience?: string
  amount: number
  description?: string
  transactionType?: string
  dt_created: string
  dt_updated: string
}
