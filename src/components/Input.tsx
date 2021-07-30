import React, {useState} from 'react'
import {StyleSheet, TextInput, View, StyleProp, TextStyle, TouchableOpacity} from 'react-native'
import {IProps} from '@app/types'
import {RAW_COLORS} from '@styles/vars'

import {Ionicons} from '@expo/vector-icons'
import ErrorIcon from '@assets/icons/errorText.svg'
import SubmitButton from '@assets/icons/input-submit-button.svg'
import Text from '@components/Text'

interface IPInput extends IProps {
  placeholder: string
  value: string
  label?: string
  onChangeText: (value: string) => void
  isPassword?: boolean
  isRequired?: boolean
  isNumber?: boolean
  errorText?: string
  withSubmitButton?: boolean
}

const CustomInput: React.FunctionComponent<IPInput> = props => {
  const {
    placeholder,
    value,
    onChangeText,
    label,
    isPassword,
    isRequired,
    isNumber,
    style,
    errorText,
    withSubmitButton,
  } = props

  const [state, setState] = useState({
    hide: true,
    focus: false,
    value: '',
  })

  return (
    <View style={styles.mainContainer}>
      {label && (
        <Text style={styles.label}>
          {label}
          {isRequired && <Text> *</Text>}
        </Text>
      )}
      <View style={[styles.inputContainer, {width: withSubmitButton ? '70%' : '100%'}]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, {width: isPassword ? '90%' : '100%'}, style]}
          keyboardType={isNumber ? 'phone-pad' : 'default'}
          secureTextEntry={Boolean(isPassword && state.hide)}
        />
        {isPassword && (
          <TouchableOpacity onPress={(): void => setState({...state, hide: !state.hide})}>
            <Ionicons name={state.hide ? 'md-eye' : 'md-eye-off'} size={24} color={RAW_COLORS.gray} />
          </TouchableOpacity>
        )}
        {withSubmitButton && (
          <TouchableOpacity style={styles.submitButtonContainer}>
            <SubmitButton />
          </TouchableOpacity>
        )}
      </View>
      {errorText && (
        <View style={styles.errorTextContainer}>
          <ErrorIcon style={styles.errorIcon} />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 6,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: RAW_COLORS.gray,
  },
  input: {
    marginVertical: 8,
    color: 'black',
    backgroundColor: RAW_COLORS.background,
    fontFamily: 'Prompt_600SemiBold',
    fontSize: 18,
    paddingBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: RAW_COLORS.line,
    borderBottomWidth: 0.8,
  },
  errorTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: 4,
  },
  errorText: {
    color: RAW_COLORS.error,
    paddingHorizontal: 4,
    paddingTop: 4,
    fontSize: 11,
  },
  errorIcon: {
    marginTop: 6,
    marginRight: 5,
    height: 12,
    width: 12,
  },
  submitButtonContainer: {
    marginLeft: '24%',
  },
})
