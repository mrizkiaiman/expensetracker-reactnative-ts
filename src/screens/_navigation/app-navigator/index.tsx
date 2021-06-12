import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import routes from '@navigation/routes'

import BottomTabs from './bottom-tabs'
import TransactionCreate from '@screens/common/transaction-create'

interface IPAppNavigator {}

const AppStack: React.FC<IPAppNavigator> = ({}) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName={routes.BOTTOM_TAB}>
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTabs} />
      <Stack.Screen
        name={routes.TRANSACTION_CREATE}
        options={{animationTypeForReplace: 'pop'}}
        component={TransactionCreate}
      />
    </Stack.Navigator>
  )
}

export default AppStack
