import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {IProps} from '@app/types'

import myStyles from '@styles/index'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import Header from '@components/Header'

interface IPAccountList extends IProps {}

const AccountList: React.FunctionComponent<IPAccountList> = props => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <Header title="AccountList" />
    </View>
  )
}

export default AccountList

const styles = StyleSheet.create({
  mainContainer: {},
})
