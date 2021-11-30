import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/constants/types/_common'

import {myStyles} from '@styles/index'
import {COLORS, SPACES} from '@styles/vars'

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

interface IPKeyboardAwareWrapper extends IProps {
  extraScrollHeight?: number
  extraHeight?: number
}

const KeyboardAwareWrapper: React.FunctionComponent<IPKeyboardAwareWrapper> = props => {
  const {children, extraScrollHeight, extraHeight} = props

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={extraScrollHeight ? extraScrollHeight : 50}
      extraHeight={extraHeight ? extraHeight : 50}
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
