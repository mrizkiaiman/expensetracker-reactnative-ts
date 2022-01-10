import config from '@app/config.json'
import { GET, POST, PATCH, DELETE } from '@app/services/_utils/http'

import { IRESTApiResponse } from '@app/constants/types/_common'
import { ITransactionRow, ITransactionForm } from '@type/transaction/index'

export const createTransaction = (id: string): Promise<IRESTApiResponse<ITransactionRow>> => {
  return POST(`${config.baseURL}/transaction/${id}`)
}

export const editTransaction = (id: string): Promise<IRESTApiResponse<ITransactionRow>> => {
  return PATCH(`${config.baseURL}/transaction/${id}`)
}

export const deleteTransaction = (id: string): Promise<IRESTApiResponse<ITransactionRow>> => {
  return DELETE(`${config.baseURL}/transaction/${id}`)
}

export const getTransactionDetail = (id: string): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction/${id}`)
}

export const getTransactions = (): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction`)
}

export const getTransactionsBasedOnMeasurement = (
  measurement: string,
): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction`, { measurement })
}

export const getTransactionsBasedOnAccount = (account: string): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction`, { account })
}

export const getTransactionsBasedOnType = (type: string): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction`, { type })
}

export const getTransactionsBasedOnExperience = (experience: string): Promise<IRESTApiResponse<ITransactionRow[]>> => {
  return GET(`${config.baseURL}/transaction`, { experience })
}
