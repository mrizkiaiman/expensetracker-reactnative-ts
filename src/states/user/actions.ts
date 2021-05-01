import {createAsyncAction, action, createAction} from 'typesafe-actions'
import * as authConstant from '../user/constants'

export const signInWithEmailPassword = createAsyncAction(
  authConstant.SIGN_IN_WITH_EMAIL_PASSWORD_REQUEST,
  authConstant.SIGN_IN_WITH_EMAIL_PASSWORD_SUCCESS,
  authConstant.SIGN_IN_WITH_EMAIL_PASSWORD_FAILURE,
)()
