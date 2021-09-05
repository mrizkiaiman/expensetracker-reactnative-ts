import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import {IProps} from '@app/types'
import {styles} from './styles'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'

import {Header, ChipPicker} from '@components/index'

interface IPSecondTransactionForm extends IProps {
  transactionType: {
    name: string
    id: string
  }
}

export const SecondTransactionForm: React.FunctionComponent<IPSecondTransactionForm> = props => {
  const navigation = useNavigation()
  const route: any = useRoute()
  const {
    params: {transactionType},
  } = route

  return (
    <View style={styles.mainContainer}>
      <Header title="Create Transaction" />
      <ChipPicker
        label={'Measurement'}
        onChange={() => console.log('test')}
        items={[
          {
            value: 'a',
            label: 'a',
          },
          {
            value: 'b',
            label: 'b',
          },
          {
            value: 'c',
            label: 'c',
          },
        ]}
      />
    </View>
  )
}
