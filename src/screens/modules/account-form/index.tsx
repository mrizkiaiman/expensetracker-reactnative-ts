import React, {useState} from 'react'
import {StyleSheet, SafeAreaView, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {useKeyboardListener} from '@hooks/index'
import {IProps} from '@app/types'
import {IAccountForm} from '@models/account'

import myStyles from '@styles/index'
import {RAW_COLORS, SPACES} from '@styles/vars'

import AddAcountImage from '@assets/illustrations/add-account.svg'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Header from '@components/Header'
import Text from '@components/Text'
import Button from '@components/Button'
import {FormikButton, FormikForm, FormikInput} from '@components/formik'

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
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={50}
        extraHeight={50}
        contentContainerStyle={{paddingBottom: SPACES.oneSpace}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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
              console.log('masuk')
              setSubmitting(true)
              resetForm()
            }}>
            <FormikInput name="name" placeholder="Account name" />
            <FormikInput name="amount" placeholder="Amount" isNumber={true} autoCapitalize="none" />
            <FormikInput name="accountType" placeholder="Account Type" autoCapitalize="none" />
            <FormikButton title="Sign in" />
          </FormikForm>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default AccountForm

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: RAW_COLORS.background,
    flex: 1,
  },
  contentContainer: {
    ...myStyles.phOne,
    paddingTop: 64,
  },
  illustrationImg: {
    alignSelf: 'center',
    marginLeft: SPACES.oneSpace + SPACES.halfSpace,
    marginTop: -SPACES.twoSpace,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Prompt_700Bold',
    marginVertical: SPACES.twoSpace,
  },
})
