import axios, {AxiosError} from 'axios'
import {IRESTApiResponse} from '@domain/services/types'
import {IError} from '@domain/states/types'

export enum Severity {
  WTF = 'WTF',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  SUCCESS = 'success',
}

const createErrorInterface = (axr: AxiosError<IRESTApiResponse> | null, details: any = null): IError => {
  return {
    code: `${axr?.response?.data?.code || axr?.code || 500}`,
    severity: `${axr?.response?.data?.severity || Severity.WTF}` as Severity,
    message: `${axr?.response?.data?.message || axr?.message || 'Server error'}`,
    description: `${axr?.response?.data.errorMessage || axr?.response?.data?.status}`,
    details: details,
    response: axr?.response,
  }
}

const Axios = axios.create({
  timeout: 1000 * 30,
})

Axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(createErrorInterface(error))
  },
)

export default Axios
