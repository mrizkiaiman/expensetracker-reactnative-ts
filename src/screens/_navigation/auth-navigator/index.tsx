import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import routes from '@navigation/routes'

import SignIn from '@app/screens/SignIn'
import SignUp from '@app/screens/SignUp'

interface IPAuthNavigator {}

const AuthStack: React.FunctionComponent<IPAuthNavigator> = ({}) => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator initialRouteName={routes.SIGN_IN} screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.SIGN_IN} component={SignIn} />
      <Stack.Screen name={routes.SIGN_UP} component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack
