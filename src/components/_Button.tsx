import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {IProps} from '@app/constants/types/_common'
import {COLORS} from '@styles/vars'

import Text from '@app/components/_Text'

export interface IPButton extends IProps {
  title: string
  onPress?: () => void
  disabled?: boolean
}

const CustomButton: React.FunctionComponent<IPButton> = props => {
  const {title, onPress, disabled, style} = props

  return (
    <TouchableOpacity disabled={disabled} style={[styles.mainContainer, style, disabled && {backgroundColor: COLORS.disabled}]} onPress={onPress}>
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
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
