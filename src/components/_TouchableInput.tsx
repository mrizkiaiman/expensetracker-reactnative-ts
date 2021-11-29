import React, {useState} from 'react'
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native'
import {IProps} from '@app/constants/types/_common'
import {COLORS} from '@styles/vars'

import {Ionicons} from '@expo/vector-icons'
import SubmitButton from '@assets/icons/input-submit-button.svg'
import Text from '@app/components/_Text'

interface IPTouchableInput extends IProps {
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
  onPress: () => void
}

const CustomInput: React.FunctionComponent<IPTouchableInput> = props => {
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
    onPress
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
      <TouchableOpacity onPress={onPress}>
        <View pointerEvents={'none'} style={styles.inputContainer}>
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
          <TouchableOpacity style={styles.submitButtonContainer}>
            <SubmitButton />
          </TouchableOpacity>
        )}
        </View>
      </TouchableOpacity>
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
    color: COLORS.gray,
  },
  input: {
    marginVertical: 8,
    color: 'black',
    backgroundColor: COLORS.background,
    fontFamily: 'Prompt_600SemiBold',
    fontSize: 18,
    paddingBottom: 4,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: COLORS.line,
    borderBottomWidth: 0.8,
  },
  errorTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: 4,
  },
  errorText: {
    color: COLORS.error,
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
