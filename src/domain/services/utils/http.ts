import {AxiosRequestConfig, AxiosResponse} from 'axios'
import Axios from '@domain/services/utils/axios'
import {IRESTApiResponse} from '@domain/services/types'


export const GET = async <T = IRESTApiResponse>(
  url: string,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  // const idToken = await System.instance.authService.getIdToken()
  const idToken = 'testtoken'
  const defaultHeader = headers
    ? {...headers, Authorization: `Bearer ${idToken}`}
    : {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      }
  return await Axios.get(url, {
    ...(config ?? {}),
    headers: defaultHeader,
  })
}

export const POST = async <T = IRESTApiResponse>(
  url: string,
  postBody?: any,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  // const idToken = await System.instance.authService.getIdToken()
  const idToken = 'testtoken'
  const defaultHeader = headers
    ? {...headers, Authorization: `Bearer ${idToken}`}
    : {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      }
  const _newHeaders = headers as {[key: string]: any}
  const responseType = _newHeaders ? _newHeaders.responseType : null

  if (responseType) {
    return await Axios.post(url, postBody, {
      ...(config ?? {}),
      headers: defaultHeader,
      responseType: responseType,
    })
  }

  return await Axios.post(url, postBody, {
    ...(config ?? {}),
    headers: defaultHeader,
  })
}
