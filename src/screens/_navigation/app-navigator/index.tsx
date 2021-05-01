import React from 'react'
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import routes from '../routes'

import BottomTabs from './bottom-tabs'

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
      <Stack.Screen name={routes.BOTTOM_TAB} component={BottomTabs} options={{title: 'Home'}} />
    </Stack.Navigator>
  )
}

export default AppStack
