import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'
import {SCREEN_SIZE} from '@styles/vars'

interface IScrollViewBounced extends IProps {
  color: string
}

const ScrollViewBounced: React.FunctionComponent<IScrollViewBounced> = props => {
  const {color} = props

  return <View style={{...styles.mainContainer, backgroundColor: color}} />
}

export default ScrollViewBounced

const styles = StyleSheet.create({
  mainContainer: {
    height: SCREEN_SIZE.fullHeight,
    position: 'absolute',
    top: -SCREEN_SIZE.fullHeight,
    left: 0,
    right: 0,
  },
})
