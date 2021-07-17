import React from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {IProps} from '@app/types'
import numberDotsFormatter from '@app/utils/numberDotsFormatter'
import moment from 'moment'

import {RAW_COLORS} from '@styles/vars'

import {SvgUri} from 'react-native-svg'
import Text from '@components/Text'

interface IPTransactionData {
  user: string
  budget: string
  category: {
    name: string
    img: string
  }
  account: string
  measurement: string
  experience: string
  amount: number
  description: string
  dt_created: string
  dt_updated: string
}

interface IPTransactionList extends IProps {
  transactionList: IPTransactionData[]
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
              <SvgUri width={30} height={30} uri={transaction.category.img} />
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

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: RAW_COLORS.line,
    paddingTop: 14,
    paddingBottom: 18,
  },
  contentContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
  accountTextContainer: {
    backgroundColor: RAW_COLORS.primary,
    borderRadius: 8,
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
  },
})
