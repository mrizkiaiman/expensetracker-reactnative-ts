import React, {useState} from 'react'
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {IProps} from '@app/types'
import colors from '@styles/colors'
import size from '@styles/size'
import mockedTransactions from '@app/mockdata/transactions.json'

import CoinsImg from '@assets/icons/coins.svg'
import ExpenseImg from '@assets/icons/>|.svg'
import IncomeImg from '@assets/icons/|<.svg'
import Text from '@components/Text'
import ScrollViewBounced from '@components/parts/ScrollViewBounced'
import TransactionList from '@screens/common/home/transaction-list'

interface IPHome extends IProps {}

const Home: React.FC<IPHome> = props => {
  const insets = useSafeAreaInsets()
  const [user, setUser] = useState('M. Rizki Aiman')
  return (
    <ScrollView style={{paddingTop: insets.top}}>
      <ScrollViewBounced color={colors.background} />
      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.topHeader}>
            <View>
              <Text>Welcome,</Text>
              <Text type="semibold">{user}</Text>
            </View>
            <CoinsImg height={40} width={40} />
          </View>
          <Text type="title" style={[styles.titleText, {paddingTop: 8}]}>
            All Stats
          </Text>
          <View style={styles.expenseStatsContentContainer}>
            <View>
              <Text style={{marginRight: 132}}>Income</Text>
              <Text type="semibold" style={styles.incomeText}>
                Rp800.000
              </Text>
            </View>
            <View>
              <Text>Expense</Text>
              <Text type="semibold" style={styles.expenseText}>
                Rp70.000
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: colors.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginTop: 16}]}>
            <Text type="title" style={styles.titleText}>
              Transactions
            </Text>
            <Text type="semibold" style={{color: colors.primary}}>
              See all
            </Text>
          </View>
          <TransactionList transactionList={mockedTransactions} />
        </View>

        <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: colors.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginTop: 16}]}>
            <Text type="title" style={styles.titleText}>
              Budget
            </Text>
            <Text type="semibold" style={{color: colors.primary}}>
              See all
            </Text>
          </View>
        </View>

        <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: colors.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginTop: 16}]}>
            <Text type="title" style={styles.titleText}>
              Account
            </Text>
            <Text type="semibold" style={{color: colors.primary}}>
              See all
            </Text>
          </View>
        </View>

        {/* <View style={[styles.contentContainer, styles.squareMenuButtonContainer]}>
          <View style={styles.squareMenuButton}>
            <View style={[styles.squareMenuButtonIconContainer, {backgroundColor: colors.blue}]}>
              <IncomeImg height={30} width={30} />
            </View>
            <View style={styles.squareMenuButtonTextContainer}>
              <Text style={{color: colors.gray, marginBottom: 4}}>Income</Text>
              <Text type="semibold" style={{fontSize: 20}}>
                Rp80.000
              </Text>
            </View>
          </View>
          <View style={styles.squareMenuButton}>
            <View style={styles.squareMenuButtonIconContainer}>
              <ExpenseImg height={30} width={30} />
            </View>
            <View style={styles.squareMenuButtonTextContainer}>
              <Text style={{color: colors.gray, marginBottom: 4}}>Expense</Text>
              <Text type="semibold" style={{fontSize: 20}}>
                Rp80.000
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 200,
  },
  contentContainer: {
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: colors.line,
    borderBottomWidth: 1,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  expenseStatsContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  titleText: {
    color: colors.primary,
  },
  incomeText: {
    fontSize: 18,
  },
  expenseText: {
    fontSize: 18,
  },
  squareMenuButtonContainer: {
    marginTop: 16,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  squareMenuButton: {
    height: size.width * 0.44,
    width: size.width * 0.43,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 8,
    paddingTop: 24,
    paddingStart: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  squareMenuButtonIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareMenuButtonTextContainer: {
    marginTop: 32,
  },
})
