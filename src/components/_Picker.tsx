import React, {useState} from 'react'
import {Platform, StyleSheet, View} from 'react-native'

import {COLORS} from '@styles/vars'
import {IProps} from '@app/constants/types/_common'

import RNPickerSelect from 'react-native-picker-select'
import Text from '@components/_Text'

type item = {
  value: string
  label: string
}

interface IPPicker extends IProps {
  label?: string
  value?: string
  placeholder?: string
  disabled?: boolean
  isRequired?: boolean
  errorText?: string
  items: item[]
  onChangeText: (item: string) => void
}

const Picker = (props: IPPicker) => {
  const {onChangeText, items, label, value, errorText, disabled, isRequired, placeholder} = props

  const [display, setDisplay] = useState<boolean>(false)

  const handleChange = (val: string) => {
    onChangeText(val || '')
  }

  const dynamicStyle = {
    ...(display && Platform.OS === 'ios' && styles.focused),
    ...(!!errorText && styles.error),
    ...(value && styles.onValue),
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
        {isRequired && (
          <Text style={{color: 'red', fontSize: 11}}>
            *
          </Text>
        )}
      </Text>
      <RNPickerSelect
        itemKey={'0'}
        value={value}
        placeholder={{label: placeholder}}
        disabled={disabled}
        items={items}
        useNativeAndroidPickerStyle={false}
        style={{
          inputIOS: {
            ...styles.defaultInputIOS,
            ...dynamicStyle,
          },
          inputAndroid: {
            ...styles.defaultInputAndroid,
            ...dynamicStyle,
          },
          placeholder: styles.placeholder,
        }}
        onValueChange={handleChange}
        onOpen={() => setDisplay(true)}
        onClose={() => setDisplay(false)}
      />
      <View style={styles.wrapRightIcon}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    color: COLORS.placeholder
  },
  placeholder: {
    color: COLORS.placeholder,
    fontSize: 14,
    fontFamily: 'Prompt_600SemiBold',
  },
  onValue: {
    fontStyle: 'normal',
    fontWeight: '600',
  },
  focused: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  error: {
    color: COLORS.error,
    borderBottomColor: COLORS.error,
    borderBottomWidth: 2,
  },
  errorText: {
    color: COLORS.error,
    paddingHorizontal: 4,
    paddingTop: 4,
    fontSize: 11,
  },
  pickerStyle: {
    height: 214,
    color: COLORS.primary,
    overflow: 'hidden',
  },
  wrapRightIcon: {position: 'absolute', right: 0, top: 30},
  rowCenter: {flexDirection: 'row', alignItems: 'center'},
  defaultInputIOS: {
    height: 40,
    paddingHorizontal: 0,
    borderRadius: 4,
    paddingRight: 30,
    color: COLORS.primary,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    width: '100%',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  defaultInputAndroid: {
    height: 40,
    color: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 0,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    width: '100%',
    fontSize: 14,
    fontStyle: 'italic',
    justifyContent: 'center',
  },

})


export default Picker
