import React, {useState} from 'react'
import {StyleSheet, TextInput, View, StyleProp, TextStyle, TouchableOpacity} from 'react-native'
import {IProps, CommonTypes} from '@app/types'
import colors from '@styles/colors'

import {Ionicons} from '@expo/vector-icons'
import ErrorIcon from '@assets/icons/errorText.svg'
import Text from '@components/Text'

interface ICInput extends IProps {
  placeholder: string
  value: string
  label?: string
  onChangeText: CommonTypes['onChangeText']
  isPassword?: boolean
  isRequired?: boolean
  isNumber?: boolean
  errorText?: string
}

const CustomInput: React.FC<ICInput> = ({
  placeholder,
  value,
  onChangeText,
  label,
  isPassword,
  isRequired,
  isNumber,
  style,
  errorText,
}) => {
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
      <View style={styles.inputContainer}>
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
            <Ionicons name={state.hide ? 'md-eye' : 'md-eye-off'} size={24} color={colors.gray} />
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
    color: colors.gray,
  },
  input: {
    marginVertical: 8,
    color: 'black',
    backgroundColor: colors.background,
    fontFamily: 'Prompt_600SemiBold',
    fontSize: 18,
    paddingBottom: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.line,
    borderBottomWidth: 0.8,
  },
  errorTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    paddingTop: 4,
  },
  errorText: {
    color: colors.error,
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
