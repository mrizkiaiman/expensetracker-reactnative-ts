import config from '@app/config.json'
import { GET, POST, PATCH, DELETE } from '@app/services/_utils/http'
import { IRESTApiResponse } from '@app/constants/types/_common'
import { IAccountResponse, IAccountForm } from '@type/account/index'

export const createAccount = (body: IAccountForm): Promise<IRESTApiResponse<IAccountResponse>> => {
  return POST(`${config.baseURL}/account`, body)
}

export const editAccount = (body: IAccountForm): Promise<IRESTApiResponse<IAccountResponse>> => {
  return PATCH(`${config.baseURL}/account`, body)
}

export const deleteAccount = (id: string): Promise<IRESTApiResponse<IAccountResponse>> => {
  return DELETE(`${config.baseURL}/account/${id}`)
}

export const getAccounts = (id: string): Promise<IRESTApiResponse<IAccountResponse[]>> => {
  return GET(`${config.baseURL}/account/${id}`)
}

export const getAccountDetail = (): Promise<IRESTApiResponse<IAccountResponse[]>> => {
  return GET(`${config.baseURL}/account`)
}
