import React, {Children} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import routes from '../../routes'
import Colors from '../../../../styles/colors'

import Home from '../../../common/home'
import Daily from '../../../common/daily'
import Profile from '../../../common/profile'
import Budget from '../../../common/budget'
import CreateTransactions from '../../../common/transaction-create'

interface TabProps {}
interface IPTabIcons {
  focused: boolean
  icon: any
  title: string
}
const Tab = createBottomTabNavigator()

const TabIcon = (props: IPTabIcons) => (
  <View style={styles.tabIconContainer}>
    <MaterialCommunityIcons name={props.icon} size={24} color={props.focused ? Colors.pink : Colors.gray} />
    <Text style={{...styles.tabIconText, color: props.focused ? Colors.pink : Colors.gray}}>{props.title}</Text>
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

const BottomTabs: React.FC<TabProps> = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: [styles.tabNavigator, styles.shadow],
      }}>
      <Tab.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Home" icon="view-dashboard-outline" focused={focused} />,
        }}
      />
      <Tab.Screen
        name={routes.DAILY}
        component={Daily}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Daily" icon="book-outline" focused={focused} />,
        }}
      />
      <Tab.Screen
        name={routes.TRANSACTION_CREATE}
        component={CreateTransactions}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons name="view-dashboard-outline" size={24} color={focused ? 'red' : 'black'} />
          ),
          tabBarButton: props => <CustomTabButton props={props} />,
        }}
      />
      <Tab.Screen
        name={routes.BUDGET}
        component={Budget}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Budget" icon="wallet" focused={focused} />,
        }}
      />
      <Tab.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Profile" icon="face-profile" focused={focused} />,
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
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
