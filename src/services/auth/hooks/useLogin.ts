import React from 'react'
import { useMutation } from 'react-query'
import { storeToken } from '@app/utils/auth'

import { ISignInForm } from '@type/sign-in'
import { signIn } from '@services/auth/api/index'

export const useLogin = () => {
  const { data, mutate, isLoading } = useMutation((form: ISignInForm) => signIn(form), {
    onSuccess: (data, variables, context) => {
      console.log({ data })
      console.log({ variables })
      console.log({ context })
    },
  })

  return { data, mutate, isLoading }
}
