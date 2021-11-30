import React from 'react'
import {Formik} from 'formik'
import { IProps } from '@app/constants/types/_common'

interface IPFormFormik extends IProps {
  initialValues: any
  onSubmit: any
  validationSchema?: any
}

export default ({initialValues, onSubmit, validationSchema, children}: IPFormFormik) => {
  return (
    <Formik validateOnMount initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  )
}
