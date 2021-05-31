import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {IProps, CommonTypes} from '@app/types'
import colors from '@styles/colors'

import Text from '@components/Text'

interface ICButton extends IProps {
  title: CommonTypes['title']
  onPress?: CommonTypes['onPress']
}

const CustomButton: React.FC<ICButton> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPress}>
      <Text type="bold" style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 8,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
