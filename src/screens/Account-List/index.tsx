import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {IProps} from '@app/constants/types/_common'
import {myStyles} from '@styles/index'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import {Header} from '@app/components'

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
