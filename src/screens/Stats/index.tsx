import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/constants/types/_common'

interface IPBudget extends IProps {}

const Budget: React.FunctionComponent<IPBudget> = props => {
  return (
    <View>
      <Text>Budget</Text>
    </View>
  )
}

export default Budget

const styles = StyleSheet.create({})
