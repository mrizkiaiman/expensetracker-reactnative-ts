import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {IProps, CommonTypes} from '@app/types'
import colors from '@styles/colors'

import {Button} from 'react-native-paper'

interface ICButton extends IProps {
  title: CommonTypes['title']
  onPress?: CommonTypes['onPress']
}

const CustomButton: React.FC<ICButton> = ({title, onPress}) => {
  return (
    <Button style={styles.mainContainer} mode="contained" onPress={onPress}>
      <Text>{title}</Text>
    </Button>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.green,
    padding: 8,
    margin: 4,
  },
})
