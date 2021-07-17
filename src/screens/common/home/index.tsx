import React, {useState} from 'react'
import {StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {IProps} from '@app/types'
import routes from '@navigation/routes'
import mockedTransactions from '@app/mockdata/transactions.json'

import myStyles from '@styles/index'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import {FontAwesome, Ionicons} from '@expo/vector-icons'
import CoinsImg from '@assets/icons/coins.svg'
import ExpenseImg from '@assets/icons/>|.svg'
import IncomeImg from '@assets/icons/|<.svg'
import Text from '@components/Text'
import ScrollViewBounced from '@components/parts/ScrollViewBounced'
import TransactionList from '@screens/common/home/transaction-list'

interface IPHome extends IProps {}

const Home: React.FunctionComponent<IPHome> = props => {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const [user, setUser] = useState('M. Rizki Aiman')
  return (
    <ScrollView>
      <ScrollViewBounced color={RAW_COLORS.background} />
      <View style={styles.mainContainer}>
        <View style={[styles.contentContainer, {paddingTop: insets.top}]}>
          <View style={styles.topHeader}>
            <View>
              <Text>Welcome,</Text>
              <Text type="semibold">{user}</Text>
            </View>
            <CoinsImg height={40} width={40} />
          </View>
          <Text type="title" style={[styles.titleText, {paddingTop: 8}]}>
            Stats
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
        <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: RAW_COLORS.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginVertical: 16}]}>
            <Text type="title" style={styles.titleText}>
              Account
            </Text>
          </View>
          <ScrollView horizontal contentContainerStyle={styles.boxMenuContainer}>
            <TouchableOpacity style={styles.boxMenu}>
              <FontAwesome name="bank" size={36} color="white" />
              <Text style={styles.boxMenuText}>Bank</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
              <Ionicons name="wallet" size={36} color="white" />
              <Text style={styles.boxMenuText}>Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boxMenu}>
              <Ionicons name="ios-cash" size={36} color="white" />
              <Text style={styles.boxMenuText}>Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.boxMenu, styles.boxMenuTransparent]}
              onPress={() => navigation.navigate(routes.ACCOUNT_FORM)}>
              <FontAwesome name="plus" size={40} color={RAW_COLORS.primary} />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: RAW_COLORS.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginTop: 16}]}>
            <Text type="title" style={styles.titleText}>
              Transactions
            </Text>
            <Text type="semibold" style={{color: RAW_COLORS.primary}}>
              See all
            </Text>
          </View>
          <TransactionList transactionList={mockedTransactions} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    paddingBottom: 180,
  },
  contentContainer: {
    backgroundColor: RAW_COLORS.background,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: RAW_COLORS.line,
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
    color: RAW_COLORS.primary,
  },
  boxMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  boxMenu: {
    height: 100,
    width: 100,
    backgroundColor: RAW_COLORS.primary,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  boxMenuText: {
    color: 'white',
    fontSize: 12,
    marginTop: 12,
  },
  boxMenuTransparent: {
    backgroundColor: RAW_COLORS.transparent,
    borderWidth: 0.5,
    borderColor: RAW_COLORS.gray,
  },
  incomeText: {
    fontSize: 18,
  },
  expenseText: {
    fontSize: 18,
  },
  squareMenuButtonContainer: {
    marginTop: 16,
    backgroundColor: RAW_COLORS.transparent,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
  },
  squareMenuButton: {
    height: SCREEN_SIZE.fullHeight * 0.44,
    width: SCREEN_SIZE.fullWidth * 0.43,
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
    backgroundColor: RAW_COLORS.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareMenuButtonTextContainer: {
    marginTop: 32,
  },
})

{
  /* <View style={[styles.contentContainer, styles.squareMenuButtonContainer]}>
  <View style={styles.squareMenuButton}>
    <View style={[styles.squareMenuButtonIconContainer, {backgroundColor: RAW_COLORS.blue}]}>
      <IncomeImg height={30} width={30} />
    </View>
    <View style={styles.squareMenuButtonTextContainer}>
      <Text style={{color: RAW_COLORS.gray, marginBottom: 4}}>Income</Text>
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
      <Text style={{color: RAW_COLORS.gray, marginBottom: 4}}>Expense</Text>
      <Text type="semibold" style={{fontSize: 20}}>
        Rp80.000
      </Text>
    </View>
  </View>
</View> */
}
