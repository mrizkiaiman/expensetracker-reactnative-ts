import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {IProps} from '@app/types'

import Header from '@components/Header'

interface IPCreateTransactions extends IProps {}

const CreateTransactions: React.FunctionComponent<IPCreateTransactions> = props => {
  return (
    <View>
      <Header title="Create Transaction" />
    </View>
  )
}

export default CreateTransactions

const styles = StyleSheet.create({})
