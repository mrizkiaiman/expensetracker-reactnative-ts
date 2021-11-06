import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {AuthStackParamList} from '@app/screens/_navigation/types/params'

import SignIn from '@app/screens/SignIn'
import SignUp from '@app/screens/SignUp'

interface IPAuthNavigator {}

const AuthStack: React.FunctionComponent<IPAuthNavigator> = ({}) => {
  const Stack = createStackNavigator<AuthStackParamList>()

  return (
    <Stack.Navigator initialRouteName={'SIGN_IN'} screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SIGN_IN'} component={SignIn} />
      <Stack.Screen name={'SIGN_UP'} component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack
