import React, {useState} from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native'
import {IProps} from '@app/types'
import {RAW_COLORS} from '@styles/vars'

import {Ionicons} from '@expo/vector-icons'
import ErrorIcon from '@assets/icons/errorText.svg'
import Text from '@components/Text'

interface IPTouchableInput extends IProps {
  placeholder: string
  value?: string
  label?: string
  onChangeText: (value: string) => void
  isPassword?: boolean
  isRequired?: boolean
  isNumber?: boolean
  errorText?: string
  onPress?: () => void
}

const CustomInput: React.FunctionComponent<IPTouchableInput> = props => {
  const {placeholder, value, onChangeText, label, isPassword, isRequired, isNumber, style, errorText, onPress} = props

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
      <TouchableOpacity onPress={onPress}>
        <View pointerEvents={onPress ? 'none' : 'auto'} style={styles.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            keyboardType={isNumber ? 'phone-pad' : 'default'}
            secureTextEntry={Boolean(isPassword && state.hide)}
          />
          {isPassword && (
            <TouchableOpacity onPress={(): void => setState({...state, hide: !state.hide})}>
              <Ionicons name={state.hide ? 'md-eye' : 'md-eye-off'} size={24} color={RAW_COLORS.gray} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
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
})
