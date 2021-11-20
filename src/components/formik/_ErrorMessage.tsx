import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {FormikErrors, FormikTouched} from 'formik'

import {Text} from '@components/index'

interface IPFormikErrorMessage extends IProps {
  text: string | FormikErrors<any> | FormikErrors<any>[] | string[] | undefined
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

const FormikErrorMessage: React.FunctionComponent<IPFormikErrorMessage> = props => {
  const {visible, text, style} = props

  const styles = StyleSheet.create({
    errorText: {
      color: 'red',
      marginLeft: 1,
      marginTop: -4,
      marginBottom: 12,
      ...style,
      
    },
  })

  if (!visible || !text) return null
  else return <Text style={styles.errorText}>{text}</Text>
}

export default FormikErrorMessage
