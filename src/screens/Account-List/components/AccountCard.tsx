import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {IAccountRow} from '@type/account/index'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import numberDotsFormatter from '@utils/helpers/numberDotsFormatter'

import {Text, Badge} from '@components/index'
import {SvgUri} from 'react-native-svg'

interface IPAccountCard extends IProps {
  account: IAccountRow
}

export const AccountCard: React.FunctionComponent<IPAccountCard> = props => {
  const {account} = props

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.descriptionWrapper}>
          <SvgUri uri={account?.type?.img} height={80} width={80} />
          <Text style={styles.descriptionText} type="bold">
            {account?.name}
          </Text>
        </View>
      </View>
      <Text style={styles.amountText} type="bold">
        Rp{numberDotsFormatter(account.amount)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.line,
    marginVertical: 12,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionWrapper: {
    marginBottom: 12,
  },
  categoryImg: {
    width: 50,
    height: 50,
  },
  descriptionText: {
    color: 'black',
    fontSize: 17,
    marginTop: 12,
  },
  amountText: {
    color: COLORS.primary,
    fontSize: 22,
    marginBottom: 12,
  },
})
