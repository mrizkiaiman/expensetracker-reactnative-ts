import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'

interface IPProfile extends IProps {}

const Profile: React.FunctionComponent<IPProfile> = props => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
