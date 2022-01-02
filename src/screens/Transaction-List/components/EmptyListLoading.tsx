import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import {TransactionCard} from './TransactionCard'

interface IPEmptyListLoading extends IProps {}

export const EmptyListLoading: React.FunctionComponent<IPEmptyListLoading> = props => {
  return (
    <View>
      <TransactionCard isFetching={true} />
      <TransactionCard isFetching={true} />
      <TransactionCard isFetching={true} />
      <TransactionCard isFetching={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
