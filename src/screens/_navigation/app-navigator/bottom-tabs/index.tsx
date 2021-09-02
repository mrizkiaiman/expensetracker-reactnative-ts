import React, {Children} from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import routes from '@navigation/routes'

import {RAW_COLORS} from '@styles/vars'

import Home from '@screens/common/home'
import Daily from '@screens/common/daily'
import Profile from '@screens/common/profile'
import Stats from '@app/screens/common/stats'
import CreateTransactions from '@screens/modules/transaction-create'

interface TabProps {}
interface IPTabIcons {
  focused: boolean
  icon: any
  title: string
}

const TabIcon = (props: IPTabIcons) => (
  <View style={styles.tabIconContainer}>
    <MaterialCommunityIcons name={props.icon} size={24} color={props.focused ? RAW_COLORS.pink : RAW_COLORS.gray} />
    <Text style={{...styles.tabIconText, color: props.focused ? RAW_COLORS.pink : RAW_COLORS.gray}}>{props.title}</Text>
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

const BottomTabs: React.FunctionComponent<TabProps> = props => {
  const navigation = useNavigation()
  const Tab = createBottomTabNavigator()

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
          tabBarButton: props => <CustomTabButton onPress={() => navigation.navigate(routes.TRANSACTION_CREATE)} />,
        }}
      />
      <Tab.Screen
        name={routes.STATS}
        component={Stats}
        options={{
          tabBarIcon: ({focused}) => <TabIcon title="Stats" icon="wallet" focused={focused} />,
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
    backgroundColor: RAW_COLORS.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
