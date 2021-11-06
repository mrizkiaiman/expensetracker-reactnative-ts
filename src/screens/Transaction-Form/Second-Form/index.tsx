import React, {useState, useRef} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import {IProps} from '@app/constants/types/_common'
import {styles} from './styles'
import {ITransactionRow} from '@app/constants/types/transaction'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import {optionsFormatter} from '@app/utils/helpers/optionsFormatter'

import Measurement from '@app/mockdata/measurement.json'
import {FormikForm, FormikInput, FormikChipPicker, FormikDatePicker} from '@app/components/Formik'
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

  const [initialValues, setInitialValues] = useState<ITransactionRow>({
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
    <>
      <View style={styles.root}>
        <Header title="Create Transaction" />
        <View style={styles.mainContainer}>
          <FormikForm
            initialValues={initialValues}
            onSubmit={async ({resetForm, setSubmitting}: any) => {
              setSubmitting(true)
              resetForm()
            }}>
            <FormikInput label={'Description'} placeholder={'McMuffin'} name={'description'} />
            <FormikInput label={'Amount'} placeholder={'Rp100.000'} name={'Amount'} keyboardType={'number-pad'} />
            <FormikDatePicker label={'Date'} placeholder={'Please input the date'} name={'dt_created'} />
            <FormikChipPicker label={'Measurement'} items={optionsFormatter(Measurement)} name={'measurement'} />
          </FormikForm>
        </View>
      </View>
    </>
  )
}
