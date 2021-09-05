import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import {IProps} from '@app/types'
import {styles} from './styles'
import {IPTransactionRow} from '@app/domain/models/modules/transaction'
import {RAW_COLORS, SCREEN_SIZE} from '@styles/vars'
import {optionsFormatter} from '@utils/optionsFormatter'

import Measurement from '@app/mockdata/measurement.json'
import {FormikForm, FormikInput, FormikChipPicker} from '@components/formik'
import {Header} from '@components/index'

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

  const [initialValues, setInitialValues] = useState<IPTransactionRow>({
    user: '',
    budget: '',
    category: {
      name: '',
      img: '',
    },
    account: '',
    measurement: '',
    experience: '',
    amount: 0,
    description: '',
    transactionType: '',
    dt_created: '',
    dt_updated: '',
  })

  return (
    <View style={styles.root}>
      <Header title="Create Transaction" />
      <View style={styles.mainContainer}>
        <FormikForm
          initialValues={initialValues}
          onSubmit={async ({resetForm, setSubmitting}: any) => {
            setSubmitting(true)
            resetForm()
          }}>
          <FormikChipPicker label={'Measurement'} items={optionsFormatter(Measurement)} name={'measurement'} />
        </FormikForm>
      </View>
    </View>
  )
}
