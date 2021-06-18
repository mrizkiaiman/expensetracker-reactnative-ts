import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps, CommonTypes} from '@app/types'
import colors from '@styles/colors'
import size from '@styles/size'

import Header from '@components/Header'

interface IPAccountForm extends IProps {
  navigation: CommonTypes['navigation']
}

const AccountForm: React.FC<IPAccountForm> = props => {
  return (
    <View style={styles.mainContainer}>
      <Header title="Add Account" />
    </View>
  )
}

export default AccountForm

const styles = StyleSheet.create({
  mainContainer: {},
})
