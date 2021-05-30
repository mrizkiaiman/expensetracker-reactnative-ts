import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFormikContext} from 'formik'
//Components
import Input from '@components/TextInput'
import ErrorMessage from './ErrorMessage'

export default ({name, errorMessageCustomStyles, ...otherProps}: any) => {
  const {
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <Input
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
      />
      <ErrorMessage
        visible={touched[name]}
        text={errors[name]}
        customStyles={errorMessageCustomStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
