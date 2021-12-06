import React, {ReactNode, memo} from 'react'
import {StyleSheet, View} from 'react-native'

import handleColor, {typeColor} from '@app/utils/styles/colorOptions'
import {IProps} from '@app/constants/types/_common'

import Text from '@components/_Text'

interface IPBadge extends IProps {
  color: typeColor
  children: string | ReactNode | null
}

const Badge: React.FunctionComponent<IPBadge> = props => {
  const {color, bgColor} = handleColor(props.color)

  return (
    <View style={[styles.mainContainer, {backgroundColor: bgColor}, props.style]}>
      <Text style={{...styles.text, color: color}} type="semibold">
        {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#FFF0E1',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    lineHeight: 22,
  },
})

export default memo(Badge)
