import config from '@app/config.json'
import axios, {AxiosResponse} from 'axios'
import {IRESTApiResponse} from '@app/constants/types/_common'

import {GET} from '@app/services/_utils/http'

export const getTransactions = (): Promise<IRESTApiResponse<any>> => {
  return GET(`${config.baseURL}/transaction`)
}
