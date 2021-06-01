import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import routes from '@navigation/routes'

import SignIn from '@screens/auth/sign-in'
import SignUp from '@screens/auth/sign-up'

interface IPAuthNavigator {}

const AuthStack: React.FC<IPAuthNavigator> = ({}) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName={routes.SIGN_IN} headerMode="none">
      <Stack.Screen name={routes.SIGN_IN} component={SignIn} />
      <Stack.Screen name={routes.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack
