import React from 'react'
import {View, FlatList} from 'react-native'
import {useQuery} from 'react-query'

import {styles} from './style'
import {IProps} from '@app/constants/types/_common'
import {ITransactionRow} from '@app/constants/types/transaction'
import {getTransactions} from '@app/services/transaction/api'

import {Text} from '@components/index'
import {TransactionCard, SkeletonCard} from './components/TransactionCard'
import {EmptyListLoading} from './components/EmptyListLoading'

interface IPDaily extends IProps {}

const Daily: React.FunctionComponent<IPDaily> = props => {
  const {data, isLoading, isFetching, error} = useQuery('transactions', getTransactions, {keepPreviousData: true})

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
          data={data?.response || []}
          ListEmptyComponent={<EmptyListLoading />}
          renderItem={({item}) => <TransactionCard transaction={item} isFetching={isFetching} />}
          keyExtractor={(item: ITransactionRow) => item?._id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  )
}

export default Daily
