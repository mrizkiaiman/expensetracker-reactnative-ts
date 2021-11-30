import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import Illustration from '@assets/illustrations/budget-empty-state.svg'
import {Text} from '@components/index'

interface IPHomeEmptyStateAccount extends IProps {

}

export const HomeEmptyStateAccount: React.FunctionComponent<IPHomeEmptyStateAccount> = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Illustration />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {

  }
})