import {AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders} from 'axios'
import axios from 'axios'

import {IRESTApiResponse} from '@app/services/types'

export const GET = async <T = IRESTApiResponse>(
  url: string,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<IRESTApiResponse<T>> => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlYmVhN2ExZWM5YTA5NWYzNzcwYTUiLCJuYW1lIjoiU2FrYXRhIEdpbnRva2kiLCJlbWFpbCI6InJpemtpMkB0ZXN0aW5nLmNvbSIsImlhdCI6MTY0MTgxODUzNSwiZXhwIjoxNjQxOTkxMzM1fQ.MP5HyvOl2obGc1cWIuA65ycxLCs3nUwijZEq-BIakow`

  const defaultHeader = headers
    ? {...headers, token}
    : {
        token,
      }

  const {data} = await axios.get(url, {
    ...(config ?? {}),
    // @ts-ignore
    headers: defaultHeader,
  })

  return data
}

export const POST = async <T = IRESTApiResponse>(
  url: string,
  postBody?: any,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<IRESTApiResponse<T>> => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlYmVhN2ExZWM5YTA5NWYzNzcwYTUiLCJuYW1lIjoiU2FrYXRhIEdpbnRva2kiLCJlbWFpbCI6InJpemtpMkB0ZXN0aW5nLmNvbSIsImlhdCI6MTY0MTgxODUzNSwiZXhwIjoxNjQxOTkxMzM1fQ.MP5HyvOl2obGc1cWIuA65ycxLCs3nUwijZEq-BIakow`

  const defaultHeader = headers
    ? {...headers, token}
    : {
        'Content-Type': 'application/json',
        token,
      }
  const _newHeaders = headers as {[key: string]: any}
  const responseType = _newHeaders ? _newHeaders.responseType : null

  const {data} = await axios.post(url, postBody, {
    ...(config ?? {}),
    // @ts-ignore
    headers: defaultHeader,
    responseType: responseType,
  })

  return data
}

export const PATCH = async <T = IRESTApiResponse>(
  url: string,
  postBody?: any,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<IRESTApiResponse<T>> => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlYmVhN2ExZWM5YTA5NWYzNzcwYTUiLCJuYW1lIjoiU2FrYXRhIEdpbnRva2kiLCJlbWFpbCI6InJpemtpMkB0ZXN0aW5nLmNvbSIsImlhdCI6MTY0MTgxODUzNSwiZXhwIjoxNjQxOTkxMzM1fQ.MP5HyvOl2obGc1cWIuA65ycxLCs3nUwijZEq-BIakow`

  const defaultHeader = headers
    ? {...headers, token}
    : {
        'Content-Type': 'application/json',
        token,
      }
  const _newHeaders = headers as {[key: string]: any}
  const responseType = _newHeaders ? _newHeaders.responseType : null

  const {data} = await axios.patch(url, postBody, {
    ...(config ?? {}),
    // @ts-ignore
    headers: defaultHeader,
    responseType: responseType,
  })

  return data
}

export const DELETE = async <T = IRESTApiResponse>(
  url: string,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<IRESTApiResponse<T>> => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlYmVhN2ExZWM5YTA5NWYzNzcwYTUiLCJuYW1lIjoiU2FrYXRhIEdpbnRva2kiLCJlbWFpbCI6InJpemtpMkB0ZXN0aW5nLmNvbSIsImlhdCI6MTY0MTgxODUzNSwiZXhwIjoxNjQxOTkxMzM1fQ.MP5HyvOl2obGc1cWIuA65ycxLCs3nUwijZEq-BIakow`

  const defaultHeader = headers
    ? {...headers, token}
    : {
        token,
      }

  const {data} = await axios.delete(url, {
    ...(config ?? {}),
    // @ts-ignore
    headers: defaultHeader,
  })

  return data
}
