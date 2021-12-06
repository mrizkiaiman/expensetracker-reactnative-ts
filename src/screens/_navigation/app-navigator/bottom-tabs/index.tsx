import React, {Children} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import {BottomTabParamList} from '@app/screens/_navigation/types/_params'

import {COLORS} from '@styles/vars'

import {MaterialCommunityIcons} from '@expo/vector-icons'
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

const CustomTabButton = (props: any) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={props.onPress}>
    <View style={styles.customButtonContainer}>
      <MaterialCommunityIcons name="plus" size={44} color="white" />
    </View>
  </TouchableOpacity>
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
          tabBarIcon: ({focused}) => <TabIcon title="Transactions" icon="book-outline" focused={focused} />,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={'TRANSACTION_FORM_FIRST'}
        component={FirstTransactionForm}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={focused ? 'red' : 'black'} />
          ),
          tabBarButton: props => <CustomTabButton onPress={() => navigation.navigate('TRANSACTION_FORM_FIRST')} />,
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  tabNavigator: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    height: 90,
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 10,
  },
  tabIconText: {
    color: 'red',
    marginTop: 8,
    fontSize: 11,
    fontWeight: '600',
  },
  customButtonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
