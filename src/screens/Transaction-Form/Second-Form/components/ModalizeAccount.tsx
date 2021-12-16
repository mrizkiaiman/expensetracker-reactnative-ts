import React from 'react'
import {StyleSheet, View, TouchableOpacity} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import {useFormikContext} from 'formik'
import accounts from '@app/mockdata/account.json'

import {Text} from '@components/index'

interface IPModalizeAccount extends IProps {
  onOpen?: () => void
  onClose?: () => void
  name: string
}

export const ModalizeAccount: React.FunctionComponent<IPModalizeAccount> = props => {
  const {setFieldValue, values, errors, touched, handleSubmit} = useFormikContext<any>()
  const {onOpen, onClose, name} = props

  const onSelect = async (value: string, valueForDisplay: string) => {
    setTimeout(() => {
      setFieldValue(name, value)
      setFieldValue(`${name}ForDisplay`, valueForDisplay)
    }, 1000)
    onClose && onClose()
  }

  return (
    <View style={styles.mainContainer}>
      {accounts?.map((account, index) => (
        <TouchableOpacity
          onPress={() => onSelect(account?._id, account?.name)}
          key={account?._id}
          style={[styles.accountCard, values[name] === account?._id && styles.selectedAccountCard]}>
          <Text
            type={values[name] === account?._id ? 'bold' : 'default'}
            style={[styles.text, values[name] === account?._id && styles.selectedText]}>
            {account?.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 18,
  },
  accountCard: {
    borderWidth: 0.4,
    borderRadius: 12,
    marginVertical: 8,
    padding: 16,
    borderColor: COLORS.gray,
  },
  selectedAccountCard: {
    borderWidth: 2,
    borderRadius: 12,
    marginVertical: 8,
    padding: 16,
    borderColor: COLORS.primary,
  },
  selectedText: {
    fontSize: 16,
    color: COLORS.primary,
  },
  text: {
    fontSize: 16,
  },
})
