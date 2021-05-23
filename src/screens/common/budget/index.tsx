import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IProps} from '@app/types'

interface IPBudget extends IProps {
  
}

const Budget: React.FC<IPBudget> = (props) => {
  return (
    <View>
      <Text>Budget</Text>
    </View>
  )
}

export default Budget

const styles = StyleSheet.create({})
