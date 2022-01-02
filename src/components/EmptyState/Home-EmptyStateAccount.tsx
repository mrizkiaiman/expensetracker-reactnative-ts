import React from 'react'
import {StyleSheet, View} from 'react-native'
import {BottomTabsComponentProps} from '@nav-types/index'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import Illustration from '@assets/illustrations/budget-empty-state.svg'
import LineToBottom from '@assets/icons/line-to-bottom.svg'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {Text, Button} from '@components/index'
import {useNavigation} from '@react-navigation/core'

interface IPHomeEmptyStateAccount extends IProps {}

export const HomeEmptyStateAccount: React.FunctionComponent<IPHomeEmptyStateAccount> = props => {
  const navigation = useNavigation<BottomTabsComponentProps>()

  return (
    <View style={styles.mainContainer}>
      <Illustration />
      <Text type="semibold" style={styles.illustrationTitle}>
        No account yet
      </Text>
      <Text style={styles.illustrationDescriptionText}>You can create new account by tapping the button below</Text>
      <LineToBottom />
      {/* <Button
        onPress={() => navigation.navigate('ACCOUNT_FORM')}
        title="New Account"
        style={styles.addNewAccountButton}
        leftIcon={<MaterialCommunityIcons name="plus" size={28} style={{marginTop: 2}} color="white" />}
      /> */}
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
    fontSize: 22,
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
    marginBottom: 12,
  },
})
