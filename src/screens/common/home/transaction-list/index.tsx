import React from 'react'
import {View} from 'react-native'

import {IProps} from '@app/types'
import {IPTransactionRow} from '@models/modules/transaction'
import numberDotsFormatter from '@app/utils/numberDotsFormatter'
import moment from 'moment'
import {styles} from './styles'
import {RAW_COLORS} from '@styles/vars'

import {SvgUri} from 'react-native-svg'
import {Text} from '@app/components'

interface IPTransactionList extends IProps {
  transactionList: IPTransactionRow[]
}

const TransactionList: React.FunctionComponent<IPTransactionList> = ({transactionList}) => {
  return (
    <>
      {transactionList.slice(0, 5).map((transaction, index) => (
        <View style={[styles.mainContainer, index === 4 && {borderBottomWidth: 0}]} key={transaction.description}>
          <Text type="semibold" style={{color: RAW_COLORS.gray}}>
            {moment(transaction.dt_created).format('ll')}
          </Text>
          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <SvgUri width={30} height={30} uri={transaction?.category?.img ?? null} />
            </View>
            <View style={styles.contentInfoContainer}>
              <View style={{marginStart: 16}}>
                <Text style={{marginBottom: 4}}>{transaction.description}</Text>
                <Text style={{textAlign: 'right'}} type="semibold">
                  Rp{numberDotsFormatter(transaction.amount)}
                </Text>
              </View>
              <View style={styles.accountTextContainer}>
                <Text style={{color: 'white'}} type="semibold">
                  {transaction.account}
                </Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  )
}

export default TransactionList
