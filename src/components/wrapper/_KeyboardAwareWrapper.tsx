import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'

import {myStyles} from '@styles/index'
import {RAW_COLORS, SPACES} from '@styles/vars'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

interface IPKeyboardAwareWrapper extends IProps {}

const KeyboardAwareWrapper: React.FunctionComponent<IPKeyboardAwareWrapper> = props => {
  const {children} = props

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={50}
      extraHeight={50}
      contentContainerStyle={{paddingBottom: SPACES.oneSpace}}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </KeyboardAwareScrollView>
  )
}

export default KeyboardAwareWrapper

const styles = StyleSheet.create({
  mainContainer: {},
})
