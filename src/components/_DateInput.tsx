import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'

import DateTimePicker, {AndroidEvent, Event} from '@react-native-community/datetimepicker'
import {TouchableInput} from '@app/components'

interface IPDatePicker {
  label: string
  placeholder: string
  value?: string
  errorText?: string
  isRequired?: boolean
  onChangeText: (value: string) => void
  setDateValue: any
}

const DatePicker: React.FunctionComponent<IPDatePicker> = props => {
  const {label, placeholder, value, errorText, isRequired, onChangeText, setDateValue} = props
  const todaysDate = new Date()

  const [date, setDate] = useState<Date>(todaysDate)
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  return (
    <View>
      <TouchableInput
        label={label}
        placeholder={placeholder}
        value={value}
        errorText={errorText}
        isRequired={isRequired}
        onChangeText={onChangeText}
        onPress={() => setIsDatePickerOpen(true)}
      />
      {isDatePickerOpen && (
        <DateTimePicker
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(_event: Event | AndroidEvent, selectedDate: Date | undefined) => {
            const currentDate = selectedDate || date
            let stringDate = ''
            if (currentDate) {
              stringDate = JSON.stringify(currentDate).slice(1, 11)
            } else {
              stringDate = JSON.stringify(todaysDate).slice(1, 11)
            }
            setIsDatePickerOpen(false)
            setDate(currentDate)
            onChangeText(stringDate)
            setDateValue('dueDate', stringDate)
          }}
        />
      )}
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({})
