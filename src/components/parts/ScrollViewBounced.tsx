import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps} from '@app/types'
import size from '@styles/size'
const {width, height} = size

interface IPScrollViewBounced extends IProps {
  color: string
}

const ScrollViewBounced: React.FC<IPScrollViewBounced> = ({color}) => {
  return <View style={{...styles.mainContainer, backgroundColor: color}} />
}

export default ScrollViewBounced

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    position: 'absolute',
    top: -height,
    left: 0,
    right: 0,
  },
})
