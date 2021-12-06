import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {ITransactionRow} from '@type/transaction/index'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import numberDotsFormatter from '@utils/helpers/numberDotsFormatter'

import {Text, Badge} from '@components/index'
import {SvgUri} from 'react-native-svg'

interface IPTransactionCard extends IProps {
  transaction: ITransactionRow
}

export const TransactionCard: React.FunctionComponent<IPTransactionCard> = props => {
  const {transaction} = props

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.descriptionWrapper}>
          <SvgUri width="30" height="30" uri={transaction?.category?.img} />
          <Text style={styles.descriptionText} type="semibold">
            {transaction?.description}
          </Text>
        </View>
        <Badge style={styles.badge} color={transaction.transactionType === 'Expense' ? 'red' : 'blue'}>
          {transaction?.transactionType}
        </Badge>
        <Badge style={styles.badge} color="orange">
          {transaction?.category?.name}
        </Badge>
      </View>
      <View style={styles.rightContentContainer}>
        <Text style={styles.dateText} type="semibold">
          {transaction.dt_created}
        </Text>
        <Text style={styles.amountText} type="semibold">
          Rp{numberDotsFormatter(transaction.amount)}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.line,
    marginVertical: 12,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  descriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryImg: {
    width: 50,
    height: 50,
  },
  descriptionText: {
    color: 'black',
    marginStart: 12,
  },
  rightContentContainer: {
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  badge: {
    width: 140,
    marginVertical: 4,
  },
  dateText: {
    color: COLORS.gray,
    textAlign: 'right',
  },
  amountText: {
    color: COLORS.primary,
    fontSize: 20,
  },
})
