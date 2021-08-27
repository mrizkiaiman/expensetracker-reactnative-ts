import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFormikContext} from 'formik'
//Components
import {Input} from '@app/components'
import ErrorMessage from '@components/formik/_ErrorMessage'

export default ({name, errorMessageCustomStyles, ...otherProps}: any) => {
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <Input {...otherProps} onChangeText={text => setFieldValue(name, text)} value={values[name]} />
      <ErrorMessage visible={touched[name]} text={errors[name]} style={errorMessageCustomStyles} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
