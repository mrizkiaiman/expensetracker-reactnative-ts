import React from 'react'
import {StyleSheet, View, Image} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS} from '@app/utils/styles/vars'

import {Text} from '@components/index'

interface IPProfile extends IProps {}

const Profile: React.FunctionComponent<IPProfile> = props => {
  const menus = [
    {
      name: 'Edit Profile',
      onPress: () => console.log('Edit Profile'),
      comingSoon: false,
    },
    {
      name: 'Change Language',
      onPress: () => console.log('Change Language'),
      comingSoon: true,
    },
    {
      name: 'Change Password',
      onPress: () => console.log('Change Password'),
      comingSoon: true,
    },
    {
      name: 'Contact us',
      onPress: () => console.log('Contact us'),
      comingSoon: true,
    },
    {
      name: 'Logout',
      onPress: () => console.log('Logout'),
      comingSoon: false,
    },
  ]

  return (
    <View style={styles.root}>
      <Image style={styles.avatar} source={require('@assets/illustrations/avatar.png')} />
      <View style={styles.menuContainer}>
        {menus.map((menu, index) => (
          <Menu name={menu?.name} onPress={menu?.onPress} comingSoon={menu?.comingSoon} key={menu?.name} />
        ))}
      </View>
    </View>
  )
}

export default Profile

interface IPMenu extends IProps {
  name: string
  onPress?: () => void
  comingSoon?: boolean
}

const Menu: React.FunctionComponent<IPMenu> = props => {
  const {name, onPress, comingSoon} = props

  return (
    <View style={styles.menu}>
      <Text type="semibold" style={[styles.menuText, name === 'Logout' && {color: COLORS.primary}]}>
        {name}
      </Text>

      {comingSoon && (
        <View style={styles.comingSoonBadge}>
          <Text type="semibold" style={styles.comingSoonBadgeText}>
            Coming soon
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 64,
    alignItems: 'center',
  },
  avatar: {
    height: 160,
    width: 160,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.line,
  },
  menuContainer: {
    marginTop: 32,
    width: '90%',
  },
  menu: {
    height: 50,
    justifyContent: 'space-between',
    marginVertical: 4,
    borderBottomWidth: 1,
    borderColor: COLORS.line,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: COLORS.gray,
  },
  comingSoonBadge: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 6,
  },
  comingSoonBadgeText: {
    fontSize: 8,
    color: COLORS.primary,
    padding: 4,
  },
})
