import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/types'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import {Chip} from './_Chip'
import {Text} from '@components/index'

type item = {
  value: string
  label: string
}

interface IPChipPicker extends IProps {
  type?: 'default'
  label?: string
  isRequired?: boolean
  value?: string
  errorText?: string
  items: item[]
  onChange: (item: string) => void
}

const ChipPicker: React.FunctionComponent<IPChipPicker> = props => {
  const {type, label, isRequired, value, errorText, items, onChange} = props
  return (
    <View>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text> *</Text>}
        </Text>
      )}
      <View style={styles.mainContainer}>
        {items.map((item, _) => (
          <Chip key={item?.label} item={item} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: RAW_COLORS.gray,
  },
})

export default ChipPicker
