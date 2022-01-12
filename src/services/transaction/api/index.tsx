import config from '@app/config.json'
import { GET, POST, PATCH, DELETE } from '@app/services/_utils/http'
import { IRESTApiResponse } from '@app/constants/types/_common'
import { ITransactionResponse, ITransactionForm } from '@type/transaction/index'

export const createTransaction = (body: ITransactionForm): Promise<IRESTApiResponse<ITransactionResponse>> => {
  return POST(`${config.baseURL}/transaction`, body)
}

export const editTransaction = (body: ITransactionForm): Promise<IRESTApiResponse<ITransactionResponse>> => {
  return PATCH(`${config.baseURL}/transaction`, body)
}

export const deleteTransaction = (id: string): Promise<IRESTApiResponse<ITransactionResponse>> => {
  return DELETE(`${config.baseURL}/transaction/${id}`)
}

export const getTransactionDetail = (id: string): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction/${id}`)
}

export const getTransactions = (): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction`)
}

export const getTransactionsBasedOnMeasurement = (
  measurement: string,
): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction`, { measurement })
}

export const getTransactionsBasedOnAccount = (account: string): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction`, { account })
}

export const getTransactionsBasedOnType = (type: string): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction`, { type })
}

export const getTransactionsBasedOnExperience = (
  experience: string,
): Promise<IRESTApiResponse<ITransactionResponse[]>> => {
  return GET(`${config.baseURL}/transaction`, { experience })
}
