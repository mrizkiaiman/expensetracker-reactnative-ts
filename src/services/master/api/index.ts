import config from '@app/config.json'
import { GET } from '@app/services/_utils/http'
import { IRESTApiResponse } from '@app/constants/types/_common'
import {
  IExperienceResponse,
  ITransactionTypeResponse,
  IAccountTypeResponse,
  ICategoryResponse,
  IMeasurementResponse,
} from '@type/master/index'

export const getMasterExperience = (): Promise<IRESTApiResponse<IExperienceResponse[]>> => {
  return GET(`${config.baseURL}/master/experience`)
}

export const getMasterMeasurements = (): Promise<IRESTApiResponse<IMeasurementResponse[]>> => {
  return GET(`${config.baseURL}/master/measurements`)
}

export const getMasterTransactionType = (): Promise<IRESTApiResponse<ITransactionTypeResponse[]>> => {
  return GET(`${config.baseURL}/master/transaction-type`)
}

export const getMasterCategories = (): Promise<IRESTApiResponse<ICategoryResponse[]>> => {
  return GET(`${config.baseURL}/master/categories`)
}

export const getMasterAccountType = (): Promise<IRESTApiResponse<IAccountTypeResponse[]>> => {
  return GET(`${config.baseURL}/master/account-type`)
}
