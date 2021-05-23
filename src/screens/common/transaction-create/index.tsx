import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '../../types'

interface IPCreateTransactions extends IProps {}

const CreateTransactions: React.FC<IPCreateTransactions> = props => {
  return (
    <View>
      <Text>CreateTransactions</Text>
    </View>
  )
}

export default CreateTransactions

const styles = StyleSheet.create({})
