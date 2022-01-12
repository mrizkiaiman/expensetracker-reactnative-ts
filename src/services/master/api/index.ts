import config from '@app/config.json'
import { GET } from '@app/services/_utils/http'
import { IRESTApiResponse } from '@app/constants/types/_common'
import { IExperienceRow, ITransactionTypeRow, IAccountTypeRow, ICategoryRow, IMeasurementRow } from '@type/master/index'

export const getMasterExperience = (): Promise<IRESTApiResponse<IExperienceRow[]>> => {
  return GET(`${config.baseURL}/master/experience`)
}

export const getMasterMeasurements = (): Promise<IRESTApiResponse<IMeasurementRow[]>> => {
  return GET(`${config.baseURL}/master/measurements`)
}

export const getMasterTransactionType = (): Promise<IRESTApiResponse<ITransactionTypeRow[]>> => {
  return GET(`${config.baseURL}/master/transaction-type`)
}

export const getMasterCategories = (): Promise<IRESTApiResponse<ICategoryRow[]>> => {
  return GET(`${config.baseURL}/master/categories`)
}

export const getMasterAccountType = (): Promise<IRESTApiResponse<IAccountTypeRow[]>> => {
  return GET(`${config.baseURL}/master/account-type`)
}
