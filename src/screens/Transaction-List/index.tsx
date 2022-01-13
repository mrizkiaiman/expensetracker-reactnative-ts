import React from 'react'
import { View, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { useQuery } from 'react-query'

import { styles } from './style'
import { IProps } from '@app/constants/types/_common'
import { ITransactionResponse } from '@app/constants/types/transaction'
import { useTransactions } from '@app/services/transaction/hooks/useTransactions'

import { Text } from '@components/index'
import { TransactionCard, SkeletonCard } from './components/TransactionCard'
import { EmptyListLoading } from './components/EmptyListLoading'

interface IPDaily extends IProps {}

const Daily: React.FunctionComponent<IPDaily> = props => {
  const { data, isFetching, refetch } = useTransactions()

  return (
    <View style={styles.root}>
      <View style={styles.mainContainer}>
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerContainer}>
              <Text style={styles.title} type="bold">
                Transactions
              </Text>
            </View>
          }
          refreshing={isFetching}
          onRefresh={() => refetch()}
          data={data?.response || []}
          ListEmptyComponent={<EmptyListLoading />}
          renderItem={({ item }) => <TransactionCard transaction={item} isFetching={isFetching} />}
          keyExtractor={(item: ITransactionResponse) => item?._id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  )
}

export default Daily
