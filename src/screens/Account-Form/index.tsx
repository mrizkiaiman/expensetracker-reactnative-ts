import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useKeyboardListener} from '@hooks/index'

import {IProps} from '@app/constants/types/_common'
import {IAccountForm} from '@app/constants/types/account'
import {styles} from './styles'
import {SPACES} from '@styles/vars'

import AddAcountImage from '@assets/illustrations/add-account.svg'
import {KeyboardAwareWrapper} from '@app/components/Wrapper'
import {Text, Header} from '@app/components'
import {FormikForm, FormikInput} from '@app/components/Formik'

interface IPAccountForm extends IProps {}

const AccountForm: React.FunctionComponent<IPAccountForm> = props => {
  const navigation = useNavigation()
  const keyboardVisibility = useKeyboardListener()

  const [initialValues, setInitialValues] = useState<IAccountForm>({
    name: '',
    amount: '',
    accountType: '',
  })

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header title="Create Account" />
      <KeyboardAwareWrapper>
        <View style={styles.contentContainer}>
          {keyboardVisibility ? (
            <AddAcountImage style={{alignSelf: 'flex-start', marginTop: -SPACES.twoSpace}} height={120} width={120} />
          ) : (
            <AddAcountImage style={styles.illustrationImg} height={210} width={210} />
          )}
          <Text style={styles.title}>Add new account</Text>
          <FormikForm
            initialValues={initialValues}
            onSubmit={async ({resetForm, setSubmitting}: any) => {
              setSubmitting(true)
              resetForm()
            }}>
            <FormikInput label="Account name" name="name" placeholder="Main savings" />
            <FormikInput
              label="Starter amount"
              name="amount"
              placeholder="Rp100.000"
              keyboardType={'numeric'}
              autoCapitalize="none"
            />
            <FormikInput
              label="Account type"
              name="accountType"
              placeholder="Bank"
              autoCapitalize="none"
              withSubmitButton={true}
            />
          </FormikForm>
        </View>
      </KeyboardAwareWrapper>
    </SafeAreaView>
  )
}

export default AccountForm
