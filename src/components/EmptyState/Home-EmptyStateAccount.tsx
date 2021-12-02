import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import Illustration from '@assets/illustrations/budget-empty-state.svg'
import {Text, Button} from '@components/index'

interface IPHomeEmptyStateAccount extends IProps {}

export const HomeEmptyStateAccount: React.FunctionComponent<IPHomeEmptyStateAccount> = props => {
  return (
    <View style={styles.mainContainer}>
      <Illustration />
      <Text type="semibold" style={styles.illustrationText}>
        You don't have an account yet
      </Text>
      <Button title="Add new account" style={styles.addNewAccountButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationText: {
    marginTop: 24,
    color: COLORS.placeholder,
    fontSize: 18,
  },
  addNewAccountButton: {
    width: SCREEN_SIZE.fullWidth * 0.5,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
