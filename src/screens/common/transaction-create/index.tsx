import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps, CommonTypes} from '@app/types'

import Header from '@components/Header'

interface IPCreateTransactions extends IProps {
  navigation: CommonTypes['navigation']
}

const CreateTransactions: React.FC<IPCreateTransactions> = ({navigation}) => {
  return (
    <View>
      <Header title="Create Transaction"/>

    </View>
  )
}

export default CreateTransactions

const styles = StyleSheet.create({})
