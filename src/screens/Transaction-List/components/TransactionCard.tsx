import React from 'react'
import {StyleSheet, View} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {ITransactionRow} from '@type/transaction/index'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import numberDotsFormatter from '@utils/helpers/numberDotsFormatter'

import {Text, Badge} from '@components/index'
import {SvgUri} from 'react-native-svg'
import {Entypo, Feather} from '@expo/vector-icons'
import {Menu, MenuOptions, MenuOption, MenuTrigger} from 'react-native-popup-menu'
import SkeletonContent from 'react-native-skeleton-content'

interface IPTransactionCard extends IProps {
  transaction?: ITransactionRow
  isFetching: boolean
}

export const TransactionCard: React.FunctionComponent<IPTransactionCard> = props => {
  const {transaction, isFetching} = props

  return (
    <SkeletonCard isFetching={isFetching}>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.descriptionWrapper}>
            <View style={{width: 30, height: 30}}>
              <SvgUri width="30" height="30" uri={transaction?.category?.img || ''} />
            </View>
            <Text style={styles.descriptionText} type="semibold">
              {transaction?.description}
            </Text>
          </View>
          <Badge style={styles.badge} color={transaction?.type?.name === 'Expense' ? 'red' : 'blue'}>
            {transaction?.type?.name}
          </Badge>
          <Badge style={styles.badge} color="orange">
            {transaction?.category?.name}
          </Badge>
        </View>
        <View style={styles.rightContentContainer}>
          <Menu>
            <MenuTrigger>
              <Entypo name="dots-three-vertical" style={{alignSelf: 'flex-end'}} size={22} color="gray" />
            </MenuTrigger>
            <MenuOptions>
              <MenuOption style={styles.flexRow} onSelect={() => alert(`Save`)}>
                <Feather name="edit" size={24} color="black" />
                <Text style={styles.menuIconText}>Edit</Text>
              </MenuOption>
              <MenuOption style={styles.flexRow} onSelect={() => alert(`Save`)}>
                <Feather name="trash-2" size={24} color="black" />
                <Text style={styles.menuIconText}>Delete</Text>
              </MenuOption>
            </MenuOptions>
          </Menu>
          {/* <Text style={styles.dateText} type="semibold">
          {transaction.dt_created}
        </Text> */}
          <Text style={styles.amountText} type="semibold">
            Rp{numberDotsFormatter(transaction?.amount)}
          </Text>
        </View>
      </View>
    </SkeletonCard>
  )
}

interface IPSkeleton extends IProps {
  isFetching: boolean
}

export const SkeletonCard = ({children, isFetching}: IPSkeleton) => {
  return (
    <SkeletonContent
      containerStyle={{flex: 1, width: '100%', height: 180}}
      isLoading={isFetching || false}
      layout={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 10,
          borderWidth: 1,
          borderColor: COLORS.line,
          borderRadius: 12,
          height: 160,
          padding: 16,
          children: [
            {
              width: '45%',
              height: 120,
              justifyContent: 'space-between',
              children: [
                {
                  height: 30,
                  width: '100%',
                },
                {
                  height: 30,
                  width: '100%',
                },
                {
                  height: 30,
                  width: '100%',
                },
              ],
            },
            {
              width: '40%',
              height: 120,
              justifyContent: 'space-between',
              children: [
                {
                  width: '30%',
                  height: 40,
                  alignSelf: 'flex-end',
                },
                {
                  width: '90%',
                  height: 30,
                  alignSelf: 'flex-end',
                },
              ],
            },
          ],
        },
      ]}>
      {children}
    </SkeletonContent>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.line,
    // marginVertical: 12,
    borderRadius: 12,
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 160,
  },
  descriptionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: 100,
    height: 30,
  },
  categoryImg: {
    width: 50,
    height: 50,
  },
  descriptionText: {
    color: 'black',
    marginStart: 12,
  },
  rightContentContainer: {
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  badge: {
    width: 140,
    marginVertical: 4,
  },
  dateText: {
    color: COLORS.gray,
    textAlign: 'right',
  },
  amountText: {
    color: COLORS.primary,
    fontSize: 20,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  menuIconText: {
    marginStart: 8,
  },
})
