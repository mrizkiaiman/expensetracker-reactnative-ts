import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '../types'

interface IPDashboard extends IProps {}

const Dashboard: React.FC<IPDashboard> = props => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})
