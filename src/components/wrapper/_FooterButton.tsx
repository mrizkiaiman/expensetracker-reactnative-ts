import React from 'react'
import {StyleSheet, View, StyleProp, ViewStyle} from 'react-native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {COLORS} from '@styles/vars'
import {IProps} from '@app/constants/types/_common'

interface IPFooterButton extends IProps {}

const WrapFooterButton: React.FC<IPFooterButton> = props => {
  const insets = useSafeAreaInsets()
  return <View style={[styles.wrapButton, {paddingBottom: insets.bottom || 8}, props.style]}>{props.children}</View>
}

export default WrapFooterButton

const styles = StyleSheet.create({
  wrapButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    paddingTop: 9,
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.line,
    borderTopWidth: 0.4,
    alignSelf: 'flex-end',
  },
})
