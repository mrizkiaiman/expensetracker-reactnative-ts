import React, {useState} from 'react'
import {StyleSheet, View, Pressable, TouchableOpacity} from 'react-native'

import {IProps} from '@app/constants/types/_common'
import {COLORS, SCREEN_SIZE} from '@styles/vars'

import {Text} from '@components/index'
import {MotiView, AnimatePresence} from 'moti'
import {Ionicons, FontAwesome, MaterialCommunityIcons, Feather, Entypo} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'

interface IPPlusMiddleButton extends IProps {}

export const PlusMiddleButton: React.FunctionComponent<IPPlusMiddleButton> = props => {
  const [expanded, setExpanded] = useState(false)
  const navigation = useNavigation<any>()
  const expandedButtons = [
    {
      title: 'Transaction',
      icon: <MaterialCommunityIcons name="book-outline" size={24} color={COLORS.primary} />,
      color: 'white',
      onPress: () => {
        navigation.navigate('TRANSACTION_FORM_FIRST')
        setExpanded(false)
      },
      style: styles.addTransactionButton,
    },
    {
      title: 'Account',
      icon: <MaterialCommunityIcons name="wallet" size={24} color={COLORS.primary} />,
      color: 'white',
      onPress: () => {
        navigation.navigate('ACCOUNT_FORM')
        setExpanded(false)
      },
      style: styles.addAccountButton,
    },
  ]

  return (
    <>
      <TouchableOpacity
        style={{
          top: -20,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
        }}
        onPress={() => setExpanded(!expanded)}>
        <View style={styles.plusButton}>
          <MaterialCommunityIcons name="plus" size={44} color="white" />
        </View>
      </TouchableOpacity>
      <AnimatePresence>
        {expanded && (
          <>
            {expandedButtons.map((button, i) => (
              <ExpandedButton key={i} button={button} index={i} />
            ))}
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const ExpandedButton = ({button, index}: any) => (
  <MotiView
    transition={{delay: index * 100, damping: 12}}
    from={{
      opacity: 0,
      translateY: 0,
    }}
    animate={{
      opacity: 1,
      translateY: -108 * (index + 1),
      translateX: 0,
    }}
    exit={{
      opacity: 0,
      translateY: 0,
    }}>
    <TouchableOpacity
      onPress={button?.onPress}
      style={[
        {
          backgroundColor: button.color,
          shadowColor: button.color,
          ...button.style,
        },
      ]}>
      {button.icon}
      <Text style={{fontSize: 8, color: COLORS.primary, marginTop: 4}}>{button.title}</Text>
    </TouchableOpacity>
  </MotiView>
)

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
  plusButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTransactionButton: {
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 46,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
    borderWidth: 0.5,
    borderColor: COLORS.line,
  },
  addAccountButton: {
    borderRadius: 100,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -108,
    right: -56,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 1,
    borderColor: COLORS.line,
    borderWidth: 0.5,
  },
})
