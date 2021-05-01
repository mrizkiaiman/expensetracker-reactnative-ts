import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-paper'
import colors from '../styles/colors'

interface ICButton {
  title: string
  onSubmit: () => void
}

const CustomButton: React.FC<ICButton> = ({title, onSubmit}) => {
  return (
    <Button style={styles.mainContainer} mode="contained" onPress={onSubmit}>
      {title}
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
