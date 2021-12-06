import React from 'react'
import {StyleSheet, View, FlatList, Image, TouchableOpacity} from 'react-native'

import {styles} from './style'
import {IProps} from '@app/constants/types/_common'
import {ITransactionRow} from '@type/transaction/index'

import {Text} from '@components/index'
import {TransactionCard} from './components/TransactionCard'

import mockTransactions from '@app/mockdata/transactions.json'

interface IPDaily extends IProps {}

const Daily: React.FunctionComponent<IPDaily> = props => {
  return (
    <View style={styles.root}>
      <View style={styles.mainContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.title} type="bold">
                Transactions
              </Text>
              {/* <TouchableOpacity style={styles.filterIconContainer}>
                <Image source={require('@assets/icons/filter.png')} style={styles.filterIcon} />
              </TouchableOpacity> */}
            </View>
          }
          data={mockTransactions}
          renderItem={({item}) => <TransactionCard transaction={item} />}
          keyExtractor={item => item?._id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  )
}

export default Daily
