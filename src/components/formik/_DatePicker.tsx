import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {IProps} from '@app/types'

import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import TouchableInput from '../_TouchableInput'

export interface IPDatePicker extends IProps {
  label: string
  placeholder: string
  value?: string
  errorText?: string
  isRequired?: boolean
  onChangeText: (value: string) => void
  setDateValue: any
}

const DatePicker: React.FC<IPDatePicker> = props => {
  const todaysDate = new Date()
  const [date, setDate] = useState<Date>(todaysDate)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  return (
    <View testID="datepicker-root">
      <TouchableInput
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        errorText={props.errorText}
        isRequired={props.isRequired}
        onChangeText={props.onChangeText}
        onPress={() => setIsDatePickerOpen(true)}
      />
      {isDatePickerOpen && (
        <DateTimePicker
          testID="datepicker-library"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(event: Event, selectedDate: Date | undefined) => {
            const currentDate = selectedDate || date
            let stringDate = ''
            if (currentDate) {
              stringDate = JSON.stringify(currentDate).slice(1, 11)
            } else {
              stringDate = JSON.stringify(todaysDate).slice(1, 11)
            }
            setIsDatePickerOpen(false)
            setDate(currentDate)
            props.onChangeText(stringDate)
            props.setDateValue('dueDate', stringDate)
          }}
        />
      )}
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({})
