import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS} from '@styles/vars'

import Text from '@app/components/_Text'

export interface IPButton extends IProps {
  title: string
  onPress?: () => void
  disabled?: boolean
  leftIcon?: JSX.Element | false | undefined
  rightIcon?: JSX.Element | false | undefined
}

const CustomButton: React.FunctionComponent<IPButton> = props => {
  const {title, onPress, disabled, style, rightIcon, leftIcon} = props

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.mainContainer, style, disabled && {backgroundColor: COLORS.disabled}]}
      onPress={onPress}>
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      <Text type="bold" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  leftIconContainer: {
    marginRight: 8,
  },
})
