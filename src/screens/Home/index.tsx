import React, {useState} from 'react'
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {BottomTabProps} from '@nav-types/index'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import mockedTransactions from '@app/mockdata/transactions.json'
import {styles} from './styles'

import CoinsImg from '@assets/icons/coins.svg'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import {Text, ScrollViewBounced} from '@app/components'
import TransactionList from '@app/screens/Home/Transaction-List'
import {HomeEmptyStateAccount} from '@components/EmptyState/Home-EmptyStateAccount'

const dummyAccount = false
const dummyTransaction = false

const Home: React.FunctionComponent<BottomTabProps> = ({navigation}) => {
  const insets = useSafeAreaInsets()
  const [user, setUser] = useState('M. Rizki Aiman')

  return (
    <ScrollView style={styles.root}>
      <ScrollViewBounced color={COLORS.background} />
      <View style={styles.mainContainer}>
        <View style={[styles.contentContainer, {paddingTop: insets.top}]}>
          <View style={styles.topHeader}>
            <View>
              <Text>Welcome,</Text>
              <Text type="semibold">{user}</Text>
            </View>
            <CoinsImg height={40} width={40} />
          </View>
          {dummyAccount && dummyTransaction && (
            <>
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
            </>
          )}
        </View>
        {dummyAccount ? (
          <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: COLORS.line, marginTop: 8}]}>
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
                onPress={() => navigation.navigate('ACCOUNT_FORM')}>
                <FontAwesome name="plus" size={40} color={COLORS.primary} />
              </TouchableOpacity>
            </ScrollView>
          </View>
        ) : (
          <View style={styles.emptyStateContainer}>
            <HomeEmptyStateAccount />
          </View>
        )}
        {/* <View style={[styles.contentContainer, {borderTopWidth: 1, borderTopColor: COLORS.line, marginTop: 8}]}>
          <View style={[styles.topHeader, {marginTop: 16}]}>
            <Text type="title" style={styles.titleText}>
              Transactions
            </Text>
            <Text type="semibold" style={{color: COLORS.primary}}>
              See all
            </Text>
          </View>
          <TransactionList transactionList={mockedTransactions} />
        </View> */}
      </View>
    </ScrollView>
  )
}

export default Home

{
  /* <View style={[styles.contentContainer, styles.squareMenuButtonContainer]}>
  <View style={styles.squareMenuButton}>
    <View style={[styles.squareMenuButtonIconContainer, {backgroundColor: COLORS.blue}]}>
      <IncomeImg height={30} width={30} />
    </View>
    <View style={styles.squareMenuButtonTextContainer}>
      <Text style={{color: COLORS.gray, marginBottom: 4}}>Income</Text>
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
      <Text style={{color: COLORS.gray, marginBottom: 4}}>Expense</Text>
      <Text type="semibold" style={{fontSize: 20}}>
        Rp80.000
      </Text>
    </View>
  </View>
</View> */
}
