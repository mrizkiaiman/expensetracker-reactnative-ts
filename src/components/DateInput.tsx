import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import TouchableInput from '@components/TouchableInput'

interface IPDatePicker {
  label: string
  placeholder: string
  value?: string
  errorText?: string
  isRequired?: boolean
  onChangeText: (value: string) => void
  setDateValue: any
}

const DatePicker: React.FC<IPDatePicker> = ({
  label,
  placeholder,
  value,
  errorText,
  isRequired,
  onChangeText,
  setDateValue,
}) => {
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
          onChange={(event, selectedDate) => {
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
