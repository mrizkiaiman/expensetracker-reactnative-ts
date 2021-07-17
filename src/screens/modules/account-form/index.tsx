import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {IProps} from '@app/types'

import myStyles from '@styles/index'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import Header from '@components/Header'

interface IPAccountForm extends IProps {}

const AccountForm: React.FunctionComponent<IPAccountForm> = props => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainContainer}>
      <Header title="AccountForm" />
    </View>
  )
}

export default AccountForm

const styles = StyleSheet.create({
  mainContainer: {},
})
