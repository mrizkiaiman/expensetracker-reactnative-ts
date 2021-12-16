import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {AccountFormProps} from '@nav-types/index'

import {IProps} from '@app/constants/types/_common'
import {IAccountForm} from '@app/constants/types/account'
import {styles} from './styles'
import {SPACES} from '@styles/vars'
import {addAccountValidationSchema} from '@utils/validators'
import {successToast} from '@components/_Toast'

import AddAcountImage from '@assets/illustrations/add-account.svg'
import {KeyboardAwareWrapper} from '@app/components/Wrapper'
import {Text, Header} from '@app/components'
import {FormikForm, FormikInput, FormikButton} from '@app/components/Formik'
import {FooterButtonWrapper} from '@components/Wrapper/index'

const AccountForm: React.FunctionComponent<AccountFormProps> = ({navigation}) => {
  const [initialValues, setInitialValues] = useState<IAccountForm>({
    name: '',
    accountType: '',
  })

  const submit_addAccount = async () => {
    successToast('New transaction is successfully added')
    navigation.goBack()
  }

  return (
    <View style={styles.mainContainer}>
      <FormikForm
        initialValues={initialValues}
        validationSchema={addAccountValidationSchema}
        onSubmit={submit_addAccount}>
        <KeyboardAwareWrapper extraScrollHeight={90} extraHeight={90}>
          <Header title="Create Account" />
          <AddAcountImage style={styles.illustrationImg} height={210} width={210} />
          <Text style={styles.title}>Add new account</Text>
          <View style={styles.contentContainer}>
            <FormikInput isRequired label="Account name" name="name" placeholder="Main savings" />
            {/* <FormikInput
              label="Starter amount"
              name="amount"
              placeholder="Rp100.000"
              keyboardType={'numeric'}
              autoCapitalize="none"
            /> */}
            <FormikInput isRequired label="Account type" name="accountType" placeholder="Bank" autoCapitalize="none" />
          </View>
        </KeyboardAwareWrapper>
        <FooterButtonWrapper>
          <FormikButton style={{flex: 1}} title="Submit" />
        </FooterButtonWrapper>
      </FormikForm>
    </View>
  )
}

export default AccountForm
