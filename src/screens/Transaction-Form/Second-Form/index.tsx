import React, {useState, useRef} from 'react'
import {ScrollView, View} from 'react-native'
import {SecondTransactionFormProps} from '@nav-types/index'

import {styles} from './styles'
import {ITransactionForm} from '@app/constants/types/transaction'
import {SCREEN_SIZE} from '@styles/vars'
import {optionsFormatter} from '@app/utils/helpers/optionsFormatter'
import {addTransactionValidationSchema} from '@utils/validators'

import Measurement from '@app/mockdata/measurement.json'
import Experience from '@app/mockdata/experience.json'
import {Modalize} from 'react-native-modalize'
import {
  FormikForm,
  FormikButton,
  FormikInput,
  FormikChipPicker,
  FormikDatePicker,
  FormikTouchableInput,
} from '@app/components/Formik'
import {FooterButtonWrapper} from '@components/Wrapper/index'
import {Header} from '@components/index'
import {ModalizeCategories} from './components/ModalizeCategories'
import {ModalizeAccount} from './components/ModalizeAccount'

export const SecondTransactionForm: React.FunctionComponent<SecondTransactionFormProps> = ({route}) => {
  const {
    params: {transactionType},
  } = route

  const modalize_categoriesRef = useRef<Modalize>(null)
  const modalize_accountRef = useRef<Modalize>(null)

  const [initialValues, setInitialValues] = useState<ITransactionForm>({
    user: '',
    category: '',
    categoryForDisplay: '',
    account: '',
    accountForDisplay: '',
    measurement: '',
    experience: '',
    amount: 0,
    description: '',
  })

  const onOpenModalize = (modal?: string) => {
    if (modal === 'account') {
      modalize_accountRef.current?.open()
    } else {
      modalize_categoriesRef.current?.open()
    }
  }

  const onCloseModalize = (modal?: string) => {
    if (modal === 'account') {
      modalize_accountRef.current?.close()
    } else {
      modalize_categoriesRef.current?.close()
    }
  }

  const submit_addTransaction = async () => {}

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
            submit_addTransaction()
          }}>
          <ScrollView style={styles.mainContainer}>
            <FormikInput isRequired label={'Description'} placeholder={'McMuffin'} name={'description'} />
            <FormikInput
              isRequired
              label={'Amount'}
              placeholder={'Rp100.000'}
              name={'amount'}
              keyboardType={'number-pad'}
            />
            <FormikTouchableInput
              customValueDisplay
              isRequired
              onPress={() => onOpenModalize('account')}
              label={'Account'}
              placeholder={'Choose account'}
              name={'account'}
            />
            <FormikTouchableInput
              customValueDisplay
              isRequired
              onPress={() => onOpenModalize('category')}
              label={'Category'}
              placeholder={'Choose category'}
              name={'category'}
            />
            <FormikDatePicker label={'Date'} placeholder={'Input the date'} name={'dt_created'} />
            <FormikChipPicker label={'Measurement'} items={optionsFormatter(Measurement)} name={'measurement'} />
            <FormikChipPicker label={'Experience'} items={optionsFormatter(Experience)} name={'experience'} />
          </ScrollView>
          <FooterButtonWrapper>
            <FormikButton style={{flex: 1}} title="Submit" />
          </FooterButtonWrapper>
          <Modalize modalHeight={SCREEN_SIZE.fullHeight * 0.4} ref={modalize_accountRef}>
            <ModalizeAccount name={'account'} onClose={() => onCloseModalize('account')} />
          </Modalize>
          <Modalize modalHeight={SCREEN_SIZE.fullHeight * 0.6} ref={modalize_categoriesRef}>
            <ModalizeCategories name={'category'} onClose={() => onCloseModalize('category')} />
          </Modalize>
        </FormikForm>
      </View>
    </>
  )
}
