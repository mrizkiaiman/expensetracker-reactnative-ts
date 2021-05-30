import React from 'react'
import {useFormikContext} from 'formik'
//Components
import Button from '../Button'

export default ({styling, title}: any) => {
  const {handleSubmit} = useFormikContext()
  return <Button onPress={handleSubmit} title={title} />
}
