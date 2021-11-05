import React, {ReactNode} from 'react'
import {StyleSheet, Text, View, StyleProp, TextStyle} from 'react-native'
import {IProps} from '@app/constants/types/_common'

interface IPText extends IProps {
  type?: 'default' | 'regular' | 'semibold' | 'bold' | 'title' | 'big-title'
  onPress?: () => void
  children: ReactNode
}

const DefaultText: React.FunctionComponent<IPText> = props => {
  const {children, style, type, onPress} = props
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
  'big-title': {
    fontSize: 24,
    fontFamily: 'Prompt_700Bold',
  },
})
