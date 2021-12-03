import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import Illustration from '@assets/illustrations/transaction-empty-state.svg'
import LineToBottom from '@assets/icons/line-to-bottom.svg'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Text, Button} from '@components/index'

interface IPHomeEmptyStateTransaction extends IProps {}

export const HomeEmptyStateTransaction: React.FunctionComponent<IPHomeEmptyStateTransaction> = props => {
  return (
    <View style={styles.mainContainer}>
      <Illustration height={100} width={100} />
      <Text type="semibold" style={styles.illustrationTitle}>
        No transaction yet
      </Text>
      <Text style={styles.illustrationDescriptionText}>You can create new transaction by tapping the button below</Text>
      <LineToBottom />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationTitle: {
    marginTop: 24,
    color: 'black',
    fontSize: 18,
  },
  addNewAccountButton: {
    width: SCREEN_SIZE.fullWidth * 0.5,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationDescriptionText: {
    width: SCREEN_SIZE.fullWidth * 0.75,
    textAlign: 'center',
    marginVertical: 12,
    color: COLORS.gray,
    fontSize: 14,
  },
})
