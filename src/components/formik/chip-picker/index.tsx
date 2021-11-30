import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useFormikContext} from 'formik'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import {Chip} from './_Chip'
import Text from '@components/_Text'
import ErrorMessage from '@app/components/Formik/_ErrorMessage'

type item = {
  value: string
  label: string
}

interface IPChipPicker extends IProps {
  name: string
  label?: string
  isRequired?: boolean
  value?: string
  errorText?: string
  items: item[]
}

const ChipPicker: React.FunctionComponent<IPChipPicker> = props => {
  const {label, isRequired, value, errorText, items, style, name} = props
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()
  const [selectedChip, setSelectedChip] = useState('')

  const handleChange = (value: string) => {
    setFieldValue(name, value)
    setSelectedChip(value)
  }

  return (
    <View style={styles.root}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text> *</Text>}
        </Text>
      )}
      <View style={styles.mainContainer}>
        {items.map((item, _) => {
          return (
            <Chip
              key={item?.label}
              item={item}
              isSelected={Boolean(item?.value === selectedChip)}
              onPress={() => handleChange(item?.value)}
            />
          )
        })}
      </View>
      <ErrorMessage visible={touched[name]} text={errors[name]} />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 12,

    color: COLORS.gray,
  },
})

export default ChipPicker
