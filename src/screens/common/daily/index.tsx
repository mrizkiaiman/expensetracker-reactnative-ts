import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'

interface IPDaily extends IProps {}

const Daily: React.FunctionComponent<IPDaily> = props => {
  return (
    <View>
      <Text>Daily</Text>
    </View>
  )
}

export default Daily

const styles = StyleSheet.create({})
