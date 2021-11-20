import React from 'react'
import {Formik} from 'formik'

export default ({initialValues, onSubmit, validationSchema, children}: any) => {
  return (
    <Formik validateOnMount initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  )
}
