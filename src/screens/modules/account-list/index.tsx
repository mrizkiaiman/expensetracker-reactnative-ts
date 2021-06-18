import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'
import colors from '@styles/colors'
import size from '@styles/size'

interface IPAccountList extends IProps {}

const AccountList: React.FC<IPAccountList> = props => {
  return (
    <View style={styles.mainContainer}>
      <Text>AccountList</Text>
    </View>
  )
}

export default AccountList

const styles = StyleSheet.create({
  mainContainer: {},
})
