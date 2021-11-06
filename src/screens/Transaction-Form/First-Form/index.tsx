import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {FirstTransactionFormProps} from '@nav-types/index'

import {SCREEN_SIZE, COLORS} from '@styles/vars'
import {styles} from './style'
import TransactionType from '@app/mockdata/transaction-type.json'

import Illustration from '@assets/illustrations/transaction.svg'
import ExpenseIcon from '@assets/icons/>|.svg'
import IncomeIcon from '@assets/icons/|<.svg'
import {Header, Text} from '@app/components'

export const FirstTransactionForm: React.FunctionComponent<FirstTransactionFormProps> = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header title="Create Transaction" />
      <View style={styles.contentContainer}>
        <Illustration style={styles.illustration} />
        <Text style={styles.titleText} type="big-title">
          Choose transaction type:
        </Text>
        <View style={styles.transactionTypeContainer}>
          {TransactionType.map((type, _) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TRANSACTION_FORM_SECOND', {transactionType: type})}
              style={[
                styles.transactionTypeBox,
                {backgroundColor: type?.name === 'Expense' ? COLORS.primary : COLORS.lightBlue},
              ]}
              key={type?.name}>
              {type?.name === 'Expense' ? (
                <ExpenseIcon height={50} width={50} />
              ) : (
                <IncomeIcon height={50} width={50} />
              )}
              <Text style={styles.transactionTypeText} type="big-title">
                {type?.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}
