import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '../types'

interface IPDaily extends IProps {}

const Daily: React.FC<IPDaily> = props => {
  return (
    <View>
      <Text>Daily</Text>
    </View>
  )
}

export default Daily

const styles = StyleSheet.create({})
