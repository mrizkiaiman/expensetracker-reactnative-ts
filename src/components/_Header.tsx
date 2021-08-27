import React from 'react'
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native'
import {useNavigation} from '@react-navigation/core'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {RAW_COLORS} from '@styles/vars'

import ChevronRight from '@assets/icons/chevron-right.svg'
import {Text} from '@app/components'

interface IPHeader {
  title?: string
  headerRight?: () => JSX.Element
  onGoBack?: () => void
}

const Header: React.FunctionComponent<IPHeader> = props => {
  const {title, headerRight, onGoBack} = props
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.mainContainer, {paddingTop: insets.top}]}>
      <View style={[styles.mainContainer, styles.header]}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.titleContainer} onPress={onGoBack ? onGoBack : navigation.goBack}>
            <ChevronRight style={styles.leftIcon} />
            <Text type="semibold" style={{fontSize: 24}}>
              {title && title?.length < 25 ? `${title}` : `${title?.substring(0, 22)}...`}
            </Text>
          </TouchableOpacity>
          {headerRight && headerRight()}
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: RAW_COLORS.background,
    justifyContent: 'center',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.03,
    elevation: 1,
  },
  header: {
    height: 64,
  },
  contentContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 18,
    marginLeft: 24,
    height: 30,
    width: 30,
  },
})
