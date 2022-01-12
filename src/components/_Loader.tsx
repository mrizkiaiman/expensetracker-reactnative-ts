import React from 'react'
import { StyleSheet, Modal, View, ActivityIndicator, Platform } from 'react-native'

import { COLORS } from '@styles/vars'
import { useNavigation } from '@react-navigation/core'
import { IProps } from '@app/constants/types/_common'

interface IPLoader extends IProps {
  loading?: boolean
  backgroundColor?: string
}

const Loader = (props: IPLoader) => {
  const navigation = useNavigation()
  return (
    <Modal statusBarTranslucent onRequestClose={navigation.goBack} visible={Boolean(props?.loading)} transparent>
      <View style={[styles.centeredView, props?.backgroundColor ? { backgroundColor: props?.backgroundColor } : null]}>
        <ActivityIndicator
          testID="loading_indicator"
          animating={Boolean(props?.loading)}
          size="large"
          style={styles.loader}
          color={COLORS.primary}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.4)',
  },
  loader: {
    transform: [{ scale: Platform.OS === 'ios' ? 1 : 1.8 }],
  },
})

export default Loader
