import React from 'react'

import { useFormikContext } from 'formik'
import { IProps } from '@app/constants/types/_common'
import { IPButton } from '@components/_Button'

import { Button } from '@components/index'

const FormikButton: React.FunctionComponent<IPButton> = props => {
  const { handleSubmit, isValid } = useFormikContext()

  return <Button {...props} onPress={handleSubmit} />
}

export default FormikButton
