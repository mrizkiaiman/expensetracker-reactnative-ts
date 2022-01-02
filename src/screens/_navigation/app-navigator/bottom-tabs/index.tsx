import React, {useState} from 'react'
import {StyleSheet, View, Text, TouchableOpacity, Pressable} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import {BottomTabParamList} from '@app/screens/_navigation/types/_params'

import {COLORS} from '@styles/vars'
import {styles} from './styles'

import {MaterialCommunityIcons} from '@expo/vector-icons'
import {PlusMiddleButton} from './components/PlusMiddleButton'
import Home from '@app/screens/Home'
import TransactionList from '@app/screens/Transaction-List/index'
import Profile from '@app/screens/Profile'
import AccountList from '@app/screens/Account-List'
import {FirstTransactionForm} from '@app/screens/Transaction-Form/First-Form'

interface IPTabIcons {
  focused: boolean
  icon: any
  title: string
}

const TabIcon = (props: IPTabIcons) => (
  <View style={styles.tabIconContainer}>
    <MaterialCommunityIcons name={props.icon} size={24} color={props.focused ? COLORS.pink : COLORS.gray} />
    <Text style={{...styles.tabIconText, color: props.focused ? COLORS.pink : COLORS.gray}}>{props.title}</Text>
  </View>
)

const BottomTabs: React.FunctionComponent = props => {
  const navigation = useNavigation<any>()
  const Tab = createBottomTabNavigator<BottomTabParamList>()

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [styles.tabNavigator, styles.shadow],
      }}>
      <Tab.Screen
        name={'HOME'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Home" icon="view-dashboard-outline" focused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'TRANSACTION_LIST'}
        component={TransactionList}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Daily" icon="book-outline" focused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'_'}
        component={Empty}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={focused ? 'red' : 'black'} />
          ),
          tabBarButton: props => <PlusMiddleButton />,
        }}
      />
      <Tab.Screen
        name={'ACCOUNT_LIST'}
        component={AccountList}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Accounts" icon="wallet" focused={focused} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={'PROFILE'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Profile" icon="face-profile" focused={focused} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs

const Empty = () => <View></View>
