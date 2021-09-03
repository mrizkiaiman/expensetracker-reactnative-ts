import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import routes from '@navigation/routes'

import BottomTabs from './bottom-tabs'
import TransactionCreate from '@app/screens/modules/transaction-form'
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
      <Stack.Screen name={routes.TRANSACTION_CREATE} component={TransactionCreate} />
      <Stack.Screen name={routes.ACCOUNT_LIST} component={AccountList} />
      <Stack.Screen name={routes.ACCOUNT_FORM} component={AccountForm} />
    </Stack.Navigator>
  )
}

export default AppStack
