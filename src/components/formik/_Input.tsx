import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFormikContext} from 'formik'
//Components
import {Input} from '@app/components'
import ErrorMessage from '@app/components/Formik/_ErrorMessage'

export interface IPFormikInput {
  name: string
  label?: string
  placeholder?: string
  isNumber?: boolean
  autoCapitalize?: string
  withSubmitButton?: boolean
}

export default ({name, ...otherProps}: IPFormikInput) => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <Input {...otherProps} onChangeText={value => setFieldValue(name, value)} value={values[name]} />
      <ErrorMessage visible={touched[name]} text={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
