import React, {useState} from 'react'
import {StyleSheet, TextInput, View, StyleProp, TextStyle, TouchableOpacity} from 'react-native'
import {IProps} from '@app/constants/types/_common'
import {COLORS} from '@styles/vars'

import {Ionicons} from '@expo/vector-icons'
import SubmitButton from '@assets/icons/input-submit-button.svg'
import Text from '@app/components/_Text'

export interface IPTextInput extends IProps {
  placeholder?: string
  value?: string
  label?: string
  onChangeText?: (value: string) => void
  secureTextEntry?: boolean
  isRequired?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'name-phone-pad'
  errorText?: string
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  withSubmitButton?: boolean
  onFocus?: () => void
  onBlur?: () => void
  editable?: boolean
  textAlign?: 'left' | 'center' | 'right'
  defaultValue?: string
  submitOnPress?: () => void
}

const CustomTextInput: React.FunctionComponent<IPTextInput> = props => {
  const {
    placeholder,
    value,
    onChangeText,
    label,
    secureTextEntry,
    isRequired,
    keyboardType,
    style,
    withSubmitButton,
    autoCapitalize,
    onFocus,
    onBlur,
    editable,
    textAlign,
    defaultValue,
    submitOnPress
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
          {isRequired && <Text style={styles.requiredIcon}>*</Text>}
        </Text>
      )}
      <View style={[styles.inputContainer, {width: withSubmitButton ? '70%' : '100%'}]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, {width: secureTextEntry ? '90%' : '100%'}, style]}
          keyboardType={keyboardType}
          secureTextEntry={Boolean(secureTextEntry && state.hide)}
          autoCapitalize={autoCapitalize}
          onFocus={onFocus}
          onBlur={onBlur}
          editable={editable}
          textAlign={textAlign}
          defaultValue={defaultValue}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={(): void => setState({...state, hide: !state.hide})}>
            <Ionicons name={state.hide ? 'md-eye' : 'md-eye-off'} size={24} color={COLORS.gray} />
          </TouchableOpacity>
        )}
        {withSubmitButton && (
          <TouchableOpacity onPress={submitOnPress} style={styles.submitButtonContainer}>
            <SubmitButton />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 6,
  },
  requiredIcon: {
    color: COLORS.red
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: COLORS.gray,
  },
  input: {
    marginVertical: 4,
    color: 'black',
    backgroundColor: COLORS.background,
    fontFamily: 'Prompt_600SemiBold',
    fontSize: 18,
    paddingBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.line,
    borderBottomWidth: 0.8,
  },
  submitButtonContainer: {
    marginLeft: '24%',
  },
})
