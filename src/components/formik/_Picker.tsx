import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

import {useFormikContext} from 'formik'
import {IPTextInput} from '@components/_TextInput'

import Picker from '@app/components/_Picker'
import ErrorMessage from '@app/components/Formik/_ErrorMessage'

export interface IPFormikInput extends IPTextInput {
  name: string
  items: {
    value: string
    label: string
  }[]
}

export default ({name, items, ...props}: IPFormikInput) => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <Picker {...props} items={items} onChangeText={value => setFieldValue(name, value)} value={values[name]} />
      <ErrorMessage visible={touched[name]} text={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
