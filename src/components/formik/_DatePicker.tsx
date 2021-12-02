import React, {useState} from 'react'
import {StyleSheet, View} from 'react-native'
import {useFormikContext} from 'formik'

import {IProps} from '@app/constants/types/_common'

import DateTimePicker, {Event} from '@react-native-community/datetimepicker'
import TouchableInput from '../_TouchableInput'

export interface IPDatePicker extends IProps {
  label: string
  placeholder: string
  errorText?: string
  isRequired?: boolean
  name: string
}

const DatePicker: React.FC<IPDatePicker> = props => {
  const {name, label, placeholder, errorText, isRequired} = props
  const todaysDate = new Date()
  const {setFieldValue, values, errors, touched} = useFormikContext<any>()
  const [date, setDate] = useState<Date>(todaysDate)
  const [dateForDisplay, setDateForDisplay] = useState('')
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

  const handleChange = (value: string) => {
    setFieldValue(name, value)
  }

  return (
    <View testID="datepicker-root" style={styles.mainContainer}>
      <TouchableInput
        label={label}
        placeholder={placeholder}
        value={dateForDisplay}
        errorText={errorText}
        isRequired={isRequired}
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
            if (selectedDate === undefined) {
              setIsDatePickerOpen(false)
              return
            }
            const currentDate = selectedDate || date
            let stringDate = ''
            if (currentDate) {
              stringDate = JSON.stringify(currentDate).slice(1, 11)
            } else {
              stringDate = JSON.stringify(todaysDate).slice(1, 11)
            }
            setIsDatePickerOpen(false)
            setDate(currentDate)
            setDateForDisplay(stringDate)
            handleChange(stringDate)
          }}
        />
      )}
    </View>
  )
}

export default DatePicker

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 6
  }
})
