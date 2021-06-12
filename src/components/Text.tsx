import React, {ReactNode} from 'react'
import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native'
import {IProps, CommonTypes} from '@app/types'
import colors from '@styles/colors'

interface ICText extends IProps {
  type?: 'default' | 'regular' | 'semibold' | 'bold' | 'title'
  onPress?: () => void | null
}

const DefaultText: React.FC<ICText> = ({children, style, type, onPress}) => {
  const usedStyle = styles[type || 'default']
  return (
    <Text onPress={onPress} style={[usedStyle, style]}>
      {children}
    </Text>
  )
}

export default DefaultText

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    fontFamily: 'Prompt_400Regular',
  },
  regular: {
    fontSize: 14,
    fontFamily: 'Prompt_400Regular',
  },
  semibold: {
    fontSize: 14,
    fontFamily: 'Prompt_600SemiBold',
  },
  bold: {
    fontSize: 14,
    fontFamily: 'Prompt_700Bold',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Prompt_600SemiBold',
  },
})
