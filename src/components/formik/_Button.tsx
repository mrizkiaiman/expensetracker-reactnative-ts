import React from 'react'
import {useFormikContext} from 'formik'
import {IProps} from '@app/constants/types/_common'

import {Button} from '@components/index'

interface IPFormikButton extends IProps {
  title: string
}

const FormikButton: React.FunctionComponent<IPFormikButton> = props => {
  const {title, style} = props

  const {handleSubmit} = useFormikContext()
  return <Button onPress={handleSubmit} title={title} />
}

export default FormikButton
