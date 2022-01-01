import {AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders} from 'axios'
import axios from 'axios'

import {IRESTApiResponse} from '@app/services/types'

export const GET = async <T = IRESTApiResponse>(
  url: string,
  headers?: {[key: string]: any},
  config?: AxiosRequestConfig,
): Promise<IRESTApiResponse<T>> => {
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTJlYmVhN2ExZWM5YTA5NWYzNzcwYTUiLCJuYW1lIjoiU2FrYXRhIEdpbnRva2kiLCJlbWFpbCI6InJpemtpMkB0ZXN0aW5nLmNvbSIsImlhdCI6MTY0MTAzMTU2NCwiZXhwIjoxNjQxMjA0MzY0fQ.egLak_of6RTCfUNt1gIVm-Mm2QDG9rC7PUa3-o2rR_4`

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
