import React, {useState, useRef} from 'react'
import {ScrollView, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'

import {IProps} from '@app/constants/types/_common'
import {styles} from './styles'
import {ITransactionRow, ITransactionForm} from '@app/constants/types/transaction'
import {COLORS, SCREEN_SIZE} from '@styles/vars'
import {optionsFormatter} from '@app/utils/helpers/optionsFormatter'
import {addTransactionValidationSchema} from '@utils/validators'

import Measurement from '@app/mockdata/measurement.json'
import Experience from '@app/mockdata/experience.json'
import {FormikForm, FormikInput, FormikChipPicker, FormikDatePicker, FormikTouchableInput, FormikPicker} from '@app/components/Formik'
import {FooterButtonWrapper} from '@components/Wrapper/index'
import {Header, Button} from '@components/index'

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

  const [initialValues, setInitialValues] = useState<ITransactionForm>({
    user: '',
    category: '',
    account: '',
    measurement: '',
    experience: '',
    amount: 0,
    description: '',
  })

  return (
    <>
      <View style={styles.root}>
        <Header title="Create Transaction" />
          <FormikForm
            validationSchema={addTransactionValidationSchema}
            initialValues={initialValues}
            onSubmit={async ({resetForm, setSubmitting}: any) => {
              setSubmitting(true)
              resetForm()
            }}>
            <ScrollView style={styles.mainContainer}>
              <FormikInput isRequired label={'Description'} placeholder={'McMuffin'} name={'description'} />
              <FormikInput isRequired label={'Amount'} placeholder={'Rp100.000'} name={'Amount'} keyboardType={'number-pad'} />
              <FormikTouchableInput isRequired onPress={() => console.log('test')} label={'Account'} placeholder={'Choose account'} name={'account'} />
              <FormikDatePicker label={'Date'} placeholder={'Input the date'} name={'dt_created'} />
              <FormikChipPicker label={'Measurement'} items={optionsFormatter(Measurement)} name={'measurement'} />
              <FormikChipPicker label={'Experience'} items={optionsFormatter(Experience)} name={'experience'} />
            </ScrollView>
            <FooterButtonWrapper><Button style={{flex: 1}} title="Submit"/></FooterButtonWrapper>
          </FormikForm>
      </View>
    </>
  )
}
