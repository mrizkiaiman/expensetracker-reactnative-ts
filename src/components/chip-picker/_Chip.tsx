import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/types'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import {Text} from '@components/index'

interface IPChip extends IProps {
  onPress?: () => void
  item?: {
    value: string
    label: string
  }
}

export const Chip: React.FunctionComponent<IPChip> = props => {
  const {onPress, item} = props
  return (
    <View style={styles.mainContainer}>
      <Text type="semibold" style={styles.text}>
        {item?.label ?? ''}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 30,
    borderRadius: 20,
    backgroundColor: RAW_COLORS.primary,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  text: {
    color: 'white',
    padding: 8,
  },
})
