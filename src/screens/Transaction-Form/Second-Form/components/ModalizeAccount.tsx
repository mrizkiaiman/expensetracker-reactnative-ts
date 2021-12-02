import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import {useFormikContext} from 'formik'

import {Text} from '@components/index'

interface IPModalizeAccount extends IProps {
  onOpen?: () => void
  onClose?: () => void
  name: string
}

export const ModalizeAccount: React.FunctionComponent<IPModalizeAccount> = (props) => {
  const {setFieldValue, values, errors, touched, handleSubmit} = useFormikContext<any>()

  return (
    <View style={styles.mainContainer}>
      <Text>ModalizeAccount</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 18
  }
})