import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {useFormikContext} from 'formik'
import {IPTextInput} from '@components/_TextInput'

import {TextInput} from '@app/components'
import ErrorMessage from '@app/components/Formik/_ErrorMessage'

export interface IPFormikInput extends IPTextInput {
  name: string
}

export default ({name, ...props}: IPFormikInput) => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <TextInput {...props} onChangeText={value => setFieldValue(name, value)} value={values[name]} />
      <ErrorMessage visible={touched[name]} text={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
