import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'

interface IPHome extends IProps {}

const Home: React.FC<IPHome> = props => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
