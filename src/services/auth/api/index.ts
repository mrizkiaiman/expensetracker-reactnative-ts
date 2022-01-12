import config from '@app/config.json'
import { GET, POST } from '@app/services/_utils/http'
import { IRESTApiResponse } from '@app/constants/types/_common'
import { ISignInForm, ISignUpForm, ISignInResponse } from '@type/sign-in/index'

export const signIn = (body: ISignInForm): Promise<IRESTApiResponse<ISignInResponse>> => {
  return POST(`${config.baseURL}/auth/login`, body)
}
