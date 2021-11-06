import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import Text from '@components/_Text'

interface IPChip extends IProps {
  onPress?: () => void
  item: {
    value: string
    label: string
  }
  isSelected: boolean
}

export const Chip: React.FunctionComponent<IPChip> = props => {
  const {onPress, item, style, isSelected} = props
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        style,
        {backgroundColor: isSelected ? COLORS.primary : 'white', borderWidth: isSelected ? 0 : 1},
      ]}>
      <Text type="semibold" style={[styles.text, {color: isSelected ? 'white' : 'black'}]}>
        {item?.label ?? ''}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderColor: COLORS.line,
  },
  text: {
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
})
