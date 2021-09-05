import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import routes from '@navigation/routes'

import BottomTabs from './bottom-tabs'
import {FirstTransactionForm} from '@screens/modules/transaction-form/first-form'
import {SecondTransactionForm} from '@screens/modules/transaction-form/second-form'
import AccountList from '@screens/modules/account-list'
import AccountForm from '@screens/modules/account-form'

interface IPAppNavigator {}

const AppStack: React.FunctionComponent<IPAppNavigator> = ({}) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={routes.BOTTOM_TAB}>
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTabs} />
      <Stack.Screen name={routes.TRANSACTION_FORM_FIRST} component={FirstTransactionForm} />
      <Stack.Screen name={routes.TRANSACTION_FORM_SECOND} component={SecondTransactionForm} />
      <Stack.Screen name={routes.ACCOUNT_LIST} component={AccountList} />
      <Stack.Screen name={routes.ACCOUNT_FORM} component={AccountForm} />
    </Stack.Navigator>
  )
}

export default AppStack
